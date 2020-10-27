// 不正アクセスでクエリパラメータがない場合の処理が未完(qcateはあるけど、回答パラムがない)

// get queryPram
let queryParam = GetQueryString();
// obj to array
let arrQueryParam = Object.keys(queryParam).map(function (key) {return queryParam[key]});
// q_category value
let qCategoryNum = queryParam.qCategory;
// users_answer num
arrQueryParam.pop();
// get json Qno
let NumCategory = queryParam.qCategory;
// view erea
let html = createView(arrQueryParam,questions,NumCategory);

let contentElem = document.getElementById('content');
// 正解数を表示するエリア
let correctNumElem = document.getElementById('correctNum');


// 再度挑戦する？的なやつ
let reBtnElem = document.getElementById('re_Btn');
let ViewBtn = '<form name="q_select" method="GET" action="./question.html">'
    + '<p><button type="submit" value="'+ NumCategory + '"name="qCategory" class="link_word_page">もう一度やる</button></p>'
    + '<p><a href="../../index.html" class="link_word_page">TOPへ戻る</a></p></form>';

let correctView =  createCorrectView(html);
correctNumElem.innerHTML = correctView;


// view fork
switch(NumCategory){
    case '0':
        contentElem.insertAdjacentHTML('afterbegin',html.join(''));
        reBtnElem.insertAdjacentHTML('afterbegin',ViewBtn);
        break;
    case '1':
        contentElem.insertAdjacentHTML('afterbegin',html.join(''));
        reBtnElem.insertAdjacentHTML('afterbegin',ViewBtn);
        break;
    case '2':
        contentElem.insertAdjacentHTML('afterbegin',html.join(''));
        reBtnElem.insertAdjacentHTML('afterbegin',ViewBtn);
        break;
    case '3':
        contentElem.insertAdjacentHTML('afterbegin',html.join(''));
        reBtnElem.insertAdjacentHTML('afterbegin',ViewBtn);
        break;
    default:
        contentElem.insertAdjacentHTML('afterbegin','<div class="A_cardWrapper "><h2>想定外のエラーが発生しました。<br>3秒後にTOPページへ戻ります</h2></div>');
        setTimeout("redirect()", 3000);
            function redirect(){
                location.href = '../../index.html';
            };
        break;
    };
// get json Quiz Title and Disctiption for array
function createArrQuiz(json,qPramNum){
    let discriptions = [];
    if(qPramNum == 0){
        let len = json[qPramNum].q_category.length;
        discriptions = getAnswer(json,qPramNum,len);
        return discriptions
    }

    if(qPramNum == 1){
        let len = json[qPramNum].q_category.length;
        discriptions = getAnswer(json,qPramNum,len);
        return discriptions
    }

    if(qPramNum == 2){
        let len = json[qPramNum].q_category.length;
        discriptions = getAnswer(json,qPramNum,len);
        return discriptions
    }

    if(qPramNum == 3){
        // category0の問題取得
        let len = json[0].q_category.length;
        discriptions = getAnswer(json,0,len);
        // category1 の問題取得
        len = json[1].q_category.length;
        // カテゴリ0と1の一次元配列を連結
        discriptions = discriptions.concat(getAnswer(json,1,len));
        // cateeory2 の問題取得
        len = json[2].q_category.length;
        // 配列連結
        discriptions = discriptions.concat(getAnswer(json,2,len));

        return discriptions

    }    
    return false 
};


// create View ture or false
function createView(arr,json,qPramNum){
    let Quiz = createArrQuiz(json,qPramNum);
    let html = [];
    for(let i = 0;i<arr.length; i++){
        let qNum = i + 1;
        // 不正解の場合True
        if(arr[i] == 0){
            html.push('<div class="A_cardWrapper"><h2>第' + qNum +'問目：　<span style="color:blue;">不正解</span>' + '</h2>' + Quiz[i] + '</div>');
        }
        // 正解の場合True
        if(arr[i] == 1){
            html.push('<div class="A_cardWrapper"><h2>第' + qNum +'問目：　<span style="color:red">正解</span>' + '</h2>' + Quiz[i] + '</div>');
        }
    };
    return html
};

// 問題の取得＋HTML文章へ整形 json=arr,palm=qcategory,len= q num
function getAnswer(json,palm,len){
    let result = [];
    for(let i = 0; i < len; i++){
            result.push('<p>問題文<br>'+ json[palm].q_category[i].q_Titile 
                +'</p><br><p>解説<br>' 
                + json[palm].q_category[i].q_Desctiption + '</p>');
    }
    return result
};

// 問題数と正解数を取得
function getCorrectNum(arr){
    // 検索文字を定義
    let str = '不正解';
    let count = 0;
    for(let i=0; i<arr.length; i++){
        let isCorrect = arr[i].match(str);
        if(isCorrect != null){
            count++
        }
    };
    // 問題数から不正解数を引き、正解数を出す
    let CorrectNum = arr.length - count;
    return CorrectNum
};


function createCorrectView(arr){
    let correctNum = getCorrectNum(arr);
    let crrectHTML = arr.length + '問中' + correctNum + '問正解';
    return crrectHTML
}


