let imgs = document.getElementById("imgs"),
    index = 0;

function fn(value){
    index++;
    if (index>4){
        index = 0;
    }
    imgs.src = "images/"+value+"-"+index+".png";
}

document.onkeydown = function(e){
    switch (e.keyCode) {
        case 37:
            imgs.style.left = imgs.offsetLeft - 10 +"px";
            fn("left");
            break;
        case 38:
            imgs.style.top = imgs.offsetTop - 10 +"px";
            fn("up");
            break;
        case 39:
            imgs.style.left = imgs.offsetLeft + 10 +"px";
            fn("right");
            break;
        case 40:
            imgs.style.top = imgs.offsetTop + 10 +"px";
            fn("down");
            break;
    }
}
