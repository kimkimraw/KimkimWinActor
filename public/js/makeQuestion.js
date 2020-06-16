// Jsonを使用した処理

// indexからのget form quetyparam
// 取得したparamからどのJsonを取得するか判断
// onloadでview作成（読み込み画面作成しても良いかも）

// html button -> button value = json.qNo -> for makequestion
 // -> page to question.html  



// クエリパラメーた　が
// q＿category=0　の時

// jsonはquestions[0].q_category1[0]
// をとる

// 具体的には
// 1 スイッチ分で分岐する
// 2 クエリパラメータがnの時Jsonは●●を取得する
// 3 取得したJsonをHTMlに処理、Viewする

// nn error はおいとく

//post value json redirect
console.log("get makeQuestion.js!!");
// get quetyParam
let param = location.search;
console.log('quetyParam :' + param);
alert(param);


// get container ID Null
let containerElem = document.getElementById('container');


// json test
console.log(questions);
console.log(questions[0].q_category1[0].q_Titile);
// create view
let html = createQuestion(questions);
console.log(html);

switch (param){
  case '?qCategory=0':
  	// containerElem.insertAdjacentHTML('beforeend', html.join(''));
  	document.write(html);
    break;
  case '?qCategory=1':
    alert('ok');
    break;
  case '?qCategory=2':
    alert('ok');
    break;
  case '?qCategory=3':
  	alert('ok');
  	break;
   default:
      document.write("fuck you!!<br />");
      break; 
};

// //get html button value
// function getValue (elem){
// 	let value = elem.value;
// 	console.log("BTN_VALUE :" +  elem.value);
// 	// button is undefined error
// 	if (value == undefined) {
// 		alert('予期しないエラーが発生しました。');
// 		return false
// 	}
// 	//return button value 
// 	return value
// };

// //check -> button value == JsonSectionNo 
// function IsJsonName(elem,jsonNum){
// 	// get btn value 
// 	let btnValue = getValue(elem);
// 	// return true
// 	if(btnValue == jsonNum){
// 		return true;
// 	// return false is error
// 	}else{
// 		alert("failre....");
// 		return false;
// 	}
// };

//create question view
function createQuestion(arrays){
	let html = [];
	html.push('<form name="user_answer" action="" method="POST">');
	for (let i=0; i < 1;i++){
		html.push('<h2>' + arrays[0].q_category1[i].q_Titile + '</h2>'
			+'<p>' + arrays[0].q_category1[i].q_Select1 + '</p>');
	}
	html.push('</form>');

	return html
};





function cheResult(){

};

function sendPage(url){

};
