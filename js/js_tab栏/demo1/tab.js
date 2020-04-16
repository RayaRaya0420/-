/*
 *1》先写入了构造函数
 *2》构造函数中传入实参（对象）====》按照节点不同，展示不同，事件不同，按需传入的参数
 *3》把面向过程代码放入到init方法中，  方法的分布，一般都是按照功能来细致划分的
 *4》需要修改了有：节点名称（this.）,注意this指向问题修改，this.index的修改，因为this现在代表不是节点而是实例化对象，所有index是不存在的，要做为参数传递过来
*/


/*
var uls = document.getElementById("uls"),
    lis = uls.getElementsByTagName("li"),
    oDiv = document.getElementsByTagName("div");

for (var i=0;i<lis.length;i++){
    lis[i].index = i;
    lis[i].onmouseover = function () {
        for (var j=0;j<oDiv.length;j++){
            oDiv[j].style.display="none";
            lis[j].className = "";
        }
        oDiv[this.index].style.display="block";
        lis[this.index].className = "active";
    }
}
*/



function Tab(options){
    this.id = document.getElementById(options.id);
    this.idChild = this.id.getElementsByTagName(options.idChild);

    this.passiveId = document.getElementById(options.passiveId);
    this.passiveChild = this.passiveId.getElementsByTagName(options.passiveChild);

    this.event = options.event;

    this.init();
}

Tab.prototype={

    //效果开始
    init:function () {
        var That = this;
        for (var i=0;i<this.idChild.length;i++){
            this.idChild[i].index = i;
            this.idChild[i][this.event] = function () {
                That.change(this.index);
            }
        }
    },
    change:function(i){
        for (var j=0;j<this.passiveChild.length;j++){
            this.passiveChild[j].style.display="none";
            this.idChild[j].className = "";
        }
        this.passiveChild[i].style.display="block";
        this.idChild[i].className = "active";
    }
}

new Tab({
    //加入事件的对象
    id:"uls",
    idChild: "li",
    //显示的对象
    passiveId: "box",
    passiveChild:"div",
    //事件名称
    event:"onmouseover"
});
new Tab({
    //加入事件的对象
    id:"btn",
    idChild: "button",
    //显示的对象
    passiveId: "item",
    passiveChild:"ul",
    //事件名称
    event:"onclick"
})
