// words.html のViewを取得、整形、出力

// 表示するラッパーID取得
let WrapperElem = document.getElementById('wordWrapper');

// 表示するViewを作成
let arr = createView(words);
// 表示処理
WrapperElem.insertAdjacentHTML('afterbegin',arr.join(''));

// 表示するHTMLを作成
function createView (arr) {
	let views = [];
	for(let i = 0; i<arr.length; i++){
		views.push('<div class="W_cardWrapper"><h2 class="words">'
			+	arr[i].word
			+	'</h2><div class="word_discription"><p class="word_comment">'
			+	arr[i].discription
			+	'</p></div></div>');
	};
	return views;
};

  	