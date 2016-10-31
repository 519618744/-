function $(id){
	return document.getElementById(id);
}
var text1=$("text1"),
	bt1=$("button1"),
	div1=$("div1"),
	length=0,
	span=$("span");
span.style.left=text1.offsetLeft+"px";

//检验text1是否符合要求	
function check1() {
	length=check();
	if (length===0) {
		text1.style.border="1px solid red";
		span.style.color="red";
		span.innerHTML="姓名不能为空";
	}else if ((length>0&&length<4)||(length>14)) {
		span.style.color="#bbb";
		span.innerHTML="必填,长度为4-16个字符";
	}else{
		span.innerHTML="名称格式正确";
		span.style.color="green";
		text1.style.border="1px solid green";
	}
}
//计算出text1中的字符数
function check(){
	length=0;
	var value=text1.value;
	var pattern1=/[\u4e00-\u9fa5]/g;
	var pattern2=/\w/g;
	while(pattern1.exec(value)){
		length+=2;
	}
	while(pattern2.exec(value)){
		length++;
	}
	return length;
}
//添加事件监听
bt1.addEventListener('click',check1,false);