let box = document.getElementById("btn");
let btn = box.getElementsByTagName("div");
let uls = document.getElementById("uls");
let lis = document.getElementsByTagName("li");
for(let i=0;i<btn.length;i++){
    btn[i].index = i;
    btn[i].onclick = function(){
        if (this.index===0){
            animate(uls,{
                "marginLeft": -520
            },function(){
                uls.appendChild(uls.firstElementChild);
                uls.style.marginLeft=0;
            })
        }else{
            uls.style.marginLeft="-520px";
            uls.insertBefore(uls.lastElementChild,lis[0]);
            animate(uls,{
                "marginLeft" : 0
            })
        }
    }
}
