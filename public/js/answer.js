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
        console.log('q_category2');
        break;
    case '2':
        console.log('q_category3');
        break;
    };
// get json Quiz Title and Disctiption for array
function createArrQuiz(json,qPramNum){
    let discriptions = [];
    if(qPramNum == 0){
        for(let i = 0;i<json[0].q_category1.length; i++){
            discriptions.push('<h2>問題文：'+ json[0].q_category1[i].q_Titile 
                +'</h2><p>解説：' 
                + json[0].q_category1[i].q_Desctiption + '</p>');
        };
        return discriptions
    }
};
// create View
function createView(arr,json,qPramNum){
    let Quiz = createArrQuiz(json,qPramNum);
    let html = [];
    for(let i = 0;i<arr.length; i++){
        let qNum = i + 1;
        if(arr[i] == 0){
            html.push('<div><h2>' + qNum +'問目　不正解' + '</h2></div>' + Quiz[i]
            );
        }
        else if(arr[i] == 1){
            html.push('<div><h2>' + qNum +'問目　正解' + '</h2></div>' + Quiz[i]);
        }
    };
    return html
};
// get quetyPram to Obj
function GetQueryString(){
    let result = {};
    if( 1 < window.location.search.length ){
        // 最初の1文字 (?記号) を除いた文字列を取得する
        let query = window.location.search.substring( 1 );
        // クエリの区切り記号 (&) で文字列を配列に分割する
        let parameters = query.split( '&' );
        for( let i = 0; i < parameters.length; i++ ){
            // パラメータ名とパラメータ値に分割する
            let element = parameters[ i ].split( '=' );
            let paramName = decodeURIComponent( element[ 0 ] );
            let paramValue = decodeURIComponent( element[ 1 ] );
            // パラメータ名をキーとして連想配列に追加する
            result[ paramName ] = paramValue;
        }
    }
    return result;
};

