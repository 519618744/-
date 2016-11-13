//按照自己的思路写的第一种
	function addAqiData() {
		var aqiTable=document.getElementById("aqi-table");
		var btn=document.getElementById("add-btn");
		btn.onclick=function(){
			//对获取的数据进行去空格处理
			var city=document.getElementById("aqi-city-input").value.trim();
			var value=document.getElementById("aqi-value-input").value.trim();
			//输入错误字符会提示并且退出函数
			if(!(/^[\u4e00-\u9fa5a-zA-Z]+$/.test(city))){
				alert("请输入中英文");
				return;
			}
			if (!(/^\d+$/.test(value))){
				alert("请输入数字");
				return;
			}
			//更新列表中的数据,并给每一个button添加删除函数
			var aqiList=document.getElementById("aqi-table").innerHTML;
				aqiList+="<tr><td>"+city+"</td><td>"+value+"</td><td><button>删除</button></td></tr>";
				aqiTable.innerHTML=aqiList;
				// del();
		};
	}
	//创建删除函数
	// function del(){
	// 	var table=document.getElementById("aqi-table");
	// 	var btns=table.getElementsByTagName('button');
	// 	for(var i=0,len=btns.length;i<len;i++){
	// 		btns[i].onclick=function(){
	// 			//获取tr
	// 			var child=this.parentNode.parentNode;
	// 			//获取tbody,删除tr
	// 			this.parentNode.parentNode.parentNode.removeChild(child);
	// 		};
	// 	}
	// }
	function del(){
		var child=this.parentNode.parentNode;
		this.parentNode.parentNode.parentNode.removeChild(child);
	}
	function delegate(){
		var table=document.getElementById("aqi-table");
		table.addEventListener('click',function(event){
			if (event.target.tagName.toLowerCase()=='button') {
				del.call(event.target);
			}
		},false);
	}
	//执行函数
	function init(){
		addAqiData();
		delegate();
	}
	init();

//第二种
// var aqiData={};
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
// function addAqiData(){
// 	var city=document.getElementById("aqi-city-input").value.trim();
// 	var value=document.getElementById("aqi-value-input").value.trim();
// 	if(!(/^[\u4e00-\u9fa5a-zA-Z]+$/.test(city))){
// 		alert("请输入中英文");
// 		return;
// 	}
// 	if (!(/^\d+$/.test(value))){
// 		alert("请输入数字");
// 		return;
// 	}
// 	aqiData[city]=value;
// }
/**
 * 渲染aqi-table表格
 */
// function renderAqiList(){
// 	var table=document.getElementById("aqi-table");
// 	var aqiList="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
// 	for(var city in aqiData){
// 		aqiList+="<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button data-city='"+city+"'>删除</button></td></tr>";
// 	}
// 	table.innerHTML=aqiList;
// }
/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
// function addBtnHandle(){
// 	addAqiData();
// 	renderAqiList();
// }
/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
// function delBtnHandle(city){
// 	delete aqiData[city];
// 	renderAqiList();
// }
// function init(){
// 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
// 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
// 	var btn=document.getElementById("add-btn"),
// 	 	table=document.getElementById("aqi-table"),
// 		btns=table.getElementsByTagName("button");
// 	btn.addEventListener('click',function(){
// 		addBtnHandle();
// 	},false);
// 	table.addEventListener("click", function(event){
//         if(event.target.nodeName.toLowerCase() === 'button'){
//         	delBtnHandle.call(this, event.target.dataset.city);
//         }
//     },false);
// }
// init();