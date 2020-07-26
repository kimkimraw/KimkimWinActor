let errorMsgElem = document.getElementById('error');
let arr = window.document.forms[0];
// error msg 
let errorElem = document.getElementById('notAllAnswerMsg');
// event btn
let answerFromElem = document.getElementById('F_question');

// main
answerFromElem.addEventListener('submit',test);

//get question input data  
function getFormDate(arr){
	let userAnswer = [];
	for (let i=0; i<arr.length;i++) {
		// formデータの中のユーザの回答のみ配列に追加
		if(arr.elements["UA" + i] != undefined){
			userAnswer.push(arr.elements["UA" + i]);
		}
	};
	return userAnswer
};
// question all check OUT!!
let a = getFormDate(arr);
console.log(a);
console.log(a.length);
console.log(a[0][0].checked);




function test(e){
	let IsAllAnswer = getFormDate(arr);
	console.log(IsAllAnswer[0].value);

	for(let i = 0; i < IsAllAnswer.length; i++){
		// 選択肢の「Value」がなければTRUE
		if(IsAllAnswer[i].value == ''){
			// 選択肢4つ分ループ
			for(let j=0; j < 4; j++){
				// ラジオボタンがチェックされていれば画面遷移
				if(IsAllAnswer[i][j].checked === true){
					return true
				}
				// ラジオボタンがチェックされていなければERROR
				if(IsAllAnswer[i][j].checked === false){
					e.preventDefault();
					errorMsgElem.innerHTML = 'まだ未回答の問題があります。';
					return
				}
			};
		return false
	};




		
		// if(isCheckArr[i].value == ""){
		// 	e.preventDefault();
		// 	errorMsgElem.innerHTML = 'まだ未回答の問題があります。';
		// 	return
		// }
	};
};