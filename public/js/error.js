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
	let arrNum = (arr.elements.length - 3)/4;

	for (let i=0; i<arrNum;i++) {
		userAnswer.push(arr.elements["U_Answer" + i]);
	};
	return userAnswer
};
// question all check OUT!!

console.log(errorMsgElem);
function test(e){
	// let errorElem = document.getElementById('error');
	// console.log(errorElem);
	// if(errorElem == undefined){
	// 	errorElem.parentNode.removeChild(errorElem);
	// }
	let isCheckArr = getFormDate(arr);
	console.log(isCheckArr[0].value);
	console.log("dd");
	for(let i = 0; i < isCheckArr.length; i++){
		if(isCheckArr[i].value == ""){
			e.preventDefault();
			errorMsgElem.innerHTML = 'まだ未回答の問題があります。';
			return
		}
	};
};