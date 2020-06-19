
// get queryPram
let queryParam = GetQueryString();
// obj to array
let arrQueryParam = Object.keys(queryParam).map(function (key) {return queryParam[key]});
console.log(queryParam);
let qCategoryNum = queryParam.qCategory;
// createView
// let View = createView(queryParam,paramName);
// console.log(View);

// let a = delete arrQueryParam.qCategory;
// console.log('a:' + a);
delete queryParam['qCategory'];
console.log(queryParam);
queryParam = GetQueryString();
console.log(queryParam);
console.log(questions[0].q_category1[0].q_desctiption);

let i = getQdesctiption(questions);
console.log('_i_' + i);


// get json Qno
let NumCategory = queryParam.qCategory;

function getQdesctiption(array){
    let discriptions = [];
     discriptions.push(array[0].q_category1[0].q_desctiption);
     return discriptions
};




// name value param split
let params = (new URL(document.location)).searchParams;
for(let prm of params){
  console.log(
    'name :', prm[0], ', value :', prm[1]
  );
}


function createView(arr){
    let html = [];
    for(let i = 0;i<arr.length; i++){
        if(arr[i] === 0){
            html.push('<div>' + '不正解' + '</div>')
        }
        html.push('<div>' + '正解' + '</div>');
    };
};
// get quetyPram to Obj
function GetQueryString()
{
    let result = {};
    if( 1 < window.location.search.length )
    {
        // 最初の1文字 (?記号) を除いた文字列を取得する
        let query = window.location.search.substring( 1 );

        // クエリの区切り記号 (&) で文字列を配列に分割する
        let parameters = query.split( '&' );

        for( let i = 0; i < parameters.length; i++ )
        {
            // パラメータ名とパラメータ値に分割する
            let element = parameters[ i ].split( '=' );

            let paramName = decodeURIComponent( element[ 0 ] );
            let paramValue = decodeURIComponent( element[ 1 ] );

            // パラメータ名をキーとして連想配列に追加する
            result[ paramName ] = paramValue;
        }
    }
    return result;
}

