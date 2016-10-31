function isArray(arr) {
	var bool=arr instanceof Array;
	return bool;
	//var bool=Array.isArray(arr);
}
function isFunction(fn){
	return typeof(fn)==='function';
}


function cloneObject(src){
	if (!src||typeof src!="object") {
		return src;
	}
	var clone;
	if(src instanceof Date){
		clone=new Date(src.getTime());
		return clone;
	}else if(src instanceof Array){
		clone=[];
		for(var i in src){
			clone[i]=cloneObject(src[i]);
		}
		return clone;
	}else if(src instanceof Object){
		/*
		*第一种方法
		clone={};
		for(var x in src){
			if(src.hasOwnProperty(x)){
				clone[x]=cloneObject(src[x]);
			}
		}
		return clone;*/ 
		/*
		*第二种方法 
		function obj(src){
			function F(){}
			F.prototype=src;
			return new F();
		}
		return obj(src);*/
		//第三种方法
		return Object.create(src);
	}
}
var srcObj={
	a:1,
	b:{
		b1:["hello","hi"],
		b2:"javaScript"
	}
};
var abObj=srcObj;
var tarObj=cloneObject(srcObj);
srcObj.a=2;
srcObj.b.b1[0]="hello";

// console.log(abObj.a);
// console.log(abObj.b.b1[0]);

// console.log(tarObj.a);
// console.log(tarObj.b.b1[0]);

// 对数组进行去重操作，只考虑数组中元素为数字或字符串，
//返回一个去重后的数组
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
function uniqArray2(arr){
	var result=[];
	for (var i = 0; i < arr.length; i++) {
		if(result.indexOf(arr[i])==-1){
			result.push(arr[i]);
		}
	}
	return result;
}
//使用示例
// var a=[1,3,5,7,5,3];
// // var b=uniqArray(a);
// // console.log(b);
// var b=uniqArray2(a);
// console.log(b);
// var c=["你","好","你","是","好"];
// var d=uniqArray2(c);
// console.log(d);
// //trim函数，去掉字符串首位空白
// //第一种
function simpleTrim(str){
	var strr="";
	if(str.charAt(0)==" "&&str.charAt(str.length-1)!=" "){
		for (var i = 0; i < str.length; i++) {
			if(str.charAt(i)!=" "){
				var s=i;
				strr=str.substring(s);
				return strr;
			}
		}
	}
	else if(str.charAt(0)!=" "&&str.charAt(str.length-1)==" "){
		for (var i = str.length - 1; i >= 0; i--) {
			if(str.charAt(i)!=" "){
				var s=i;
				strr=str.substring(0,i+1);
				return strr;
			}
		}
	}else if(str.charAt(0)==" "&&str.charAt(str.length-1)==" "){
		for (var i = 0; i < str.length; i++) {
			if(str.charAt(i)!=" "){
				var s=i;
				break;
			}
		}
		for (var i = str.length - 1; i >= 0; i--) {
			if(str.charAt(i)!=" "){
				var e=i;
				break;
			}
		}
		strr=str.substring(s,e+1);
		return strr;
	}
	else{
		return str;
	}
}
//第三种
function simpleTrim3(str){
	var strr="";
	if(str.charAt(0)==" "){
		for (var i = 0; i < str.length; i++) {
			if(str.charAt(i)!=" "){
				var s=i;
				strr=str.substring(s);
				break;
			}
		}
	}
	if(strr.charAt(strr.length-1)==" "){
		for(var j=strr.length-1;j>=0;j--) {
			if(strr.charAt(j)!=" "){
				var x=j;
				strr=strr.substring(0,x+1);
				break;
			}
		}
	}
	return strr;
}
//第二种
function simpleTrim2(str){
	var head=0,tail=str.length-1;
	while(str[head]==" "){
		head++;
	}
	while(str[tail]==" "){
		tail--;
	}
	return str.substring(head,tail+1);
}
// var test=" 深圳 ";
// var result=simpleTrim(test);
// var result2=simpleTrim2(test);
// var result3=simpleTrim3(test);
// console.log(test);
// console.log(result);
// console.log(result2);
// console.log(result3);

function trim(str){
	// var pattern=/^\s+(.+?)\s+$/;
	var pattern=/^\s+|\s+$/g;
	if(pattern.test(str)){
		//RegExp方法
		//return pattern.exec(str)[1]; 
		//字符串替换方法
		// return str.replace(pattern,"$1");
		return str.replace(pattern,"");
	}else{
		return str;
	}
}
// var result3=trim(" 上海 ");
// console.log(result3);

//实现遍历数组，执行fn函数
function each(arr,fn){
	for(var i=0,len=arr.length;i<len;i++){
		fn(arr[i],i);
	}
}
//使用示例
// var arr=["java","c","php","html"];
// function output(item,index){
// 	console.log(index+":"+item);
// }
// each(arr,output);

//获取一个对象里面一层元素的数量
function getObjectLength(obj){
	var length=0;
	// for(var propName in obj){
	// 	if(obj.hasOwnProperty(propName)){
	// 		length++;
	// 	}
	// }
	// return length;
	return Object.keys(obj).length;//键值
}
// var obj={
// 	a:1,
// 	b:2,
// 	c:{
// 		c1:3,
// 		c2:4
// 	}
// };
// console.log(getObjectLength(obj));

//判断是否邮箱地址
function isEmail(emailStr){
	var pattern=/^\w+@\w+\.com/;
	// var i=pattern.test(emailStr);
	var i=emailStr.search(pattern)!==-1;
	return i;
}

var str="@163.com";
// console.log(isEmail(str));
//判断是否为手机号
function isMobilePhone(phone){
	// var pattern=/^1\d{10}$/;
	var pattern=/^(13[0-9]|15\d|17[678]|18\d|14[57])\d{8}$/;
	phone=phone+"";
	var i=phone.search(pattern)!==-1;
	return i;
}
// var str1=15116070820;
// console.log(isMobilePhone(str1));

