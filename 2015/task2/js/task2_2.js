var text=$("#text"),
	div=$("#div"),
	bt=document.getElementById("bt");
function newTime(){
	var arr=text.value.trim().split("-");
	var str="距离"+arr[0]+"年"+arr[1]+"月"+arr[2]+"日还有";
	return str;
}
function createDiv(){
	var p=document.createElement("p");
	p.setAttribute("id","p");
	div.appendChild(p);
}
createDiv();
function getTime(event) {
	var value=text.value.trim();
	var setDate=new Date(value);
	var setDateValue=setDate.getTime();
	var currentDate=new Date();
	var currentDateValue=currentDate.getTime();
	var dvalue=setDateValue-currentDateValue;
	var day=parseInt(dvalue/1000/60/60/24);
	var hour=parseInt(dvalue/1000/60/60%24);
	var minute=parseInt(dvalue/1000/60%60);
	var second=parseInt(dvalue/1000%60);
	p.innerHTML=newTime()+day+"天"+hour+"小时"+minute+"分"+second+"秒";
	var i=setTimeout(getTime,1000);
	if (parseInt(dvalue)<=0) {
		clearTimeout(i);
	}			
}
$.on(text,'focus',function(){
	text.value="";
});
$.on(bt,'click',getTime);