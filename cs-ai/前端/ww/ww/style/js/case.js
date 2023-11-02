(function(PTM){
	//  自定义缓动函数 easeInSine，可以在动画效果中使用该函数来实现特定的缓动效果。
	PTM.extend(PTM.easing,{
		easeInSine: function (x, t, b, c, d) 
		{
			/*
				x：当前时间（时间进度），取值范围为 0 到 1。
				t：当前时间（动画已经进行的时间），取值范围为 0 到 d（动画总时长）。
				b：起始值（动画的初始状态）。
				c：变化量（结束值与起始值的差值）。
				d：动画总时长。
			*/
			return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
		}
	});
	/*
		定义了一个名为PTM.fn.Xslider的函数。函数接收一个settings参数，这段代码实现了一个滚动插件，根据配置项的不同，可以实现水平或垂直方向的滚动，并支持循环滚动、自动滚动等功能。
		在函数内部，首先使用 PTM.extend 方法将传入的 settings 和默认配置项 PTM.fn.Xslider.sn.defaults 进行合并，并将结果保存在 settings 变量中。
		接下来，函数通过遍历每个插件元素，对每个元素执行以下操作：
			获取相关的元素和配置项。
			解绑按钮点击事件。
			根据滚动方向设置初始位置。
			根据内容长度和可视区域大小判断是否需要滚动，并相应地添加或移除样式类。
			为左按钮和右按钮分别添加点击事件处理器。
			如果配置项中启用了自动滚动，则调用相应的自动滚动方法。
			
	*/
	PTM.fn.Xslider=function(settings){

		settings=PTM.extend({},PTM.fn.Xslider.sn.defaults,settings);
		this.each(function(){
			var scrollobj=settings.scrollobj ? PTM(this).find(settings.scrollobj) : PTM(this).find("ul"),
			    viewedSize=settings.viewedSize || (settings.dir=="H" ? scrollobj.parent().width() : scrollobj.parent().height()),//length of the wrapper visible;
			    scrollunits=scrollobj.find("li"),//units to move;
			    unitlen=settings.unitlen || (settings.dir=="H" ? scrollunits.eq(0).outerWidth() : scrollunits.eq(0).outerHeight()),
			    unitdisplayed=settings.unitdisplayed,//units num displayed;
				numtoMove=settings.numtoMove > unitdisplayed ? unitdisplayed : settings.numtoMove,
			    scrollobjSize=settings.scrollobjSize || scrollunits.length*unitlen,//length of the scrollobj;
			    offset=0,//max width to move;
			    offsetnow=0,//scrollobj now offset;
			    movelength=unitlen*numtoMove,
				pos=settings.dir=="H" ? "left" : "top",
			    moving=false,//moving now?;
			    btnright=PTM(this).find("a.aright"),
			    btnleft=PTM(this).find("a.aleft");
			
			btnright.unbind("click");
			btnleft.unbind("click");
					
			settings.dir=="H" ? scrollobj.css("left","0px") : scrollobj.css("top","0px");
							
			if(scrollobjSize>viewedSize)
			{
				if(settings.loop=="cycle")
				{
					btnleft.removeClass("agrayleft");
					if(scrollunits.length<2*numtoMove+unitdisplayed-numtoMove)
					{
						scrollobj.find("li").clone().appendTo(scrollobj);	
					}
				}
				else
				{
					btnleft.addClass("agrayleft");
					offset=scrollobjSize-viewedSize;
				}
				btnright.removeClass("agrayright");
			}else
			{
				btnleft.addClass("agrayleft");
				btnright.addClass("agrayright");
			}

			btnleft.click(function()
			{
				if(PTM(this).is("[class*='agrayleft']")){return false;}
				
				if(!moving)
				{
					moving=true;
					
					if(settings.loop=="cycle")
					{
						scrollobj.find("li:gt("+(scrollunits.length-numtoMove-1)+")").prependTo(scrollobj);
						scrollobj.css(pos,"-"+movelength+"px");
						PTM.fn.Xslider.sn.animate(scrollobj,0,settings.dir,settings.speed,function(){moving=false;});
					}
					else
					{
						offsetnow-=movelength;
						if(offsetnow>unitlen*unitdisplayed-viewedSize)
						{
							PTM.fn.Xslider.sn.animate(scrollobj,-offsetnow,settings.dir,settings.speed,function(){moving=false;});
						}
						else
						{
							PTM.fn.Xslider.sn.animate(scrollobj,0,settings.dir,settings.speed,function(){moving=false;});
							offsetnow=0;
							PTM(this).addClass("agrayleft");
						}
						btnright.removeClass("agrayright");
					}
				}

				return false;
			});
			btnright.click(function()
			{
				if(PTM(this).is("[class*='agrayright']")){return false;}
				
				if(!moving)
				{
					moving=true;
					
					if(settings.loop=="cycle")
					{
						var callback=function(){
							scrollobj.find("li:lt("+numtoMove+")").appendTo(scrollobj);
							scrollobj.css(pos,"0px");
							moving=false;
						}
						PTM.fn.Xslider.sn.animate(scrollobj,-movelength,settings.dir,settings.speed,callback);
					}
					else
					{
						offsetnow+=movelength;
						if(offsetnow<offset-(unitlen*unitdisplayed-viewedSize))
						{
							PTM.fn.Xslider.sn.animate(scrollobj,-offsetnow,settings.dir,settings.speed,function(){moving=false;});
						}
						else
						{
							PTM.fn.Xslider.sn.animate(scrollobj,-offset,settings.dir,settings.speed,function(){moving=false;});//���������һ��λ��;
							offsetnow=offset;
							PTM(this).addClass("agrayright");
						}
						btnleft.removeClass("agrayleft");
					}
				}
				
				return false;
			});
			
			if(settings.autoscroll){
				PTM.fn.Xslider.sn.autoscroll(PTM(this),settings.autoscroll);
			}
		})
	}
	//	配置滚动方向和速度
	PTM.fn.Xslider.sn={
		defaults:{
			dir:"H",
			speed:500
		},
		/*
			animate()函数，实现指定对象在水平和竖直方向上的动画效果，并通过缓动函数easeInSine()函数来控制动画的缓动方式。
			参数：
				obj:目标对象
				w:目标位置
				dir:方向
				speed：速度
				callback：回调函数
		*/
		animate:function(obj,w,dir,speed,callback){
			if(dir=="H")
			{
				obj.animate({
					left:w
				},speed,"easeInSine",callback);
			}
			else if(dir=="V")
			{
				obj.animate({
					top:w
				},speed,"easeInSine",callback);	
			}	
		},
		/*
			autoscroll()函数，实现自动滚动效果
			参数：
				obj:目标对象

		*/
		autoscroll:function(obj,time)
		{
			var  vane="right";
			function autoscrolling(){
				if(vane=="right"){
					if(!obj.find("a.agrayright").length){
						obj.find("a.aright").trigger("click");
					}else{
						vane="left";
					}
				}
				if(vane=="left"){
					if(!obj.find("a.agrayleft").length){	
						obj.find("a.aleft").trigger("click");
					}else{
						vane="right";
					}
				}
			}
		}
	}
})(jQuery);