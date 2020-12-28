// question.html のクエリパラメータを受け取ってView作成する

// get queryParam 
let Qparam = GetQueryString();
// get QueryParam Value
let param = Qparam.qCategory;
// get QuetyParam name
let paramKeyName = (Object.keys(Qparam));
// get ID
let contentElem = document.getElementById('content');
// create view
let html = createQuiz(questions,param);
// create btn View
let hiddenParam = document.getElementById('F_question');
// HTMLへ出力

contentElem.insertAdjacentHTML('afterbegin',html);

//Main Function 
function createQuiz(json,qCateNum){
	let html =[];
	let EndAnswerHTML = '<div class="q_wrapper"><p class="U_answerMsg">お疲れ様でした。<br>問題は以上です。<br>回答ボタンを押して解答結果をみましょう。</p>'
		+ '<p style="color:red; text-align:center;" id="error"></p>'
		+ '<button type="submit" class="U_AnswerBtn" name="'
		+ paramKeyName + '" value="'
		+ param + '" id="answerBtn">回答する</button><p id="notAllAnswerMsg"></p></div>';

	
// q_category=0
	if(qCateNum == 0){
		// 問題数を取得
		let len = json[qCateNum].q_category.length;
		// 問題を取得、HTML文へ整形
		html.push(addQuiz(json,qCateNum,len,0));
		// 回答ボタンページを最後に追加
		html.push(EndAnswerHTML);
		return html.join('')
	}

	// q_category=1
	if(qCateNum == 1){
		// 問題数を取得
		let len = json[qCateNum].q_category.length;
		// 問題を取得、HTML文へ整形
		html.push(addQuiz(json,qCateNum,len,0));
		// 回答ボタンページを最後に追加
		html.push(EndAnswerHTML);
		return html.join('')
	}

// q_category2
	if(qCateNum == 2){
		// 問題数を取得
		let len = json[qCateNum].q_category.length;
		// 問題を取得、HTML文へ整形
		html.push(addQuiz(json,qCateNum,len,0));
		// 回答ボタンページを最後に追加
		html.push(EndAnswerHTML);
		return html.join('')
	}

	// q_category3
	if(qCateNum == 3){
	// 処理する問題番号
		let num = 0;
		// カテゴリの問題数
		let len = json[0].q_category.length;
		// 問題を取得、HTML文へ整形
		html.push(addQuiz(json,0,len,num));

	// 処理する問題番号を0＋カテゴリ0番号に定義
		num += json[0].q_category.length;
		// カテゴリの問題数を再定義
		len = json[1].q_category.length;
		// 取得
		html.push(addQuiz(json,1,len,num));

	// 処理する問題番号を0＋カテゴリ0＋1の番号に定義
		num += json[1].q_category.length;
		// カテゴリの問題数を再定義
		len = json[2].q_category.length;
		// 取得
		html.push(addQuiz(json,2,len,num));

	// 回答ボタンページを最後に追加
		html.push(EndAnswerHTML);
		return html.join('')		
	}

// 例外処理
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