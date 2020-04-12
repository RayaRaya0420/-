let min = document.getElementById("min"),
    max = document.getElementById("max"),
    b = min.getElementsByTagName("b")[0],
    img = document.getElementById("img");

min.onmousemove = function (e){
    max.style.display = "block";
    b.style.display = "block";

    let evt = window.event || e ,
        scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft,
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
        x = evt.clientX + scrollLeft - min.offsetLeft - b.offsetWidth/2,
        y = evt.clientY + scrollTop - min.offsetTop - b.offsetHeight/2;

    if (x<0){
        x=0;
    }else if (x > min.offsetWidth-b.offsetWidth){
        x = min.offsetWidth-b.offsetWidth;
    }
    if (y<0){
        y=0;
    }else if (y>  min.offsetHeight-b.offsetHeight){
        y= min.offsetHeight-b.offsetHeight;
    }
    b.style.left = x + "px";
    b.style.top = y + "px";

    img.style.left = -2*x + "px";
    img.style.top = -2*y + "px";
};
min.onmouseout = function (){
    max.style.display = "none";
    b.style.display = "none";
};
