/*
	1. 获取所有的大图
	2. 求大图的数量
	3. ol li (小圆点)   左按钮   右按钮   文字信息的div
	4. 设置轮播   当前下标
	5. 添加事件
	6. 自动轮播
	
*/
function Slider(id){
	//属性
	this.bigBox = document.getElementById(id);
	//获取所有的大图
	this.ullis = this.bigBox.children[0].children;
	//数量
	this.num = this.ullis.length;
	//创建轮播符号
	this.ollis = this.createEle();
	this.indexA = 0; //当前下标
	this.slide();
	this.addEvent();
	this.timer = null;
	this.autoPlay();
}
Slider.prototype = {
	createEle : function(){
		//ol
		var ol = document.createElement('ol');
		var arr = [];
		for(var i = 0;i < this.num;i ++){
			var li = document.createElement('li');
			ol.appendChild(li);
			arr.push(li);
		}
		this.bigBox.appendChild(ol);
		//div
		var div = document.createElement('div');
		this.bigBox.appendChild(div);
		
		//返回所有的li
		return arr;
	},
	slide : function(){
		for(var i = 0;i < this.num;i ++){
			this.ullis[i].style.display = 'none';
			this.ollis[i].style.opacity = 0.4;
		}
		this.ullis[this.indexA].style.display = 'block';
		this.ollis[this.indexA].style.opacity = 1;
	},
	addEvent : function(){
		var that = this;
		
		//轮播符号
		for(var i = 0;i < this.num;i ++){
			//记录当前下标 
			this.ollis[i].index = i;
			this.ollis[i].onclick = function(){
				that.indexA = this.index;
				that.slide();
			}
		}
	},
	autoPlay : function(){
		var that = this;
		this.timer = setInterval(function(){
			that.indexA ++;
			if(that.indexA === that.num){
				that.indexA = 0;
			}
			that.slide();
		},2000)
		this.bigBox.onmouseenter = function(){
			clearInterval(that.timer);
		}
		this.bigBox.onmouseleave = function(){
			that.autoPlay();
		}
	}
}