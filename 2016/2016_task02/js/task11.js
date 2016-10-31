function $(id) {
	return document.getElementById(id);
}
var span1=$("span1"),
	span2=$("span2"),
	span3=$("span3"),
	span4=$("span4"),
	span5=$("span5"),
	text1=$("text1"),
	text2=$("text2"),
	text3=$("text3"),
	text4=$("text4"),
	text5=$("text5"),
	submit=$("submit"),
	length=0,
	flag=false;
function addEvent(elment,type,func){
	if (elment.addEventListener) {
		elment.addEventListener(type,func,false);
	}else{
		elment.attachEvent("on"+type,func,false);
	}
}
//获得焦点时的渲染
function focu(event,span,innerHTML){
	span.innerHTML=innerHTML;
	event.target.style.boxShadow="0 0 4px #88C5FB ";
	event.target.style.border="1px solid #2F79BA";
}
//失去焦点,输入正确时的渲染
function right(span){
	that.style.border="1px solid #63B775";
	span.style.color="#63B775";
	that.style.boxShadow="";
	flag=true;
}
//失去焦点,输入错误时的渲染
function wrong(span){
	that.style.border="1px solid #E3000C";
	that.style.boxShadow="";
	span.style.color="#E3000C";
	flag=false;
}
//计算字符长度
function countLength(){
	length=0;
	var value=text1.value;
	var pattern1=/[\u4e00-\u9fa5]/g;
	var pattern2=/\w/g;
	while(pattern1.exec(value)){
		length+=2;
	}
	while(pattern2.exec(value)){
		length+=1;
	}
	return length;
}
/*
*text1失去焦点时
*调用countLength计算出length,根据length判断采用哪种渲染
*/
function nameBlur(){
	that=this;
	length=countLength();
	if (length===0) {
		span1.innerHTML="名称不能为空";
		wrong(span1);
	}
	else if (length<4||length>16) {
		span1.innerHTML="长度为4~16个字符";
		wrong(span1);
	}else{
		span1.innerHTML="名称格式正确";
		right(span1);
	}
}
//text2失去焦点
function passwordBlur(){
	that=this;
	var pattern=/[0-9a-zA-Z]{6,12}/g;
	var value=text2.value;
	if (pattern.exec(value)) {
		span2.innerHTML="密码可用";
		right(span2);
	}else{
		wrong(span2);
	}
}
//text3失去焦点
function passWordConfirm(){
	that=this;
	var value=text2.value;
	if (text3.value===value&&(text3.value!=="")) {
		span3.innerHTML="密码输入一致";
		right(span3);
	}else if(text3.value===value){
		span3.innerHTML="密码不能为空";
		wrong(span3);
	}
	else{
		span3.innerHTML="密码输入不一致";
		wrong(span3);
	}
}
//text4失去焦点
function addressBlur() {
	that=this;
	var pattern=/\w+@\w+\.com/g;
	if (pattern.exec(text4.value)) {
		span4.innerHTML="邮箱格式正确";
		right(span4);
	}else{
		span4.innerHTML="邮箱格式错误";
		wrong(span4);
	}
}
//text5失去焦点
function numberBlur(){
	that=this;
	var pattern=/1\d{10}/g;
	if (pattern.exec(text5.value)) {
		span5.innerHTML="手机格式正确";
		right(span5);
	}else{
		span5.innerHTML="手机格式错误";
		wrong(span5);
	}
}
//添加监听事件
function start(){
	addEvent(text1,'focus',function(event){
		focu(event,span1,"必填,长度为4~16个字符");
	});
	addEvent(text2,'focus',function(event){
		focu(event,span2,"请输入6~12位密码(数字、英文或下划线)");
	});
	addEvent(text3,'focus',function(event){
		focu(event,span3,"请再次输入密码");
	});
	addEvent(text4,'focus',function(event){
		focu(event,span4,"请输入正确的邮箱");
	});
	addEvent(text5,'focus',function(event){
		focu(event,span5,"请输入正确的手机号");
	});
	addEvent(text1,'blur',nameBlur);	
	addEvent(text2,'blur',passwordBlur);
	addEvent(text3,'blur',passWordConfirm);
	addEvent(text4,'blur',addressBlur);
	addEvent(text5,'blur',numberBlur);
	addEvent(submit,'click',function(){
		if (flag===false) {
			alert("输入有误");
		}
	});
}
start();