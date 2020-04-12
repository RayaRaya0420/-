let container = document.getElementById("container"),
    left = document.getElementById("left"),
    right = document.getElementById("right"),
    uls = document.getElementById("uls"),
    lis = uls.getElementsByTagName("li"),
    ols = document.getElementById("ols"),
    ollis = ols.getElementsByTagName("li"),
    bg = document.getElementsByClassName("bg"),
    index = 0;

container.onmouseover = function () {
    left.style.display = "block";
    right.style.display = "block";
};
container.onmouseout = function () {
    left.style.display = "none";
    right.style.display = "none";
};

left.onclick = function(){
    for (let i = 0; i < lis.length; i++){
        lis[i].style.display = "none";
        ollis[i].className = "";
    }
    index--;
    if (index < 0){
        index = lis.length-1;
    }
    lis[index].style.display = "block";
    ollis[index].className="bg";
};

right.onclick = function (){

    for (let i = 0; i < lis.length; i++){

        lis[i].style.display = "none";

        ollis[i].className = "";

    }

    index++;

    if (index>lis.length-1){

        index = 0;

    }

    lis[index].style.display = "block";

    ollis[index].className = "bg";


}







