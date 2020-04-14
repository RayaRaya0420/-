let arr = [
    "河北省",[
        "石家庄市",["长安区","桥西区","新华区"],
        "唐山市",["路北区","路南区","古冶区"],
        "秦皇岛市",["海港区","山海关区","北戴河区"]
    ],
    "山西省",[
        "太原市",["小店区","迎泽区","杏花岭区"],
        "大同市",["新荣区","平城区","云冈区"],
        "朔州市",["朔城区","平鲁区","山阴县"]
    ],
    "辽宁省",[
        "沈阳市",["和平区","沈河区","大东区"],
        "大连市",["中山区","西岗区","沙河口区"],
        "鞍山市",["铁东区","铁西区","立山区"]
    ]
];

let pro = document.getElementById("pro"),
    city = document.getElementById("city"),
    dis = document.getElementById("dis");

for (let i=0;i<arr.length;i++){
    if (typeof arr[i]==="string"){
        pro.add( new Option( arr[i],arr[i]) );
    }
}

pro.onchange = function () {
    for (let i=0;i<arr.length;i++) {
        if (pro.value === arr[i]) {
            let brr = arr[i+1];
            city.innerHTML = "";
            for (let j=0;j<brr.length;j++){
                if (typeof brr[j] ==="string"){
                    city.add( new Option(brr[j],brr[j]));
                }
            }
        }
    }
};

city.onchange = function(){
    for (let i=0;i<arr.length;i++) {
        if (pro.value === arr[i]) {
            let brr = arr[i+1];
            for (let j=0;j<brr.length;j++){
                if (city.value === brr[j]){
                    let crr = brr[j+1];
                    dis.innerHTML = "";
                    for (let k=0;k<crr.length;k++){
                        dis.add( new Option(crr[k],crr[k]));
                    }
                }
            }
        }
    }
}
