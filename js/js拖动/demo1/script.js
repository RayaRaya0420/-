let box = document.getElementById("box");

box.onmousedown = function(e){
    const evt = window.event || e,
        x = evt.clientX - box.offsetLeft,
        y = evt.clientY - box.offsetTop;

    document.onmousemove = function(e){
        const evt = window.event || e;
        box.style.left =evt.clientX  - x + "px";
        box.style.top = evt.clientY - y + "px";
    }
};
box.onmouseup = function(){
    document.onmousemove = null;
}
