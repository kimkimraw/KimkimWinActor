// Jsonを使用した処理

// indexからのPOSTでvalue取得
// 取得したValueからどのJsonを取得するか判断
// データ取得後、ページ遷移

// html button -> button value = json.qNo -> for makequestion
 // -> page to question.html  


//post value json redirect
console.log("get makeQuestion.js!!");

let fName = "q_select";
let btnName1 = "qCategory1";


let elemBtn1 = document.getElementById("qBtnCategory1");
let url = "../../question.json";




elemBtn1.addEventListener('click',function(){

	let NumCategory = getValue(elemBtn1);
	let result = checkJsonName(elemBtn1,NumCategory);
	console.log(result);


	let data = getQuestion(url,elemBtn1,NumCategory);
	alert(data);
});



// インプットのVAlueを取得
function getValue (elem){
	let value = console.log("elemBTNValue :" +  elem.value);
	console.log("ELEM_VALUE : " + elemBtn1.value);
	return value
};

// Jsonの数値とインプット数値が一致しているか
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

// 問題のJSONファイルを取得
function getQuestion(url,elem,num){
	let result = checkJsonName(elem,num);

	if(result == true){
		// 1. $.getJSONメソッドで通信を行う
	// 	$.getJSON(url)

	// 		// 2. doneは、通信に成功した時に実行される
	// 		//  引数のdata1は、通信で取得したデータ
	// 		// .done(function(data1,textStatus,jqXHR) {
	// 			.done(function(data1){
	// 			// console.log(jqXHR.status); //例：200
	// 			// console.log(textStatus); //例：success

	// 			// 3. キーを指定して値を表示
	// 			consolelog(data1);

	// 			// 4. JavaScriptオブジェクトをJSONに変換
	// 			const data2 = JSON.stringify(data1);
	// 			console.log(data2); //コンソールにJSONが表示される
	// 		})
	// 		// 5. failは、通信に失敗した時に実行される
	// 		.fail(function(jqXHR, textStatus, errorThrown ) {
	// 			console.log("STATUS :" + jqXHR.status); //例：404
	// 			console.log("TEXT_STATUS" + textStatus); //例：error
	// 			console.log("ERROR" + errorThrown); //例：NOT FOUND
	// 		})
	// 		// 6. alwaysは、成功/失敗に関わらず実行される
	// 		.always(function() {
	// 			console.log("完了しました");
	// 		});
	// 	return data2

	// }else{
	// 	alert("get file failed...");
	// 	return false
	// }
	    $.getJSON(url)
    	.done(function(datas){
    		console.log(datas);
    	})
    	.fail(console.log("sippai"));
	}
};


function makeQuestion(datas){

};

function cheResult(){

};

function sendPage(url){

};
