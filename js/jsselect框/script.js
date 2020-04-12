let dv1 = document.getElementById("dv1"),
	uls = document.getElementById("uls"),
	lis = uls.getElementsByTagName("li"),
	cite = dv1.getElementsByTagName("cite")[0];

dv1.onclick = function () {
	uls.style.display="block";
};
for (let i=0;i<lis.length;i++){
	lis[i].onclick = function (evt) {
		let e = window.event||evt;
		cite.innerHTML = this.innerHTML;
		uls.style.display="none";
		if (e.stopPropagation()){
			e.stopPropagation();
		}else {
			e.concelBubble="true";
		}
	};
	let bg = lis[i].getAttribute("bg");
	lis[i].onmouseover = function () {
		this.style.background = "#cccccc";
	};
	lis[i].onmouseout = function () {
		this.style.background = bg;
	}
}
