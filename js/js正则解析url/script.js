//函数：url解析
function processUrl(reg) {
    let str = "https://study.163.com/course/courseLearn.htm?courseId=1209652809#/learn/video?lessonId=1280168214&courseId=1209652809",
        regExp = new RegExp(reg+"=([^?]*)");
    regExp.test(str);
    return RegExp.$1;
}
document.write(processUrl("courseId"));
