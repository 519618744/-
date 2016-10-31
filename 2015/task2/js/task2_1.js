
function $(id) {
	return document.getElementById(id);
}
var text=$("text"),
	bt=$("bt"),
	content=$("content"),
	arr=[],
	prompt=$("prompt");
//获得text的value
function getValue(){
	var value=text.value;
	if (/\S+/.test(value)) {
		arr=value.split(/[,、，;\s+\n\t]/);
	}
}
//去重
function uniqArray(arr){
	var result={};
	var ar=[];
	for (var i = 0; i < arr.length; i++) {
		if(!result[arr[i]]){
			ar.push(arr[i]);
			result[arr[i]]=true;
		}
	}
	return ar;
}
//去掉空的数据
function removeBlank(arr){
	for(var i=0;i<arr.length;i++){
		if (/^\s+$/.test(arr[i])) {
			arr.splice(i,1);
		}
	}
}
//渲染
function render(){
	getValue();
	arr=uniqArray(arr);
	removeBlank(arr);
	if (confirmContent()) {
		addContent();
	}
	
}
//确认text中的字符
function confirmContent(){
	if (arr.length==0) {
		prompt.innerHTML="输入不能为空";
		return false;
	}
	else if(arr.length>10) {
		prompt.innerHTML="爱好数量不能超过10个";
		return false;
	}else{
		prompt.innerHTML="";
		return true;
	}
}
//给content添加内容
function addContent(){
	var str="";
	for(var i=0;i<arr.length;i++){
		str+="<label>"+arr[i]+"<input type='checkbox'></label>";
	}
	content.innerHTML=str;
}
//添加事件监听
function event(){
	bt.addEventListener('click',render,false);
} 
//开始执行
(function start(){		
	event();
})();