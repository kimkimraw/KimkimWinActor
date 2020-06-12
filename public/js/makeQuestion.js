// Jsonを使用した処理

// indexからのPOSTでvalue取得
// 取得したValueからどのJsonを取得するか判断
// データ取得後、ページ遷移

// html button -> button value = json.qNo -> for makequestion
 // -> page to question.html  


//post value json redirect
console.log("get makeQuestion.js!!");


let elem_q_Btncategory = document.getElementById("qBtnCategory1");

console.log(elem_q_Btncategory);

elem_q_Btncategory.AddEventlistener('click'function(){

});

function getValue (elem){
	console.log("elemBTNValue :" elem.value);
	return elem.value
};

function checkJsonName(elem,value){
	let qNum = getValue(elem);

	// html のボタンのVlueと　JsonのValueが一致でTRUE
	if(qNum == value){
		return true;
	}else{
		alert("failre....");
		return false;
	}
};

function getQuestion(value){
	let result = checkJsonName();

	if(result == true){


	}
};















function makeQuestion(json){
			$.getJSON(menu)
		.done(function(datas,textStatus,jqXHR){
			console.log(jqXHR.status);
			console.log(textStatus);

			for(let i = 0; i < datas.length ;i++){

				if (i == 0) {
					tableElem.innerHTML += "<tr><th>ID</th><th>NAME</th><th>VALUE</th></tr>";
				};

				tableElem.innerHTML += 	"<tr><th>" + datas[i].MENU_ID
				 + "</th>"  + "<th>" + datas[i].MENU_NAME
				  + "</th>" + "<th>¥ " + datas[i].MENU_VALUE  + "</th></tr>";
			};

		})
		.fail("none");
};

function cheResult(){

};

function sendPage(url){

};
