var lis = document.getElementsByTagName('li');
var box = document.getElementById('box');
var index = 0;

time = setInterval(function(){
	for (var i = 0; i < lis.length; i++) {
		lis[i].style.display='none';
	}

	index++;

	if (index>2) {
		index=0;
	}

	lis[index].style.display='block';
},1000)

box.onmouseover=function(){
	clearInterval(time);
};