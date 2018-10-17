/*
	 	1、点击左侧的楼层号 找到对应的楼层（根据下标）
	 	控制页面滚走的距离就是当前楼层的offset().top--距离body顶部
	 	2、点击top  回到顶部
	 	3、操作滚动条的移动   根据楼层的位置控制楼层号的改变
	 	找到当前在可视区面积最大的楼层，找到了这个楼层的下标
	 	根据楼层的下标  找到楼层号
	*/
	//楼梯号
	$list = $("#louti li:not(.louti_top)");
	$louti=$("#louti");
	//所有的楼层
	$divs = $(".louti");
	console.log($list,$divs);
	//定义一个变量控制 滚动条代码的执行
	//假设值为true时  滚动条的代码可以执行
	var flag = true;
	//第一步 ：点击左侧的楼层号  根据下标找到对应的楼层
	$list.click(function(){
		flag = false;
		//操作当前点击的楼层号的样式  添加样式类
		$(this).find("a")
			   .addClass("active")
			   .end()
			   .siblings()
			   .find("a")
			   .removeClass("active");
		//获取当前操作的楼层号的下标
		var index = $(this).index();
		
		//根据下标查找对应的楼层  并获取给楼层相对于body顶部的距离  obj.offset().top
		var t = $divs.eq(index).offset().top;
		
		//设置页面滚走的距离为 t （当前index对应的楼层相对于body距离）
		$("body,html").animate({ scrollTop:t },1000,function(){
			//动画完成后 将flag的值重新设置为true  滚动条代码可以被触发
			flag = true;
		});
	})
	//第二步 ： 点击top  回到顶部
	$(".louti_top").click(function(){
		flag=false;
		$("body,html").animate({ scrollTop:0 },1000,function(){
			flag=true;
		});
	})
	//第三步 : 操作滚动条 根据某个楼层的位置 确定高亮显示的楼层号
	$(window).scroll(function(){
		if( flag ){
			//获取某个楼层的高度 
			var h = $divs.eq(0).height();
			
			//获取页面滚走的距离
			var sTop = $("body,html").scrollTop();
			
			//根据filter查找满足某个条件的楼层
			//条件 ： 绝对值(某个楼层的top-页面滚走的距离) < h/2
			
			var $floor = $divs.filter(function(){
				//this
				return Math.abs($(this).offset().top - sTop) < h/2;
			})
			
			//根据返回的楼层 获取该楼层在同辈元素中的位置
			var index = $floor.index();
			if( index != -1 ){
				//根据index 找到要高亮显示的楼层号
				$list.eq(index)
					.find("a")
				   .addClass("active")
				   .end()
				   .siblings()
				   .find("a")
				   .removeClass("active");
			}
			
			//当页面滚走的距离小于某个值时   将楼层号的样式清空
			if( sTop < 100 ){
				$list.find("a").removeClass("active");
			}
			if(sTop<$("#main").offset().top-210){
				$louti.slideUp(500);
			}else{
				$louti.slideDown(500);
			}
		}
		
	})
	


		
