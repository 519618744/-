function $(id) {
	return document.getElementById(id);
}
var inSchool=$("inSchool"),
	outSchool=$("outSchool"),
	bottom=$("bottom"),
	employer=$("employer"),
	citySelect=$("selection"),
	right=$("right");
function addEvent(elment,type,func){
	if (elment.addEventListener) {
		elment.addEventListener(type,func,false);
	}else{
		elment.attachEvent("on"+type,func);
	}
}
//给2个单选按钮添加事件监听
function radioEvent(){
	addEvent(inSchool,'click',function(){
		bottom.className="display";
		employer.className="hidden";
	});
	addEvent(outSchool,'click',function(){
		bottom.className="hidden";
		employer.className="display";
	});
}
//给选择框添加事件
function selectEvent(){
	var cityOptions=citySelect.getElementsByTagName("option");
	var schoolSelect=right.getElementsByTagName("select");
	addEvent(citySelect,'change',function(){
		for(var i=0;i<cityOptions.length;i++){
			schoolSelect[i].className="hidden";
			if (cityOptions[i].selected) {
				schoolSelect[i].className="display";
			}
		}
	});
}
function start(){
	radioEvent();
	selectEvent();
}
start();