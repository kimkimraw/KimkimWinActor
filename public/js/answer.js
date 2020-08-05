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
let html = createView(arrQueryParam,questions,NumCategory);
// view erea
let contentElem = document.getElementById('content');


// 再度挑戦する？的なやつ
let reBtnElem = document.getElementById('re_Btn');
let ViewBtn = '<form name="q_select" method="GET" action="./question.html">'
    + '<p><button type="submit" value="'+ NumCategory + '"name="qCategory" class="link_word_page">もう一度やる</button></p>'
    + '<p><a href="../../index.html" class="link_word_page">TOPへ戻る</a></p></form>';

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
        discriptions.push(getAnswer(json,1,len));
        // cateeory2 の問題取得
        len = json[2].q_category.length;
        discriptions.push(getAnswer(json,2,len));
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
        if(arr[i] == 0){
            html.push('<div class="A_cardWrapper"><h2>あなたの回答' + qNum +'つ目：　<span style="color:blue;">不正解</span>' + '</h2>' + Quiz[i] + '</div>'
            );
        }
        if(arr[i] == 1){
            html.push('<div class="A_cardWrapper"><h2>あなたの回答' + qNum +'つ目：　<span style="color:red">正解</span>' + '</h2>' + Quiz[i] + '</div>');
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