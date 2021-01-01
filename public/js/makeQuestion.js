// question.html のクエリパラメータを受け取ってView作成する

// アクセスされたURLからクエリパラメータを取得
let Qparam = GetQueryString();// get queryParam 
let param = Qparam.qCategory;// カテゴリ種別Noを取得
let AnswerFlg = Qparam.formatFlg;// 回答形式のフラグ値　取得
// HTMLへ表示するのIDを取得
let contentElem = document.getElementById('content');// get ID
let hiddenParam = document.getElementById('F_question');// create btn View

// 問題を作成
let html = CreateAnswerFormat(AnswerFlg,questions,param);
// HTMLへ表示する
contentElem.insertAdjacentHTML('afterbegin',html);// HTMLへ出力

function CreateAnswerFormat (Flg,json,param){
	let format = [];

	// テスト形式でのViewを作成
	if(Flg == 0){
		format = createQuiz(json,param); 
		return format;
	}
	//一問一答形式でのViewを作成 
	if(Flg == 1){
		format = createSingleQuiz(json,param);
		return format;
	}
};

// テスト形式のビュー作成
function makeTestView(json,qCateNum){
	let html = [];
	let queryParamName = 'qCategory';
	// テスト形式の回答ボタン
	const EndAnswerHTML = '<div class="q_wrapper"><p class="U_answerMsg">お疲れ様でした。<br>問題は以上です。<br>回答ボタンを押して解答結果をみましょう。</p>'
		+ '<p style="color:red; text-align:center;" id="error"></p>'
		+ '<button type="submit" class="U_AnswerBtn" name="'
		+ queryParamName + '" value="'
		+ param + '" id="answerBtn">回答する</button><p id="notAllAnswerMsg"></p></div>';

	// 総合問題の場合
	if(qCateNum == 3){
		let len = json[0].q_category.length; // カテゴリの問題数
		let num = 0; // 問題Noを定義
		// 問題を取得、HTML文へ整形
		for(let i=0; i < json.length; i++){
			len = json[i].q_category.length;
			html.push(addQuiz(json,i,len,num));
			num += json[i].q_category.length;
		};
		// 回答ボタンページを最後に追加
		html.push(EndAnswerHTML);
		return html.join('')	
	}else{
		let len = json[qCateNum].q_category.length; // 問題数を取得
		html.push(addQuiz(json,qCateNum,len,0));// 問題を取得、HTML文へ整形
		html.push(EndAnswerHTML);// 回答ボタンページを最後に追加
		return html.join('')
	}
};

// 一問一答形式のビュー作成
function makeSigeleView(json,qCateNum){
	let html = [];
	
	// 総合問題の場合
	if(qCateNum == 3){
		let len = json[0].q_category.length; // カテゴリの問題数
		let num = 0; // 問題Noを定義
		// 問題を取得、HTML文へ整形
		for(let i=0; i < json.length; i++){
			len = json[i].q_category.length;
			html.push(addSingleQuiz(json,i,len,num));
			num += json[i].q_category.length;
		};
		return html.join('')	
	}else{
		let len = json[qCateNum].q_category.length; // 問題数を取得
		html.push(addSingleQuiz(json,qCateNum,len,0));// 問題を取得、HTML文へ整形
		return html.join('')
	}
};


// 総合問題用に各カテゴリを1つの配列へ
// function makeArrAllQuestion(json){
// 	let b = json[1].q_category;
// 	let c = json[2].q_category;
// 	let arrQuestion = json[0].q_category.concat(b).concat(c);
// 	return arrQuestion;
// };


//テスト形式の配列を作成
function createQuiz(json,qCateNum){
	let html =[];
// q_category=0
	if(qCateNum == 0){ return makeTestView(json,qCateNum); }
// q_category=1
	if(qCateNum == 1){ return makeTestView(json,qCateNum); }
// q_category2
	if(qCateNum == 2){ return makeTestView(json,qCateNum); }
// q_category3 カテゴリ0ｰ3を統合して表示
	if(qCateNum == 3){ return makeTestView(json,qCateNum); }
	
// 例外処理 クエリがない場合でアクセスされた場合
	html.push('<div><h3>問題データの取得に失敗しました。</h3></div>');
	return html
};

//一問一答形式の配列を作成
function createSingleQuiz(json,qCateNum){
	let html =[];
// q_category=0
	if(qCateNum == 0){ return makeSigeleView(json,qCateNum); }
// q_category=1
	if(qCateNum == 1){ return makeSigeleView(json,qCateNum); }
// q_category2
	if(qCateNum == 2){ return makeSigeleView(json,qCateNum); }
// q_category3 カテゴリ0ｰ3を統合して表示
	if(qCateNum == 3){ return makeSigeleView(json,qCateNum); }
	
// 例外処理 クエリがない場合でアクセスされた場合
	html.push('<div><h3>問題データの取得に失敗しました。</h3></div>');
	return html
};


