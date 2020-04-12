let check = getClass("check"),                         //className等于'check'
    table = document.getElementById("cartTable"),   //
    tr = table.tBodies[0].rows,
    selectedTotal = document.getElementById("selectedTotal"),
    priceTotal = document.getElementById("priceTotal"),
    foot = document.getElementById("foot"),
    selected = document.getElementById("selected"),
    selectedViewList = document.getElementById("selectedViewList");

//全选
for (let i=0;i<check.length;i++){                       //check的每一个input
    check[i].onclick = function(){                      //input的点击事件
        if (this.className ==="check-all check"){       //若input的className等于'全选'
            for (let i=0;i<check.length;i++){           //check的每一个input(等于'全选')
                check[i].checked = this.checked;        //input的checked的状态等于'全选'的状态
            }
        }
        getTotal();
    }
}

//获取className
function getClass(check) {                                          //创建getClass的函数
    let arr = [],                                                   //创建一个数组
        dom = document.getElementsByTagName("*");     //抓取所有节点
    for (let i=0;i<dom.length;i++){                                 //dom的每一个节点
        if (dom[i].className === check ||                           //若dom中的节点的className等于形参check
            dom[i].className.indexOf(" "+check)!==-1 ||             //若dom中的节点的className等于形参' '+check
            dom[i].className.indexOf(check+" ")!==-1){              //若dom中的节点的className等于形参check+' '
            arr.push(dom[i]);                                       //将满足条件的节点放入arr
        }
    }
    return arr;                                                     //返回结果为数组
}

//结算
function getTotal() {
    let select = 0,
        price = 0,
        list="";
    for (let i=0;i<tr.length;i++) {
        if ( tr[i].getElementsByTagName("input")[0].checked ) {
            select += parseInt(tr[i].getElementsByTagName("input")[1].value);
            price += parseFloat(tr[i].cells[4].innerHTML);
            img = tr[i].getElementsByTagName("img")[0].src;
            list += "<div><img src='"+ img +"' alt='' ><span index = '" + i+ "'>取消选择</span></div>"
        }
    }
    selectedTotal.innerHTML = select;
    priceTotal.innerHTML = price.toFixed(2);
    selectedViewList.innerHTML = list;
}

//点击已选，打开已选商品的目录
selectedTotal.parentElement.onclick = function () {
    if (selectedTotal.innerHTML !== "0") {
        foot.className = "foot show";
    }else {
        foot.className = "foot";
    }
};

//取消选择
selectedViewList.onclick = function(evt){
    let e = window.event||evt,
        tar = e.target||e.srcElement;
    if (tar.nodeName === "SPAN") {
        tr[tar.getAttribute("index")].getElementsByTagName("input")[0].checked = false;
        tr[tar.getAttribute("index")].getElementsByTagName("input")[0].onclick();
    }
};

//结算
for (let i=0;i<tr.length;i++){
    tr[i].onclick = function(evt){
        let e=window.event||evt,
            tar = e.target||e.srcElement,
            input = this.getElementsByTagName("input")[1],
            value = parseInt(input.value);
        switch (tar.className) {
            case "add":
                input.value = value+1;
                subTotal();
                break;
            case "reduce":
                if (value<=1){
                    input.value = 1;
                }else{
                    input.value = value-1;
                }
                subTotal();
                break;
            case "delete":
                alert("delete");
                break;
        }
    }
}

//小计和隐藏加减号
function subTotal(){
    for (let i=0;i<tr.length;i++) {
        let reduce = tr[i].getElementsByTagName("span")[1],
            td2 = tr.cells[2];
        
        tr.cells[4].innerHTML = parseFloat(td2.innerHTML * tr[i].getElementsByTagName("input")[1].value).toFixed(2);
        if (tr[i].getElementsByTagName("input")[1].value<=1){
            reduce.innerHTML = "";
        }else{
            reduce.innerHTML = "-";
        }
    }
}
