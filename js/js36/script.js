const str = "get-element-by-id";

function fn(s) {

    let arr = str.split("-");
    let str1 = "";

    for (i=0; i<arr.length;i++) {

        str1 += arr[i][0].toUpperCase() + arr[i].substring(1);

    }

    return str1;

}

document.write(fn(str));
