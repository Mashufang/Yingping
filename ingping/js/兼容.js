//1.scrollTop(滚动条到页面顶端的距离)
var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//2.scrollLeft（滚动条到页面左边的距离）
var scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
//3.byClassName的兼容
function byClassName(obj,className){
	if(obj.getElementsByClassName){ //支持byClassName
		return obj.getElementsByClassName(className);
	}else{
		var arr = [];
		var eles = obj.getElementsByTagName('*'); //获取所有标签
		//遍历所有标签,寻找具有指定className的元素
		for(var i = 0,len = eles.length;i < len;i ++){
			if(eles[i].className == className){
				arr.push(eles[i]); //存入数组
			}
		}
		return arr;
	}
}
//4.获取节点对象中class属性的兼容
function getAttributeFromClass(obj,className){
	return obj.getAttribute('class') == null ? obj.getAttribute('className') : obj.getAttribute('class');
}
//5.获取非行内样式
function getStyle(obj,attr){
	return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj,1)[attr];
}
//6.获取事件对象的兼容
evt = evt || window.event;
//7.获取鼠标按键的编码值
function getButton(evt){
	var e = evt || window.event;
	if(evt){
		return e.button;
	}else if(window.event){
		switch(e.button){
			case 1 : return 0;
			case 4 : return 1;
			case 2 : return 2;
		}
	}
}
//8.获取键盘按键的编码值
var keyCode = e.keyCode || e.charCode|| e.which;
//9.阻止事件冒泡的兼容
e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
//10.阻止超链接的默认行为
e.preventDefault ? e.preventDefault() : e.returnValue = false;
//11.添加事件监听的兼容
function addEventListener(obj,event,fn,boo){
	if(obj.addEventListener){
		obj.addEventListener(event,fn,boo);
	}else{
		obj.attachEvent('on' + event,fn);
	}
}
//12.移除事件监听的兼容
function removeEventListener(obj,event,fn,boo){
	if(obj.removeEventListener){
		obj.removeEventListener(event,fn,boo);
	}else{
		obj.detachEvent('on' + event,fn);
	}
}
//13.获取事件源的兼容
var target = e.target || e.srcElement;
//14.兼容IE6的Ajax对象
var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");