
function $(id) {
	return document.getElementById(id);
}
var inSchool=$("inSchool"),
	outSchool=$("outSchool"),
	bottom=$("bottom"),
	employer=$("employer"),
	citySelect=$("selection"),
	schoolSelect=$("schoolSelect");
function addEvent(elment,type,func){
	if (elment.addEventListener) {
		elment.addEventListener(type,func,false);
	}else{
		elment.attachEvent(type,func);
	}
}
//给2个单选按钮和选择框添加事件监听
function radioEvent(){
	addEvent(inSchool,'click',function(){
		bottom.className="display";
		employer.className="hidden";
	});
	addEvent(outSchool,'click',function(){
		bottom.className="hidden";
		employer.className="display";
	});
	addEvent(citySelect,'change',selectEvent);
}
//用data对象来存储学校数据
var data={
	北京:["北京大学","清华大学","人民大学","北京航空航天大学"],
	上海:["复旦大学", "上海交通大学", "同济大学","上海财经大学"],
	武汉:["武汉大学","华中科技大学","中南财经大学","武汉理工大学"],
	南京:["南京大学","南京理工大学","南京航空航天大学","东南大学"]
};
//选择框改变事件
function selectEvent(){
	var seletOption=citySelect.options[citySelect.selectedIndex];
	value=seletOption.value;
	schoolSelect.innerHTML="";
	for(var i=0;i<data[value].length;i++){
		var option=document.createElement("option");
		option.innerHTML=data[value][i];
		schoolSelect.appendChild(option);
	}
}

function start(){
	radioEvent();
	// selectEvent();
}
start();