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
    contentElem.insertAdjacentHTML('afterbegin',html.join(''))
    break;
}
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
		default :
			html = createQuiz(json,qCateNum); 
			return html
		};
};
// create Quiz html 
function createQuiz(json,qCateNum){
	let html =[];
// q_category=0
	if(qCateNum == 0){
		for (let i=0; i<json[0].q_category1.length;i++){
			let qNum = i + 1;
			html.push('<div><h3>' + qNum +'問目</h3><h3>' + json[0].q_category1[i].q_Titile + '</h3>'
				+ '<input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category1[i].q_Select1[1] + '>' + json[0].q_category1[i].q_Select1[0]
				+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category1[i].q_Select2[1] + '>' + json[0].q_category1[i].q_Select2[0]
				+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category1[i].q_Select3[1] + '>' + json[0].q_category1[i].q_Select3[0]
				+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category1[i].q_Select4[1] + '>' + json[0].q_category1[i].q_Select4[0]
				+ '</div>'
			);
		};
		html.push('<div><p class="U_answerMsg">お疲れ様でした。<br>問題は以上です。<br>回答ボタンを押して解答結果をみましょう。</p>'
		+ '<p style="color:red; text-align:center;" id="error">まだ未回答の問題があります。</p>'
		+ '<button type="submit" class="U_AnswerBtn" name="'
		 + paramKeyName + '" value="'
		 + param + '" id="answerBtn">回答する</button><p id="notAllAnswerMsg"></p></div>');
		return html
	}
	// q_category=1
	if(qCateNum == 1){
		for (let i=0; i<json[1].q_category2.length;i++){
		let qNum = i + 1;
		html.push('<div><h3>' + qNum +'問目</h3><h3>' + json[1].q_category2[i].q_Titile + '</h3>'
			+ '<input type="radio" name="U_Answer' + i + '"value=' + json[1].q_category2[i].q_Select1[1] + '>' + json[1].q_category2[i].q_Select1[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[1].q_category2[i].q_Select2[1] + '>' + json[1].q_category2[i].q_Select2[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[1].q_category2[i].q_Select3[1] + '>' + json[1].q_category2[i].q_Select3[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[1].q_category2[i].q_Select4[1] + '>' + json[1].q_category2[i].q_Select4[0]
			+ '</div>'
			);
		};
		html.push('<div><p class="U_answerMsg">お疲れ様でした。<br>問題は以上です。<br>回答ボタンを押して解答結果をみましょう。</p>'
		+ '<p style="color:red; text-align:center;" id="error">まだ未回答の問題があります。</p>'
		+ '<button type="submit" class="U_AnswerBtn" name="'
		 + paramKeyName + '" value="'
		 + param + '" id="answerBtn">回答する</button><p id="notAllAnswerMsg"></p></div>');
		return html
	}
// q_category2
	if(qCateNum == 2){
		for (let i=0; i<json[2].q_category3.length;i++){
		let qNum = i + 1;
		html.push('<div><h3>' + qNum +'問目</h3><h3>' + json[2].q_category3[i].q_Titile + '</h3>'
			+ '<input type="radio" name="U_Answer' + i + '"value=' + json[2].q_category3[i].q_Select1[1] + '>' + json[2].q_category3[i].q_Select1[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[2].q_category3[i].q_Select2[1] + '>' + json[2].q_category3[i].q_Select2[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[2].q_category3[i].q_Select3[1] + '>' + json[2].q_category3[i].q_Select3[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[2].q_category3[i].q_Select4[1] + '>' + json[2].q_category3[i].q_Select4[0]
			+ '</div>'
			);
		};
		html.push('<div><p class="U_answerMsg">お疲れ様でした。<br>問題は以上です。<br>回答ボタンを押して解答結果をみましょう。</p>'
		+ '<p style="color:red; text-align:center;" id="error" class="HiddenError">まだ未回答の問題があります。</p>'
		+ '<button type="submit" class="U_AnswerBtn" name="'
		 + paramKeyName + '" value="'
		 + param + '" id="answerBtn">回答する</button><p id="notAllAnswerMsg"></p></div>');
		return html
	}
// 例外処理
	html.push('<div><h3>問題データの取得に失敗しました。</h3></div>');
	return html
};
// get quetyPram to Obj
function GetQueryString(){
    let result = {};
    if( 1 < window.location.search.length ){
        // 最初の1文字 (?記号) を除いた文字列を取得する
        let query = window.location.search.substring( 1 );
        // クエリの区切り記号 (&) で文字列を配列に分割する
        let parameters = query.split( '&' );
        for( let i = 0; i < parameters.length; i++ ){
            // パラメータ名とパラメータ値に分割する
            let element = parameters[ i ].split( '=' );
            let paramName = decodeURIComponent( element[ 0 ] );
            let paramValue = decodeURIComponent( element[ 1 ] );
            // パラメータ名をキーとして連想配列に追加する
            result[ paramName ] = paramValue;
        };
    }
    return result
};

