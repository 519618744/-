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
	text=$("text"),
	bt1=$("bt1"),
	left=$("left"),
	right=$("right"),
	forward=$("go"),
	back=$("back");
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
//向左转90°
function turnLeft(){
	pos.face--;
}
//向右转90°
function turnRight(){
	pos.face++;
}
//向右转180°
function turnback(){
	pos.face+=2;
}
//小方块的移动渲染
function change(){
	pos.face=pos.face%4+(pos.face%4<0?4:0);
	square.style.left=pos.x*51+52+"px";
	square.style.top=pos.y*51+52+"px";
	square.style.transform=square.style.webkitTransform=square.style.msTransform="rotate("+pos.face*90+"deg)";
}
//事件监听程序
function event(){
	if (text.value.toLowerCase()==="go") {
		go();
		change();
	}
	if (text.value.toLowerCase()==="tunlef") {
		turnLeft();
		change();
	}
	if (text.value.toLowerCase()==="tunrig") {
		turnRight();
		change();
	}
	if (text.value.toLowerCase()==="tunbag") {
		turnback();
		change();
	}
}
//给按钮添加事件监听
function buttonEvent(){
	addEvent(left,'click',function(){
		turnLeft();
		change();
	});
	addEvent(right,'click',function(){
		turnRight();
		change();
	});
	addEvent(forward,'click',function(){
		go();
		change();
	});
	addEvent(back,'click',function(){
		turnback();
		change();
	});
}
(function start(){
	change();
	buttonEvent();
	addEvent(bt1,'click',event);
})();