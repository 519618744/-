function $(id) {
	return document.getElementById(id);
}
function addEvent(elment, type, func){
	if (elment.addEventListener) {
		elment.addEventListener(type,func,false);
	}else if (elment.attachEvent) {
		elment.attachEvent("on"+type,func);
	}else{
		elment["on"+type]=func;
	}
}
var bg=$("background"),
	square=$("square"),
	text=$("panel"),
	bt1=$("bt1"),
	bt2=$("bt2"),
	leftDiv=$("leftDiv");
//渲染列表
(function createTable(){
	for(var i=0;i<11;i++){
		var bg_tr=[];
		bg_tr[i]=document.createElement("tr");
		for(var j=0;j<11;j++){
			var bg_td=[];
			bg_td[j]=document.createElement("td");
			if (i===0&&j>0) {
				bg_td[j].innerHTML=j;
			}
			if (j===0&&i>0) {
				bg_td[j].innerHTML=i;					
			}
			bg_tr[i].appendChild(bg_td[j]);
		}
		bg.appendChild(bg_tr[i]);
	}
})();
//存储小方块位置
var pos={
	x:4,
	y:4,
	face:0//face为0时，为初始值，正面朝上,face+1,则向右转90°
};
//前进一格
function go(){
	var face_=pos.face;
	face_=face_%4+(face_%4<0?4:0);
	if (face_===0&&pos.y>0) {//正面朝上
		pos.y--;
	}
	else if (face_===1&&pos.x<9) {//正面朝右
		pos.x++;
	}else if (face_===2&&pos.y<9) {//正面朝下
		pos.y++;
	}else if (face_===3&&pos.x>0) {//正面朝左
		pos.x--;
	}else{
		return false;
	}
}
//向屏幕的左侧移动一格,方向不变
function tralef(){
	if (pos.x>0) {
		pos.x--;
	}
}
//向屏幕的上面移动一格,方向不变
function tratop(){
	if (pos.y>0) {
		pos.y--;
	}
}
//向屏幕的右侧移动一格，方向不变
function trarig(){
	if (pos.x<9) {
		pos.x++;
	}
}
//向屏幕的下面移动一格,方向不变
function trabot(){
	if (pos.y<9) {
		pos.y++;
	}
}
/*
*MOV LEF：方向转向屏幕左侧，并向屏幕的左侧移动一格
*MOV TOP：方向转向屏幕上面，向屏幕的上面移动一格
*MOV RIG：方向转向屏幕右侧，向屏幕的右侧移动一格
*MOV BOT：方向转向屏幕下面，向屏幕的下面移动一格
*/
function movlef(){
	pos.face=3;
	tralef();
}
function movtop(){
	pos.face=0;
	tratop();
}
function movrig(){
	pos.face=1;
	trarig();
}
function movbot(){
	pos.face=2;
	trabot();
}
//向左转90°
function tunlef(){
	pos.face--;
}
//向右转90°
function tunrig(){
	pos.face++;
}
//向右转180°
function tunbag(){
	pos.face+=2;
}
//小方块的移动渲染
function change(){
		pos.face=pos.face%4+(pos.face%4<0?4:0);
		square.style.left=pos.x*51+52+"px";
		square.style.top=pos.y*51+52+"px";
		square.style.transform="rotate("+pos.face*90+"deg)";
}
function firstrows(){
	if (leftDiv.innerHTML==="") {
		var rowsdiv=document.createElement("div");
		rowsdiv.innerHTML="<div>"+(1)+"</div>";
		leftDiv.appendChild(rowsdiv);
	}
}
var i=1;
function rowsConfirm(event){
	if (event.keyCode==13) {
		var rowsdiv=document.createElement("div");
		rowsdiv.innerHTML="<div>"+(++i)+"</div>";
		leftDiv.appendChild(rowsdiv);
	}
}
function check(){
	var value=panel.value,
	 	arr=[],
	 	str="",
	 	i=0;
	 	arr=value.split(/\n/);
	var rows=arr.length;
	console.log(arr);
	var timer=setInterval(function(){
		if (i<rows) {
			var index=i;
			col(arr[i],index);
			i++;
		}else if (i==rows) {
			clearInterval(timer);
		}
	},500);
}
function col(arr,index){
	var colArr=arr.split(" ");
	var lastWord=colArr[colArr.length-1];
	if (/\d+/.test(lastWord)) {
		colArr.pop();
		var colValue=colArr.join("").toLowerCase();
		valueConfirm(colValue,lastWord,index);
	}else{
		var colValue=colArr.join("").toLowerCase();
		valueConfirm(colValue,1,index);
	}
}
//判断text的值
function valueConfirm(value,num,index){
	var divs=leftDiv.getElementsByTagName("div");
	for(var i=0;i<num;i++){
		switch(value){
			case "go":
				go();
				change();
				break;
			case "tralef":
				tralef();
				change();
				break;
			case "trarig":
				trarig();
				change();
				break;
			case "tratop":
				trarig();
				change();
				break;
			case "trabot":
				trabot();
				change();
				break;
			case "tunrig":
				tunrig();
				change();
				break;
			case "tunbag":
				trarig();
				change();
				break;
			case "tunlef":
				trarig();
				change();
				break;
			case "movbot":
				movbot();
				change();
				break;
			case "movlef":
				movlef();
				change();
				break;
			case "movrig":
				movrig();
				change();
				break;
			case "movtop":
				movtop();
				change();
				break;
			default:
				divs[index].style.background="red";
		}
	}
}
function event(){
	addEvent(panel,'keyup',function(event){
		event=event;
		rowsConfirm(event);
	});
	addEvent(panel,'focus',firstrows);
	addEvent(bt1,'click',check);
	addEvent(bt2,'click',function(){
		leftDiv.innerHTML="";
		panel.value=null;
	});
}
//事件监听程序
(function start(){
	change();
	event();
})();