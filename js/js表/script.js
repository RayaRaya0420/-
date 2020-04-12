const hr = document.getElementById("hr"),
    min = document.getElementById("min"),
    sec = document.getElementById("sec");

function fn() {
    const date = new Date();

    hr.innerHTML = fn2(date.getHours());
    min.innerHTML = fn2(date.getMinutes());
    sec.innerHTML = fn2(date.getSeconds());

}

fn();
setInterval(function(){
    fn();
},1000);

function fn2(t){
    if(t<10){
        return "0" + t;
    }else{
        return t;
    }
}


