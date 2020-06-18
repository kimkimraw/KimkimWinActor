
// get queryPram
let queryParam = GetQueryString();
// obj to array
let arrQueryParam = Object.keys(queryParam).map(function (key) {return queryParam[key]});
console.log(queryParam);
console.log(arrQueryParam);
// createView
// let View = createView(queryParam,paramName);
// console.log(View);


for(let i=0; i< 2; i++){
    let b = String(i);
    console.log(b);
    b = 'U_Answer' + b
    let a = queryParam.b;
    console.log(a);

};



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

