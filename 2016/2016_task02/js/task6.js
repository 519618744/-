
var arr=[];
var strr="";
var bottomNum=document.getElementById("bottom");
var text=document.getElementById("text");
function change() {
	var bt1=document.getElementById("bt1");
	var bt2=document.getElementById("bt2");
	var bt3=document.getElementById("bt3");
	var bt4=document.getElementById("bt4");
	bt1.addEventListener('click',function(){
		arr.unshift(text.value);
		arrChange();
	},false);
	bt2.addEventListener('click',function(){
		arr.push(text.value);
		arrChange();
	},false);
	bt3.addEventListener('click',function(){
		arr.shift(text.value);
		arrChange();
	},false);
	bt4.addEventListener('click',function(){
		arr.pop(text.value);
		arrChange();
	},false);
}
function arrChange(){
	for(var i=0;i<arr.length;i++){
			strr+='<div class="bottomDiv">'+arr[i]+'</div>';
		}
	bottomNum.innerHTML=strr;
	strr="";
}
function start(){
	text.addEventListener('blur',function(){
		if (!(/^\d+$/.test(text.value))) {
			alert("输入有误");
			return;
		}
	},false);
	change();
}
start();