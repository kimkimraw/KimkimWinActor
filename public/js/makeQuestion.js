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
let html = forkCreateQuestion(questions,param);
// create btn View
let hiddenParam = document.getElementById('F_question');
// クエリパラメータの処理
switch (param){
  case '0':
  	contentElem.insertAdjacentHTML('afterbegin',html.join(''));
    break;
  case '1':
    contentElem.insertAdjacentHTML('afterbegin',html.join(''));
    break;
  case '2':
    contentElem.insertAdjacentHTML('afterbegin',html.join(''));
    break;
  case '3':
    contentElem.insertAdjacentHTML('afterbegin',html.join(''));
  	break;
   default:
    contentElem.insertAdjacentHTML('afterbegin',html.join(''));
    break;
};
//get question category
function forkCreateQuestion(json,qCateNum){
	let html = [];

	switch(qCateNum){
		case '0':
			html = createQuiz(json,qCateNum);
			return html
		case '1':
			html = createQuiz(json,qCateNum);
			return html
		case '2':
			html = createQuiz(json,qCateNum);
			return html
		case '3':
			html = createQuiz(json,qCateNum);
			return html
		default :
			html = createQuiz(json,qCateNum); 
			return html
		};
};
// create Quiz html 
function createQuiz(json,qCateNum){
	let ansewerHTML = '<div><p class="U_answerMsg">お疲れ様でした。<br>問題は以上です。<br>回答ボタンを押して解答結果をみましょう。</p>'
		+ '<p style="color:red; text-align:center;" id="error"></p>'
		+ '<button type="submit" class="U_AnswerBtn" name="'
		+ paramKeyName + '" value="'
		+ param + '" id="answerBtn">回答する</button><p id="notAllAnswerMsg"></p></div>';

	let html =[];
// q_category=0
	if(qCateNum == 0){
		for (let i=0; i<json[0].q_category.length;i++){
			let qNum = i + 1;
			html.push('<div><h3>' + qNum +'問目</h3><h3>' + json[0].q_category[i].q_Titile + '</h3>');
			// ここでランダム選択肢
			html.push(getRandomSelect(json,qCateNum,qNum,i));
			html.push('</div>');
		};
		html.push(ansewerHTML);
		return html
	}

	// q_category=1
	if(qCateNum == 1){
		for (let i=0; i<json[1].q_category.length;i++){
		let qNum = i + 1;
		html.push('<div><h3>' + qNum +'問目</h3><h3>' + json[1].q_category[i].q_Titile + '</h3>');
			// ここでランダム選択肢
			html.push(getRandomSelect(json,qCateNum,qNum,i));
			html.push('</div>');
		};
		html.push(ansewerHTML);
		return html
	}

// q_category2
	if(qCateNum == 2){
		for (let i=0; i<json[2].q_category.length;i++){
		let qNum = i + 1;
		html.push('<div><h3>' + qNum +'問目</h3><h3>' + json[2].q_category[i].q_Titile + '</h3>');
			// ここでランダム選択肢
			html.push(getRandomSelect(json,qCateNum,qNum,i));
			html.push('</div>');
		};
		html.push(ansewerHTML);
		return html
	}

	// q_category3
	if(qCateNum == 3){
		for (let i=0; i<json[0].q_category.length;i++){
		let qNum = i + 1;
		html.push('<div><h3>' + qNum +'問目</h3><h3>' + json[0].q_category[i].q_Titile + '</h3>');
			// ここでランダム選択肢
			html.push(getRandomSelect(json,0,qNum,i));
			html.push('</div>');
		};
		
		for (let i=0; i<json[1].q_category.length;i++){
			let qNum = i + 1 + json[0].q_category.length; //1カテゴリ＋カウント
			html.push('<div><h3>' + qNum +'問目</h3><h3>' + json[1].q_category[i].q_Titile + '</h3>');
			// ここでランダム選択肢
			let a = i + 1; //問題文カウントリセット
			html.push(getRandomSelect(json,1,qNum,i));
			html.push('</div>');
		};

		for (let i=0; i<json[2].q_category.length;i++){
			let qNum = i + 1 + json[0].q_category.length + json[1].q_category.length;//1。2カテゴリ＋カウント
			html.push('<div><h3>' + qNum +'問目</h3><h3>' + json[2].q_category[i].q_Titile + '</h3>');
			// ここでランダム選択肢
			let a = i + 1;　//問題文カウントリセット
			html.push(getRandomSelect(json,2,qNum,i));
			html.push('</div>');
		};
			

		html.push(ansewerHTML);
		return html
	}


// 例外処理
	html.push('<div><h3>問題データの取得に失敗しました。</h3></div>');
	return html
};


