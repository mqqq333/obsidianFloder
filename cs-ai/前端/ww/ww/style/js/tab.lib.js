PTM(document).ready(function () {
  function cur(ele, currentClass, tag) {
    /*
		定义函数cur，根据参数的不同，在元素上添加或移除 CSS 类
		参数
			ele:要进行操作的元素
			currentClass：要进行操作的类名
			tag：
		*/
    ele = PTM(ele) ? PTM(ele) : ele;
    if (!tag) {
      ele.addClass(currentClass).siblings().removeClass(currentClass);
    } else {
      ele.addClass(currentClass).siblings(tag).removeClass(currentClass);
    }
  }

  /*
		定义tab，包含参数options，包含属性：
			tabId：选项卡的标识符。
			tabTag：选项卡的标签。
			conId：内容区域的标识符。
			conTag：内容区域的标签。
			curClass：当前选项卡的类名。
			act：选项卡触发事件的类型。
			dft：默认显示的选项卡的索引。
			effact：选项卡切换的效果。
			auto：是否自动切换选项卡。
			autotime：自动切换选项卡的时间间隔。
			aniSpeed：选项卡切换的动画速度。

	*/
  PTM.fn.tab = function (options) {
    var org = {
      tabId: "",
      tabTag: "",
      conId: "",
      conTag: "",
      curClass: "active",
      act: "click",
      dft: 0,
      effact: null,
      auto: false,
      autotime: 3000,
      aniSpeed: 100,
    };

    /*
			使用PTM.extend方法将options对象中的属性值合并到org对象中，以覆盖默认配置
		*/
    PTM.extend(org, options);
    var t = false;
    var k = 0;
    var _this = PTM(this);
    var tagwrp = PTM(org.tabId);
    var conwrp = PTM(org.conId);
    var tag = tagwrp.find(org.tabTag);
    var con = conwrp.find(org.conTag);
    var len = tag.length;
    var taght = parseInt(tagwrp.css("height"));
    var conwh = conwrp.get(0).offsetWidth;
    var conht = conwrp.get(0).offsetHeight;
    var curtag = tag.eq(org.dft);
    cur(curtag, org.curClass);
    con.eq(org.dft).show().siblings(org.conTag).hide();

    //	如果为"scrollx"，则设置水平滚动效果；如果为"scrolly"，则设置垂直滚动效果。
    if (org.effact == "scrollx") {
      var padding =
        parseInt(con.css("padding-left")) + parseInt(con.css("padding-right"));
      _this.css({
        position: "relative",
        height: taght + conht + "px",
        overflow: "hidden",
      });
      conwrp.css({
        width: len * conwh + "px",
        height: conht + "px",
        position: "absolute",
        top: taght + "px",
      });
      con.css({
        float: "left",
        width: conwh - padding + "px",
        display: "block",
      });
    }

    if (org.effact == "scrolly") {
      var padding =
        parseInt(con.css("padding-top")) + parseInt(con.css("padding-bottom"));
      _this.css({
        position: "relative",
        height: taght + conht + "px",
        overflow: "hidden",
      });
      tagwrp.css({ "z-index": 100 });
      conwrp.css({
        width: "100%",
        height: len * conht + "px",
        position: "absolute",
        "z-index": 99,
      });
      con.css({
        height: conht - padding + "px",
        float: "none",
        display: "block",
      });
    }

    // 给每个选项卡元素绑定事件处理函数，当触发事件时，执行相应的操作。根据配置中的effact属性，采取不同的切换效果。
    tag.css({ cursor: "pointer" }).each(function (i) {
      tag.eq(i).bind(org.act, function () {
        cur(this, org.curClass);
        k = i;
        switch (org.effact) {
          case "slow":
            con.eq(i).show("slow").siblings(org.conTag).hide("slow");
            break;
          case "fast":
            con.eq(i).show("fast").siblings(org.conTag).hide("fast");
            break;
          case "scrollx":
            conwrp.animate({ left: -i * conwh + "px" }, org.aniSpeed);
            break;
          case "scrolly":
            conwrp.animate({ top: -i * conht + taght + "px" }, org.aniSpeed);
            break;
          default:
            con.eq(i).show().siblings(org.conTag).hide();
            break;
        }
      });
    });

    //  根据auto值，判断是否自动切换选项卡。如果为true，则定义一个drive函数，根据配置中的act属性触发选项卡的事件，
    //  并设置循环切换的时间间隔。然后使用setInterval函数调用drive函数，实现自动切换选项卡的效果。
    if (org.auto) {
      var drive = function () {
        if (org.act == "mouseover") {
          tag.eq(k).mouseover();
        } else if (org.act == "click") {
          tag.eq(k).click();
        }
        k++;
        if (k == len) k = 0;
      };
      t = setInterval(drive, org.autotime);
    }
  };
});