// 为element增加一个样式名为newClassName的新样式
function hasClass(element, className) {//首先判断elment有没有这个样式
    var classNames = element.className;
    if (!classNames) {
        return false;
    }
    classNames = classNames.split(/\s+/);
    for (var i = 0, len = classNames.length; i < len; i++) {
        if (classNames[i] === className) {
            return true;
        }
    }
    return false;
}
function addClass(element,newClassName){
	if(!hasClass(element,newClassName)){
		element.className+=" "+newClassName;
	}
}
// 移除element中的样式oldClassName
function removeClass(element,oldClassName){
	if(hasClass(element.className)){
		element.className.replace(pattern,"");
	}
}
// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSimbingNode(element,siblingNode){
	return element.parentNode===siblingNode.parentNode;
}

// 获取element相对于浏览器窗口的位置，返回一个对象{x, y}
function getPosition(element){
	var x=0;
	var y=0;
	var current=element;
	while(current!=null){
		x+=current.offsetLeft;
		y+=current.offsetTop;
		current=current.offsetParent;
	}
	var scrollLeft=document.documentElement.scrollLeft+document.body.scrollLeft;
	var scrollTop=document.documentElement.scrollTop+document.body.scrollTop;
	x-=scrollLeft;
	y-=scrollTop;
	return{
		x:x,
		y:y
	};
}
// var v=document.getElementById("div");
// console.log(getPosition(v));
// 实现一个简单的Query
function $(selector) {
    var ele = document;
    var sele = selector.replace(/\s+/, ' ').split(' ');    // 去除多余的空格并分割

    for (var i = 0, len = sele.length; i < len; i++) {

        switch (sele[i][0]) {    // 从子节点中查找
            case '#':
                ele = ele.getElementById(sele[i].substring(1));
                break;
            case '.':
                ele = ele.getElementsByClassName(sele[i].substring(1))[0];
                break;
            case '[':
                var valueLoc = sele[i].indexOf('=');
                var temp = ele.getElementsByTagName('*');
                var tLen = temp.length;
                if (valueLoc !== -1) {
                    var key = sele[i].substring(1, valueLoc);
                    var value = sele[i].substring(valueLoc + 1, sele[i].length - 1);
                    for (var j = 0; j < tLen; j++) {
                        if (temp[j][key] === value) {
                            ele = temp[j];
                            break;
                        }
                    }
                }
                else {
                    var key = sele[i].substring(1, sele[i].length - 1);
                    for (var j = 0; j < tLen; j++) {
                        if (temp[j][key]) {
                            ele = temp[j];
                            break;
                        }
                    }
                }
                break;
            default :
                ele = ele.getElementsByTagName(sele[i])[0];
                break;
        }
    }

    if (!ele) {
        ele = null;
    }

    return ele;
}
//测试
// var div=$("div");
// console.log(div);
// var div2=$(".a");
// console.log(div2);
// var div3=$("#div");
// console.log(div3);
//给一个element绑定一个针对event事件的响应，响应函数为listener
function addEvent(element,event,listener){
	if (element.addEventListener) {
		element.addEventListener(event,listener,false);
	}else {
		element.attachEvent("on"+event,listener);
	}
}
// 移除element对象对于event事件发生时执行listener的响应
function removeEvent(element,event,listener){
	if (element.removeEventListener) {
		element.removeEventListener(event,listener);
	}else{
		element.detachEvent("on"+event,listener);
	}
}
function addClickEvent(element,listener){
	addEvent(element,'click',listener);
}
// 实现对于按Enter键时的事件绑定
function addEnterEvent(element, listener) {
    addEvent(element,'keydown',function(event){
    	if (event.keyCode==13) {
    		listener.call(element,event);
    	}
    });
}
//接下来我们把上面几个函数和$做一下结合，把他们变成$对象的一些方法
$.on=addEvent;
$.un=removeEvent;
$.click=addClickEvent;
$.enter= addEnterEvent;

//我们通过自己写的函数，取到id为list这个ul里面的所有li，然后通过
//遍历给他们绑定事件。这样我们就不需要一个一个去绑定了。
function clickListener(event){
	console.log(event);
}
// each($("#list").getElementsByTagName('li'),function(li){
// 	$.click(li,clickListener);
// });
//但是看看以下代码：
// function renderList(){
// 	$("#list").innerHTML='<li>new item</li>';
// }
// function init() {
//     each($("#list").getElementsByTagName('li'), function(item) {
//         $.click(item, clickListener);
//     });
//     $.click($("#btn"), renderList);
// }
// init();

/*我们增加了一个按钮，当点击按钮时，改变list里面的项目，
*这个时候你再点击一下li，绑定事件不再生效了。
*那是不是我们每次改变了DOM结构或者内容后，都需要重新绑定事件呢？
*当然不会这么笨，接下来学习一下事件代理，然后实现下面新的方法：*/
function clickHandle(){
	console.log("事件代理");
}
function delegateEvent(element,tag,eventName,listener){
	addEvent(element,eventName, function(event){
		if (event.target&&event.target.nodeName.toLowerCase()==tag) {
			listener.call(event.target,event);
		}
	});
}
$.delegate=delegateEvent;
// 使用示例
// 还是上面那段HTML，实现对list这个ul里面所有li的click事件进行响应
// $.delegate($("#list"),"li","click",clickHandle);

// 判断是否为IE浏览器，返回-1或者版本号
function isIE(){
	return /mise(\d+\.\d+)/i.test(navigator.userAgent)? (document.documentMode || + RegExp['\x241']) : -1;
}