// 選択肢をランダムで返す
function getRandomSelect(json,qCateNum,qNumber,i){
	// 選択肢を配列へ
	let selector = [
			'<div class="selecter"><br><input type="radio" name="UA' + qNumber + '" value="' + json[qCateNum].q_category[i].q_Select[0][1] + '" id="' + qNumber + 0 + '"><label for="' + qNumber + 0 + '">' + json[qCateNum].q_category[i].q_Select[0][0]  + '</label></div>',
			'<div class="selecter"><br><input type="radio" name="UA' + qNumber + '" value="' + json[qCateNum].q_category[i].q_Select[1][1] + '" id="' + qNumber + 1 + '"><label for="' + qNumber + 1 + '">' + json[qCateNum].q_category[i].q_Select[1][0]  + '</label></div>',
			'<div class="selecter"><br><input type="radio" name="UA' + qNumber + '" value="' + json[qCateNum].q_category[i].q_Select[2][1] + '" id="' + qNumber + 2 + '"><label for="' + qNumber + 2 + '">' + json[qCateNum].q_category[i].q_Select[2][0]  + '</label></div>',
			'<div class="selecter"><br><input type="radio" name="UA' + qNumber + '" value="' + json[qCateNum].q_category[i].q_Select[3][1] + '" id="' + qNumber + 3 + '"><label for="' + qNumber + 3 + '">' + json[qCateNum].q_category[i].q_Select[3][0]  + '</label></div>'
	];
	// ランダムに入れ替える
	let selectors = choose_at_random(selector,4);
	return selectors.join('')
};
// 配列をランダムに入れ替える
function choose_at_random(arrayData, count) {
    // countが設定されていない場合は1にする
    count = count || 1;
    arrayData = arrayData;
    let result = [];
    for (let i = 0; i < count; i++) {
        let arrayIndex = Math.floor(Math.random() * arrayData.length);
        result[i] = arrayData[arrayIndex];
        // 1回選択された値は削除して再度選ばれないようにする
        arrayData.splice(arrayIndex, 1);
    }
    return result;
}
// 問題を取得
function addQuiz(json,palam,len,qNum){
	let result = [];
	for(let i=0; i < len; i++){
		qNum = qNum + 1;
			result.push('<div class="q_wrapper"><h3>' + qNum +'問目</h3><h3>' + json[palam].q_category[i].q_Titile + '</h3>');
			// ここでランダム選択肢
			result.push(getRandomSelect(json,palam,qNum,i));
			result.push('</div>');
	}
	return result.join('');
};

function addSingleQuiz(json,palam,len,qNum){
	let result = [];
	for(let i=0; i < len; i++){
		qNum = qNum + 1;
			result.push('<div class="q_wrapper"><h3>' + qNum +'問目</h3><h3>' + json[palam].q_category[i].q_Titile + '</h3>');
			// ここでランダム選択肢
			result.push(getRandomSelect(json,palam,qNum,i));
			// 一問一答形式の回答ボタン
			let AnswerSinglebtn = '<button class="SingleAnswerBtn" id="SingleAnswerBtn" name="' + "UA" + qNum +  '">回答する</button>';
			result.push(AnswerSinglebtn); 
			let CurrectView = addCurrectView(json,palam,i);

			// 回答ビュ-
			let AnswerView = '<div>'
				+ '<p id="UA' + qNum + '" class="currectMsg"></p>' 
				+ '<div id="UA' + qNum + 'DiscriptionWrapper" class=""hidden>'
				+ CurrectView
				+ '<div class="discriptionViewBtn" id="discriptionBtn' + i + '">解説をみる<span class="trgBtn">＞</span></div>'
				+ '<div class="discriptionErea" id="discriptionView' + i + '"' + '>'
				+ '<p class="discriptionMsg">' + json[palam].q_category[i].q_Desctiption + '</p></div></div>';

			
			result.push(AnswerView);
			result.push('</div></div></div>'); 
	}
	
	return result.join('');
};

// 解説を追加
function addDispcription(json,palam,i){
	let discription = json[palam].q_category[i].q_Desctiption;
}
function addCurrectView(json,palam,i){
	let Currect = '<p class="resultMsg">正解：';
	for(let j=0; j<4; j++){
		let Answerflg = json[palam].q_category[i].q_Select[j][1];
		if(Answerflg == 1){
			Currect += json[palam].q_category[i].q_Select[j][0];
			Currect += '</p>';
			return Currect
		}
	};

	
}
