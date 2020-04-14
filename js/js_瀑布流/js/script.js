window.onload = function(){
    //瀑布流加载
    waterfall("main","box");
    //图片路径
    let dataImg = {
        arr:[
            {"src":"21.jpg"},
            {"src":"22.jpg"},
            {"src":"23.jpg"},
            {"src":"24.jpg"},
            {"src":"25.jpg"},
            {"src":"26.jpg"},
            {"src":"27.jpg"},
            {"src":"28.jpg"},
            {"src":"29.jpg"},
            {"src":"30.jpg"}
        ]
    }

    //滚动时加载图片
    window.onscroll=function () {
        //若函数scrollTop成立
        if (scrollTop()){
            for (let i=0;i<dataImg.arr.length;i++){//获取main节点
                let main = document.getElementById("main");
                //创建div节点，class是box
                let oBox = document.createElement("div");
                oBox.className = "box";
                main.appendChild(oBox);
                //创建div节点，class是pic
                let oPic = document.createElement("div");
                oPic.className = "pic";
                oBox.appendChild(oPic);
                //创建img节点
                let oImg = document.createElement("img");
                oImg.src = "imgs/"+dataImg.arr[i].src;
                oPic.appendChild(oImg);
            }
        }
        //加载瀑布流
        waterfall("main","box");

    };
}

//函数：滚动加载
function scrollTop() {
    //获取最后一张图片
    let oBox = getClass("box");
    let oBoxLast = oBox[oBox.length-1];
    //获取滚动距离
    let scroll = document.documentElement.scrollTop||document.body.scrollTop;
    //获取可视区域高
    let client = document.documentElement.clientHeight||document.body.clientHeight;
    //如果最后一张图片/2+最后一张图片的offsetTop < 滚动距离+可视区高是true
    if(oBoxLast.offsetHeight/2+oBoxLast.offsetTop < scroll+client){
        return true;
    }else {
        return false;
    }
}

//waterfall函数
function waterfall(parent, box){
    //获取父节点
    let oParent = document.getElementById(parent);
    //获取子节点
    let oBox = getClass("box");
    //获取可视页面的宽度
    let width = document.documentElement.clientWidth||document.body.clientWidth;
    //获取每个box的宽度
    let oBoxWidth = oBox[0].offsetWidth;
    //计算有几列图片
    let num = Math.floor(width/oBoxWidth);
    //设置父节点的宽度
    oParent.style.width = num*oBoxWidth+"px";

    let hrr = []
    //设置图片摆放位置
    for (let i=0; i<oBox.length; i++){
        if(i<num){
            //添加底边到hrr数组
            hrr.push(oBox[i].offsetHeight);
        }else{
            //获取top的最小值
            let min=Math.min.apply(null,hrr);
            //获取下标
            let index = inArray(hrr,min);

            oBox[i].style.position = "absolute";
            //左边距=数量*每张图片的宽
            oBox[i].style.left = index*oBoxWidth+"px";
            //上边距=top最小值
            oBox[i].style.top = min+"px";
            //每列的所有图片的高相加
            hrr[index] += oBox[i].offsetHeight;
        }
    }
}

//函数：获取top最小值的图片下标
function inArray(hrr,min){
    for (let i=0;i<hrr.length;i++){
        if (hrr[i]===min) {
            return i;
        }
    }
}

//函数：获取class节点
function getClass(box){
    //1.获取页面上所有节点
    let doms = document.getElementsByTagName("*"),
        reg = new RegExp("\\b"+box+"\\b"),
        arr=[];
    //2.for循环进行判断
    for(let i=0;i<doms.length;i++){
        //3.符合的节点放入数组
        if (reg.test(doms[i].className)) {
            arr.push(doms[i]);
        }
    }
    //返回数组的长度
    return arr;
}
