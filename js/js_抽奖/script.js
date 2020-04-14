//1 数组
//2.点击开始，启用计时器
//3.停止按钮，停止计时器

let arr = ["米线", "面条", "盖饭", "鱼香肉丝", "宫保鸡丁", "饼", "馒头"],
    box = document.getElementById("box"),
    start = document.getElementById("start"),
    stop = document.getElementById("stop"),
    time = null,
    index = 0;

start.onclick = function () {
    time = setInterval(function () {
        box.innerText = arr[index];
        index++;
        if (index>arr.length-1) {
            index = 0;
        }
    },50);
};

stop.onclick = function () {
    clearInterval(time);
};


