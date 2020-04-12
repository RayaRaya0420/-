let dv1 = document.getElementById("dv1"),
    dv2 = document.getElementById("dv2");

dv2.onmousedown = function (e) {
    const evt = window.event || e,
        x = evt.clientX,
        y = evt.clientY,
        width = dv1.offsetWidth,
        height = dv1.offsetHeight;

    document.onmousemove = function (e) {
        const evt = window.event || e;
        dv1.style.width = width + evt.clientX - x +"px";
        dv1.style.height =height  + evt.clientY -y +"px";
    }
}
dv2.onmouseup = function(){
    document.onmousemove = null;
}
