
let formDate = getFormDate(arr);　//ノードリストを配列へ入れる
//class名から取得
const singleBtnClassName = document.getElementsByClassName('SingleAnswerBtn');
//タグ名から取得
[...singleBtnClassName].forEach(btn => {
    // ボタン押下時点発火
    btn.addEventListener('mousedown', (event) => {
        // n番目のボタン要素を判定
        const lists = Array.from(document.querySelectorAll('button'));
        lists.forEach(button => {
            //　各ボタン押下時にイベント発火
            button.addEventListener('click', event => {
                let viewName = event.currentTarget.name;
                let elem = document.getElementById(viewName);
                const index = lists.findIndex(list => list === event.currentTarget);
                let Value = formDate[index].value;
                const hideenElem = document.getElementById(viewName + 'DiscriptionWrapper');
                IsCurrect(Value,elem,event,hideenElem);
            });
        });
    });
});

//class名から取得
const discriptionViewBtnElem = document.getElementsByClassName('discriptionViewBtn');
[...discriptionViewBtnElem].forEach(btn => {
    // ボタン押下時点発火
    btn.addEventListener('click', (event) => {
        let tes = document.getElementsByClassName('discriptionViewBtn');
        let test = Array.from(tes);
        let index = test.findIndex(list => list === event.currentTarget);
        let Elem = document.getElementById('discriptionView' + index);
        
        console.log(index);

        discriptionView(Elem);
    },false);
});

function IsCurrect(value,elem,event,hiddenElem){
    // 不正解の場合
    if(value == 0){
        elem.style.display = 'block';
        elem.innerHTML = '不正解';
        elem.style.color = 'blue';
        event.currentTarget.disabled = true;// 回答ボタンを非活性にする
        rmHidden(hiddenElem);
    // 正解の場合
    }else if(value == 1){
        elem.style.display = 'block';
        elem.innerHTML = '正解';
        elem.style.color = 'green';        
        event.currentTarget.disabled = true;// 回答ボタンを非活性にする
        rmHidden(hiddenElem);
    }
    // 空白（未回答）白の場合
    if(value == ''){
        elem.style.display = 'block';
        elem.innerHTML = '選択されていません。';
        elem.style.color = 'red';
        event.currentTarget.disabled = false;// 回答ボタンを活性にする
        addHidden(hiddenElem);
    }
}

function addHidden(elem){
    elem.style.display = 'none';
}

function rmHidden(elem){
    elem.style.display = 'block';
}



// 解説を見るの表示非表示を切り替える
function discriptionView(elem){
    let dispFlg = elem.style.display;
    switch (dispFlg) {
        case "none":
            elem.style.display = "block";
            break;
        case "block":
            elem.style.display = "none";
            
            break;
        case "":
            elem.style.display = "block";
            break;
        default:
            elem.style.display = "none";
            break;
    };
};
