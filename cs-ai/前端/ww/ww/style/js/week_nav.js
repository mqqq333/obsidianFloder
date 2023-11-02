//	固定导航位置
var FixedBox=function(el)
{
	this.element=el;
	this.BoxY=getXY(this.element).y;
}
FixedBox.prototype=
{
/*
	FixedBox的原型包含一个名为setCss的方法，用于设置导航元素的CSS样式。在setCss方法内部，首先使用条件判断语句获取窗口的滚动位置，
	具体方式取决于文档是否处于兼容模式。如果兼容模式为 CSS1Compat，则使用 document.documentElement.scrollTop 或 window.pageYOffset 
	获取滚动位置；否则，使用 document.body.scrollTop 获取滚动位置。接下来，如果窗口的滚动位置大于 BoxY 的值，表示滚动超过了导航元素的位置，
	此时将对导航元素应用一系列 CSS 样式，使其固定在窗口顶部。具体样式包括 position: fixed、top: 0px、width: 100% 等。
    如果窗口的滚动位置小于等于 BoxY 的值，表示滚动仍在导航元素之前，此时将移除导航元素的内联样式，恢复其原始样式。
*/
	setCss:
	function()
	{
		var windowST=(document.compatMode && document.compatMode!="CSS1Compat")? document.body.scrollTop:document.documentElement.scrollTop||window.pageYOffset;
		if(windowST>this.BoxY)
		{
			this.element.style.cssText="position:fixed;top:0px;width:100%;z-index:110;left:0px;padding:0px;margin-top:0;opacity:1;background:#FFF;border-bottom:0;box-shadow:0px 2px 5px 0px rgba(0,0,0,.15);";
		}
		else
		{
			this.element.style.cssText="";
		}
	}
};
//添加事件
/*
	定义addEvent函数，用于在元素上添加事件监听器。

	参数：
		elm: 要添加事件监听器的元素
		evType: 事件类型，如 "click"、"mouseover" 等
		fn: 事件处理函数，即当事件触发时要执行的函数
		useCapture: 指定事件是否在捕获阶段进行处理，为布尔值，默认为 false
	代码首先检查元素是否支持addEventListener方法。如果支持，则使用addEventListener方法将事件监听器添加到元素上，并传入事件类型、
	事件处理函数以及是否在捕获阶段处理的参数。函数返回 true，表示添加事件监听器成功。如果元素不支持 addEventListener 方法，
	则检查是否支持 attachEvent 方法。如果支持，则使用 attachEvent 方法将事件监听器添加到元素上，并通过在事件类型前加上 "on"，
	来指定事件的名称。函数返回 r 的值，表示添加事件监听器的结果。如果元素既不支持addEventListener方法，也不支持attachEvent方法，
	则将事件处理函数直接赋值给元素的 on 加上事件类型的属性，来添加事件监听器。总之，addEvent 函数根据浏览器的支持情况，使用相应的方法来添加事件监听器，并返回添加结果。
*/
function addEvent(elm, evType, fn, useCapture) 
{
	if (elm.addEventListener) 
	{
		elm.addEventListener(evType, fn, useCapture);
		return true;
	}
	else if (elm.attachEvent) 
	{
		var r = elm.attachEvent('on' + evType, fn);
		return r;
	}
	else 
	{
		elm['on' + evType] = fn;
	}
}

//	获取元素的XY坐标；
/*
	函数内部使用了两种不同的方法来获取元素的坐标，具体取决于浏览器是否支持getBoundingClientRect方法。
	如果document.documentElement.getBoundingClientRect存在，那么函数会使用这个方法来获取元素的坐标。
	getBoundingClientRect方法返回一个DOMRect对象，包含了元素的位置信息（left、top、right、bottom等）。
	通过将元素的左边界left与document.documentElement.scrollLeft相加，以及将元素的上边界top与document.documentElement.scrollTop相加，
	即可得到元素相对于文档顶部左上角的坐标。如果浏览器不支持getBoundingClientRect方法，
	那么函数会使用另一种方法来获取元素的坐标。在这种情况下，函数会通过迭代遍历元素的offsetParent，
	累加元素的偏移量offsetLeft和offsetTop，直到找到没有offsetParent的根元素为止。最终返回的坐标包括累加的_x和_y值，
	表示元素相对于文档顶部左上角的坐标。总之，getXY函数根据浏览器的支持情况，使用不同的方法来获取元素的坐标信息。
*/
function getXY(el) 
{

	return document.documentElement.getBoundingClientRect 
	&& (function() 
	{//取元素坐标，如元素或其上层元素设置position relative
		var pos = el.getBoundingClientRect();
		return { x: pos.left + document.documentElement.scrollLeft, y: pos.top + document.documentElement.scrollTop };
	})() 
	|| (function() 
	{
		var _x = 0, _y = 0;
		do {
			_x += el.offsetLeft;
			_y += el.offsetTop;
		} while (el = el.offsetParent);
		return { x: _x, y: _y };
	})();
}

//实例化；
/*
	这段代码创建了一个名为divA的FixedBox实例，将通过document.getElementById("week_nav")获取到的元素作为参数传递给构造函数。这个实例用于实现导航元素的固定效果。
	使用addEvent函数给window 添加了一个滚动事件的监听器。当滚动事件触发时，会执行一个匿名函数。在这个匿名函数中，调用了divA.setCss()方法，即设置导航元素的 
	CSS样式。整体来看，这段代码的作用是创建一个FixedBox实例，将导航元素传递给构造函数进行初始化，并在滚动事件触发时调用setCss()方法来实现导航元素的固定效果。
*/
var divA=new FixedBox(document.getElementById("week_nav"));
addEvent(window,"scroll",
function()
{
	divA.setCss();
});
