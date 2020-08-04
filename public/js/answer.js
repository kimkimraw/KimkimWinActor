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
// view fork
switch(NumCategory){
    case '0':
        contentElem.insertAdjacentHTML('afterbegin',html.join(''));
        break;
    case '1':
        contentElem.insertAdjacentHTML('afterbegin',html.join(''));
        break;
    case '2':
        contentElem.insertAdjacentHTML('afterbegin',html.join(''));
        break;
    case '3':
        contentElem.insertAdjacentHTML('afterbegin',html.join(''));
        break;
    default:
        contentElem.insertAdjacentHTML('afterbegin','<div class="A_cardWrapper "><h2>想定外のエラーが発生しました。</h2></div>');
        break;
    };
// get json Quiz Title and Disctiption for array
function createArrQuiz(json,qPramNum){
    let discriptions = [];
    if(qPramNum == 0){
        for(let i = 0;i<json[0].q_category.length; i++){
            discriptions.push('<p>問題文<br>'+ json[0].q_category[i].q_Titile 
                +'</p><br><p>解説<br>' 
                + json[0].q_category[i].q_Desctiption + '</p>');
        };
        return discriptions
    }

    if(qPramNum == 1){
        for(let i = 0;i<json[1].q_category.length; i++){
            discriptions.push('<p>問題文<br>'+ json[1].q_category[i].q_Titile 
                +'</p><br><p>解説<br>' 
                + json[1].q_category[i].q_Desctiption + '</p>');
        };
        return discriptions
    }

    if(qPramNum == 2){
        for(let i = 0;i<json[2].q_category.length; i++){
            discriptions.push('<p>問題文<br>'+ json[2].q_category[i].q_Titile 
                +'</p><p>解説<br>' 
                + json[2].q_category[i].q_Desctiption + '</p>');
        };
        return discriptions
    }

    if(qPramNum == 3){
        for(let i = 0;i<json[0].q_category.length; i++){
            discriptions.push('<p>問題文<br>'+ json[0].q_category[i].q_Titile 
                +'</p><br><p>解説<br>' 
                + json[0].q_category[i].q_Desctiption + '</p>');
        };
        for(let i = 0;i<json[1].q_category.length; i++){
            discriptions.push('<p>問題文<br>'+ json[1].q_category[i].q_Titile 
                +'</p><br><p>解説<br>' 
                + json[1].q_category[i].q_Desctiption + '</p>');
        };
        for(let i = 0;i<json[2].q_category.length; i++){
            discriptions.push('<p>問題文<br>'+ json[2].q_category[i].q_Titile 
                +'</p><p>解説<br>' 
                + json[2].q_category[i].q_Desctiption + '</p>');
        };
        return discriptions
    }

    return discriptions = "想定外のエラーが発生しました。。。"
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