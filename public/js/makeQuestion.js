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
let html = createQuestion(questions);
// create btn View
let hiddenParam = document.getElementById('F_question');
let setBtn = '<button type="submit" name="' + paramKeyName + '" value="' + param + '">回答する</button>';
hiddenParam.insertAdjacentHTML('beforeend',setBtn);
// クエリパラメータの処理
switch (param){
  case '0':
  	contentElem.insertAdjacentHTML('afterbegin',html);
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
function createQuestion(arrays){
	let html = [];
	// html.push('<div>');
	for (let i=0; i < 2;i++){
		html.push('<div><h3>' + arrays[0].q_category1[i].q_Titile + '</h3>'
			+ '<input type="radio" name="U_Answer' + i + '"value=' + arrays[0].q_category1[i].q_Select1[1] + '>' + arrays[0].q_category1[i].q_Select1[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + arrays[0].q_category1[i].q_Select2[1] + '>' + arrays[0].q_category1[i].q_Select2[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + arrays[0].q_category1[i].q_Select3[1] + '>' + arrays[0].q_category1[i].q_Select3[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + arrays[0].q_category1[i].q_Select4[1] + '>' + arrays[0].q_category1[i].q_Select4[0]
			+ '</div>'
		);
	};
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
    return result;
};


