let btn = document.getElementById("btn"),
    oDiv = btn.getElementsByTagName("div");
let date = new Date();

for (let i=0;i<oDiv.length;i++){
    oDiv[i].index = i;
    oDiv[i].onclick = function() {
        if (new Date()-date>1200){
            fn(this.index);
            date=new Date();
        }
    }
}

let lis = document.getElementsByTagName("li");
function fn(idx){
    let arrW=[], arrH=[],arrT=[], arrL=[], arrZ=[], arrO=[];
    for (let i=0;i<lis.length;i++){
        arrW[i] = parseInt(getAttr(lis[i],"width"));
        arrH[i] = parseInt(getAttr(lis[i],"height"));
        arrT[i] = parseInt(getAttr(lis[i],"top"));
        arrL[i] = parseInt(getAttr(lis[i],"left"));
        arrZ[i] = parseInt(getAttr(lis[i],"zIndex"));
        arrO[i] = parseFloat(getAttr(lis[i].getElementsByTagName("img")[0],"opacity"));
    }

    for (let i=0;i<lis.length;i++){

        if (idx===1){//左侧按钮
            var index = i-1;
            if (index<0){
                index = 9;
            }

        }else {//右侧按钮
            var index = i+1;
            if (index>lis.length-1){
                index = 0;
            }
        }

        lis[i].style.zIndex = arrZ[index];

        animate(lis[i].getElementsByTagName("img")[0],{
            "opacity": arrO[index]*100
        })

        animate(lis[i],{
            "width": arrW[index],
            "height": arrH[index],
            "top": arrT[index],
            "left": arrL[index]
        })
    }
}

function getAttr(dom,attr){

    if(dom.currentStyle){
        return dom.currentStyle[attr];
    }else{
        return getComputedStyle(dom,null)[attr];
    }

}
