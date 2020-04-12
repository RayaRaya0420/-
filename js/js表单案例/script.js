const spans = document.getElementById("spans"),
    btn = document.getElementById("btn"),
    user = document.getElementById("user"),
    psd = document.getElementById("psd"),
    yzm = document.getElementById("yzm");

let str = "qwerasdfzcxvcbgnthyjmukilop1234567890",
    str1 = "";

for (let i = 0; i<4; i++){
    str1 += str[Math.floor(Math.random()*str.length)];
}
spans.innerHTML =  str1;

btn.onclick = function(){
    if (user.value === "admin"){
        if (psd.value === "admin"){
            if (yzm.value === spans.innerHTML) {
                location.href = "login.html";
            }else{
                alert("验证码错误");
            }
        }else {
            alert("密码错误");
        }
    }else{
        alert("用户名错误");
    }
};
