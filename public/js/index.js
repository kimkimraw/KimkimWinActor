// // モーダル、動きなどの処理

let answerBtnElem = document.getElementById('answerBtn');
let errorMsgElem = document.getElementById('notAllAnswerMsg');
let arr = window.document.forms[0];
let formName = 'Q_form';


console.log(arr.elements);

function getFormDate(arr){
	let userAnswer = [];

	for (let i=0; i<arr.elemtns[Radio].length;i++) {
		userAnswer.push(arr.elements["U_Answer" + i]);
	};
	return userAnswer
};


let answerFromElem = document.getElementById('F_question');
answerFromElem.addEventListener('submit',test);


let a =  getFormDate(arr);
console.log(a);

function test(e){
	let Answers = getFormDate(arr);
	console.log(Answers);

	for(let i=0; i<Answers.length;i++){
		console.log(Answers[i]);
	}
	e.preventDefault();
	alert('S');
	if( e == null){
		e.preventDefault();
		alert('S');
	}
};




