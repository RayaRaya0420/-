let flt = document.getElementById("flt");

document.onkeydown =function(evt){
    let e = window.event||evt;
    switch (e.keyCode) {
        case 37:
            flt.style.left = flt.offsetLeft-10+"px";
            break;
        case 38:
            flt.style.top = flt.offsetTop-10+"px";
            break;
        case 39:
            flt.style.left = flt.offsetLeft+10+"px";
            break;
        case 40:
            flt.style.top = flt.offsetTop+10+"px";
            break;
        case 32:
            game(flt.offsetTop,flt.offsetLeft+flt.offsetWidth/2);
            break;
    }
};

function game(top,left){
    for (let i=0;i<5;i++){
        let blt = document.getElementById("blt"+i);
        if (blt.style.display==="none"){
            blt.style.display = "block";
            blt.style.top = top+"px";
            blt.style.left = left+"px";
            break;
        }
    }
}

setInterval(function () {
    for (let i=0;i<5;i++) {
        let blt = document.getElementById("blt" + i);
        blt.style.top = blt.offsetTop-10+"px";
        if (blt.offsetTop<-7){
            blt.style.display="none";
        }
    }
    },50)
