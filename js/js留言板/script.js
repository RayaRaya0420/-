let btn = document.getElementById("btn"),
    uls = document.getElementById("uls"),
    text = document.getElementById("text");

btn.onclick = function () {
    let lis = document.createElement("li");
    uls.appendChild(lis);

    lis.innerHTML = text.value + " <a href='javascript:'>删除</a>";

    let a = document.getElementsByTagName("a");
    for (let i = 0; i<a.length;i++){
        a[i].onclick = function () {
            uls.removeChild(this.parentNode);
        }
    }
};
