let errorMsgElem = document.getElementById('notAllAnswerMsg');
let arr = window.document.forms[0];
let errMsg = '<p style="color:red; text-align:center;">まだ未回答の問題があります。</p>';
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
function test(e){
	let isCheckArr = getFormDate(arr);
	for(let i = 0; i < isCheckArr.length; i++){
		if(isCheckArr[i].value == ""){
			e.preventDefault();
			answerBtn.insertAdjacentHTML('beforebegin',errMsg);
			return false;
		}
	}
};