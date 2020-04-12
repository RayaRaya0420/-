//函数：去除前后空格
//  把空格替换成""
function t(str){
    let regStr = /^\s*|\s*$/g;
    return str.replace(regStr, "");
}
console.log(t("  abc  "));

//选取class
function getClass(name) {
    let arr = [],
        doms = document.getElementsByTagName("*"),
        reg = new RegExp("\\b"+name+"\\b");
    for (let i=0;i<doms.length;i++){
        if (reg.test(doms[i].className)){
            arr.push(doms[i]);
        }
    }
    return arr;
}
alert(getClass("lis").length);
