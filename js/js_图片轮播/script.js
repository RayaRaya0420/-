let lis = document.getElementsByTagName('li');
let box = document.getElementById('box');
let index = 0;

time = setInterval(function(){
	for (let i = 0; i < lis.length; i++) {
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
