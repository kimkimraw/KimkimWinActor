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
let setBtn = '<button type="submit" name="' + paramKeyName + '" value="' + param + '">回答する</button>';
hiddenParam.insertAdjacentHTML('beforeend',setBtn);
// クエリパラメータの処理
switch (param){
  case '0':
  	contentElem.insertAdjacentHTML('afterbegin',html.join(''));
    break;
  case '1':
    alert('未実装');
    break;
  case '2':
    alert('未実装');
    break;
  case '3':
  	alert('未実装');
  	break;
   default:
    document.write('<a href="../../index.html">TOPからやり直しな!!<br /></a>');
    break; 
};
//create question view
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
			console.log('queryparam=2');
			break;
		default:
			document.write('予期せぬエラーが発生しました。');
			break;
		};
};
// get Quiz cate1
function createQuiz(json,qCateNum){
	let QuizJson =[];

	if(qCateNum == 0){
		for (let i=0; i<json[0].q_category1.length;i++){
			let qNum = i + 1;
			QuizJson.push('<div><h3>' + qNum +'問目</h3><h3>' + json[0].q_category1[i].q_Titile + '</h3>'
				+ '<input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category1[i].q_Select1[1] + '>' + json[0].q_category1[i].q_Select1[0]
				+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category1[i].q_Select2[1] + '>' + json[0].q_category1[i].q_Select2[0]
				+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category1[i].q_Select3[1] + '>' + json[0].q_category1[i].q_Select3[0]
				+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category1[i].q_Select4[1] + '>' + json[0].q_category1[i].q_Select4[0]
				+ '</div>'
			);
		};
		return QuizJson
	}

	if(qCateNum == 1){
		for (let i=0; i<json[0].q_category2.length;i++){
		let qNum = i + 1;
		QuizJson.push('<div><h3>' + qNum +'問目</h3><h3>' + json[0].q_category2[i].q_Titile + '</h3>'
			+ '<input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category2[i].q_Select1[1] + '>' + json[0].q_category2[i].q_Select1[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category2[i].q_Select2[1] + '>' + json[0].q_category2[i].q_Select2[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category2[i].q_Select3[1] + '>' + json[0].q_category2[i].q_Select3[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category2[i].q_Select4[1] + '>' + json[0].q_category2[i].q_Select4[0]
			+ '</div>'
			);
		};
		return QuizJson
	}

	return QuizJson
};
// get Quiz cate2
function createQuiz2(json){
	let QuizJson =[];

	for (let i=0; i<json[0].q_category2.length;i++){
		let qNum = i + 1;
		QuizJson.push('<div><h3>' + qNum +'問目</h3><h3>' + json[0].q_category2[i].q_Titile + '</h3>'
			+ '<input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category2[i].q_Select1[1] + '>' + json[0].q_category2[i].q_Select1[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category2[i].q_Select2[1] + '>' + json[0].q_category2[i].q_Select2[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category2[i].q_Select3[1] + '>' + json[0].q_category2[i].q_Select3[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + json[0].q_category2[i].q_Select4[1] + '>' + json[0].q_category2[i].q_Select4[0]
			+ '</div>'
		);
	};
	return QuizJson
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
    return result;
};


