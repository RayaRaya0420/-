function animate(dom,target,attr,fn){


    //dom ===>DOM节点
    //target ===》目标值
    //attr  ===》属性名称
    //fn   ===》回调函数

    clearInterval(dom.timer);

    dom.timer = setInterval(function(){
        let objAttr = null;
        if(attr==="opacity"){

            objAttr= parseFloat(getAttr(dom,attr))*100;
        }else{
            objAttr = parseInt(getAttr(dom,attr));
        }

        let speed = (target-objAttr)/10;

        speed = speed>0 ?Math.ceil(speed):Math.floor(speed);

        if(target === objAttr){

            //停止定时器
            clearInterval(dom.timer);
            if(fn)fn();

        }else{

            if(attr==="opacity"){

                dom.style.filter = "alpha(opacity:"+objAttr + speed+")";
                dom.style[attr] = (objAttr + speed)/100;

            }else{
                dom.style[attr] = objAttr + speed +"px";
            }



        }
    },30)

}


function getAttr(dom,attr){

    if(dom.currentStyle){
        return dom.currentStyle[attr];
    }else{
        return getComputedStyle(dom,null)[attr];
    }

}












