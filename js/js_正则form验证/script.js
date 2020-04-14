let userTel = document.getElementById("userTel"),
    userName = document.getElementById("userName"),
    userEmail = document.getElementById("userEmail"),
    userIdCode = document.getElementById("userIdCode");

//验证手机号
userTel.onblur = function() {
     let regTel = /^1[3-8]\d{9}$/;
    if (regTel.test(this.value)){
        this.nextElementSibling.innerHTML= "手机号正确";
    }else{
        this.nextElementSibling.innerHTML= "手机号有误，请重新输入";
    }
};

//验证用户名6到12位数字字母下划线
userName.onblur = function () {
    let regName = /^\w{6,12}$/;
    if (regName.test(this.value)){
        this.nextElementSibling.innerHTML= "用户名正确";
    }else{
        this.nextElementSibling.innerHTML= "用户名有误，请重新输入";
    }
};

//验证邮箱
userEmail.onblur = function() {
    let regEmail = /^\w+@\w{1,6}\.[0-9a-zA-Z]{2,5}$/;
    if (regEmail.test(this.value)){
        this.nextElementSibling.innerHTML= "邮箱正确";
    }else{
        this.nextElementSibling.innerHTML= "邮箱有误，请重新输入";
    }
};

//验证身份证
userIdCode.onblur = function() {
    let regIdCode = /^\d{17}[\dX]$/;
    if (regIdCode.test(this.value)){
        this.nextElementSibling.innerHTML= "身份证正确";
    }else{
        this.nextElementSibling.innerHTML= "身份证有误，请重新输入";
    }
};
