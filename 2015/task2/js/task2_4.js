
var data=["javascript","javase","javaee","css","html"],
	text=$("#text"),
	menu=$("#menu"),
	index=-1;
var liList=menu.getElementsByTagName("li");

//textInput事件
function input() {
	//给text添加input监听
	text.addEventListener('input',function(event){
		var str="";
		//给正则表达式加变量,用构造函数的方式创建
		value=event.target.value;
		var reg=new RegExp("^"+value);
		//当text为空时
		if (value==="") {
			menu.style.display="none";
		}else{
			for(var i=0;i<data.length;i++){
				var matchValue=data[i].match(reg);
				if (matchValue) {
					str+="<li><span>"+matchValue+"</span>"+data[i].substr(matchValue[0].length)+"</li>";
				}
			}
			menu.innerHTML=str;
			menu.style.display="block";
			}
		},false);
}
//鼠标事件
function mouse(){
	//使用事件代理
	delegateEvent(menu,"li",'mouseover',function(){
		removeLiClass();
		addClass(this,"active");
	});
	delegateEvent(menu,"li",'mouseout',function(){
		removeLiClass();
	});
	delegateEvent(menu,"li",'click',function(){
		console.log(this.innerHTML);
		text.value=deleteSpan(this.innerHTML);
	});
}
//移除class
function removeLiClass(){
	var liList=menu.getElementsByTagName("li");
	for(var i=0;i<liList.length;i++){
		liList[i].className="";
	}
}
function deleteSpan(str){
	return str.replace(/<span>(\S+)<\/span>/,"$1");
}
//键盘事件
function key(){
	text.addEventListener('keyup',function(event){
		var highLight=$(".active");
		if (event.keyCode==38) {
			if (highLight) {
				var privious=highLight.previousElementSibling;
				if (privious) {
					removeLiClass();
					addClass(privious,"active");
				}
			}else{
					addClass($("ul li"),"active");
				}
		}
		if (event.keyCode==40) {
			if (highLight) {
				var next=highLight.nextElementSibling;
				if (next) {
					removeLiClass();
					addClass(next,"active");
				}
			}else{
					addClass($("ul li"),"active");
				}
		}
		if (event.keyCode==13) {
			text.value=deleteSpan(highLight.innerHTML);
			menu.style.display="none";
		}
	},false);
}
(function start(){
	input();
	mouse();
	key();
})();