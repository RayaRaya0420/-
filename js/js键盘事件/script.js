let btn = document.getElementById("btn");

btn.onclick = function() {
    let div = document.createElement("div");
    div.setAttribute("id","box");
    document.body.appendChild(div);

    document.onkeydown = function (e) {
       if (e.keyCode = 27) {
            document.body.removeChild(div);
        }
    }

}
