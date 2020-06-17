// question.html のクエリパラメータを受け取ってView作成する

// get quetyParam
let param = location.search;
// get ID
let contentElem = document.getElementById('content');
// create view
let html = createQuestion(questions);
// クエリパラメータの処理
switch (param){
  case '?qCategory=0':
  	contentElem.insertAdjacentHTML('afterbegin',html);
    break;
  case '?qCategory=1':
    alert('未実装');
    break;
  case '?qCategory=2':
    alert('未実装');
    break;
  case '?qCategory=3':
  	alert('未実装');
  	break;
   default:
      document.write("TOPからやり直しな小僧!!<br />");
      break; 
};
//create question view
function createQuestion(arrays){
	let html = [];
	html.push('<div>');
	for (let i=0; i < 2;i++){
		html.push('<form name="user_answer" action="./result.html" method="POST"><h3>' + arrays[0].q_category1[i].q_Titile + '</h3>'
			+ '<input type="radio" name="U_Answer' + i + '"value=' + arrays[0].q_category1[i].q_Select1[1] + '>' + arrays[0].q_category1[i].q_Select1[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + arrays[0].q_category1[i].q_Select2[1] + '>' + arrays[0].q_category1[i].q_Select2[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + arrays[0].q_category1[i].q_Select3[1] + '>' + arrays[0].q_category1[i].q_Select3[0]
			+ '<br><input type="radio" name="U_Answer' + i + '"value=' + arrays[0].q_category1[i].q_Select4[1] + '>' + arrays[0].q_category1[i].q_Select4[0]
			+ '</form></div>'
	);};
	return html
};