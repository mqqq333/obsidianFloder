// 自动轮播功能的实现

PTM(function(){

	//  调用setInterval()与slideAutoChange()函数（在下文定义），实现banner的自动滚动
	_slideAutoChange = setInterval("PTM.slideAutoChange()",3500);

	//  鼠标点击，清除计时器，跳转到相应banner
	PTM('#wk_slide-nav li.wk_nav-bullet-container').click(function(){
		clearInterval(_slideAutoChange);
		PTM('#wk_slide-nav li.wk_nav-bullet-container').removeClass('active').eq(PTM(this).index()).addClass('active');
		
		PTM('.wk_slide-wrap li').removeClass('wk_selected').eq(PTM(this).data('index')).addClass('wk_selected');
		_slideAutoChange = setInterval("PTM.slideAutoChange()",3500);
	})


	PTM.extend({
		//  定义slideAutoChange()函数，如果有下一页则到下一页，没有下一页则回到第一页
		slideAutoChange:function(){
			curr = PTM('.wk_slide-wrap li.wk_selected');
			if(curr.next().size()>0)
			{
        		next = curr.next(); 
        	}
			else
			{
				next = PTM('.wk_slide-wrap li:first');
			}
    		curr.removeClass('wk_selected');
        	next.addClass('wk_selected');
        	
    		PTM('#wk_slide-nav li.wk_nav-bullet-container').removeClass('active').eq(next.index()).addClass('active');
		}
	})
	//_slideAutoChange = setInterval("PTM.slideAutoChange()",5000);
		
});