// 選択肢をランダムで返す
function getRandomSelect(json,qCateNum,qNumber,i){

	if(qCateNum == 0){
		// 選択肢を配列へ
		let selector = [
				'<br><input type="radio" name="UA' + qNumber + '" value="' + json[0].q_category[i].q_Select[0][1] + '" id="' + qNumber + 0 + '"><label for="' + qNumber + 0 + '">' + json[0].q_category[i].q_Select[0][0]  + '</label><br>',
				'<br><input type="radio" name="UA' + qNumber + '" value="' + json[0].q_category[i].q_Select[1][1] + '" id="' + qNumber + 1 + '"><label for="' + qNumber + 1 + '">' + json[0].q_category[i].q_Select[1][0]  + '</label><br>',
				'<br><input type="radio" name="UA' + qNumber + '" value="' + json[0].q_category[i].q_Select[2][1] + '" id="' + qNumber + 2 + '"><label for="' + qNumber + 2 + '">' + json[0].q_category[i].q_Select[2][0]  + '</label><br>',
				'<br><input type="radio" name="UA' + qNumber + '" value="' + json[0].q_category[i].q_Select[3][1] + '" id="' + qNumber + 3 + '"><label for="' + qNumber + 3 + '">' + json[0].q_category[i].q_Select[3][0]  + '</label><br>'
		];
		// ランダムに入れ替える
		let selectors = choose_at_random(selector,4);
		return selectors.join('')
	}


	if(qCateNum == 1){
		// 選択肢を配列へ
		let selector = [
				'<br><input type="radio" name="UA' + qNumber + '" value="' + json[1].q_category[i].q_Select[0][1] + '" id="' + qNumber + 0 + '"><label for="' + qNumber + 0 + '">' + json[1].q_category[i].q_Select[0][0]  + '</label><br>',
				'<br><input type="radio" name="UA' + qNumber + '" value="' + json[1].q_category[i].q_Select[1][1] + '" id="' + qNumber + 1 + '"><label for="' + qNumber + 1 + '">' + json[1].q_category[i].q_Select[1][0]  + '</label><br>',
				'<br><input type="radio" name="UA' + qNumber + '" value="' + json[1].q_category[i].q_Select[2][1] + '" id="' + qNumber + 2 + '"><label for="' + qNumber + 2 + '">' + json[1].q_category[i].q_Select[2][0]  + '</label><br>',
				'<br><input type="radio" name="UA' + qNumber + '" value="' + json[1].q_category[i].q_Select[3][1] + '" id="' + qNumber + 3 + '"><label for="' + qNumber + 3 + '">' + json[1].q_category[i].q_Select[3][0]  + '</label><br>'
		];
		// ランダムに入れ替える
		let selectors = choose_at_random(selector,4);
		return selectors.join('')
	}


	if(qCateNum == 2){
		// 選択肢を配列へ
		let selector = [
				'<br><input type="radio" name="UA' + qNumber + '" value="' + json[2].q_category[i].q_Select[0][1] + '" id="' + qNumber + 0 + '"><label for="' + qNumber + 0 + '">' + json[2].q_category[i].q_Select[0][0]  + '</label><br>',
				'<br><input type="radio" name="UA' + qNumber + '" value="' + json[2].q_category[i].q_Select[1][1] + '" id="' + qNumber + 1 + '"><label for="' + qNumber + 1 + '">' + json[2].q_category[i].q_Select[1][0]  + '</label><br>',
				'<br><input type="radio" name="UA' + qNumber + '" value="' + json[2].q_category[i].q_Select[2][1] + '" id="' + qNumber + 2 + '"><label for="' + qNumber + 2 + '">' + json[2].q_category[i].q_Select[2][0]  + '</label><br>',
				'<br><input type="radio" name="UA' + qNumber + '" value="' + json[2].q_category[i].q_Select[3][1] + '" id="' + qNumber + 3 + '"><label for="' + qNumber + 3 + '">' + json[2].q_category[i].q_Select[3][0]  + '</label><br>'
		];
		// ランダムに入れ替える
		let selectors = choose_at_random(selector,4);
		return selectors.join('')
	}
	return false
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

