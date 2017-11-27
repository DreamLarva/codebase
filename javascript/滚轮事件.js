/**
 * Created by zhangxiaojuan on 2016/4/7.
 */
 
 //jquery 的写简略写法
 $(document).on("mousewheel DOMMouseScroll", function (e) {
    
    var delta = (e.originalEvent.wheelDelta && (e.originalEvent.wheelDelta > 0 ? 1 : -1)) ||  // chrome & ie
                (e.originalEvent.detail && (e.originalEvent.detail > 0 ? -1 : 1));              // firefox

    
    if (delta > 0) {
        // 向上滚
        console.log("wheelup");
    } else if (delta < 0) {
        // 向下滚
        console.log("wheeldown");
    }
	//这里阻止默认事件 就能够不让整个页面滚动
	 e.preventDefault()
});
 
 
 
 
 
 
 
 

var statusS = true;
$(function () {
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

  //注册滚轮事件
  if (document.addEventListener) {
    //debugger
    document.addEventListener('DOMMouseScroll', iconScroll, false);
  }
  //滚动滑轮触发iconScroll方法
  window.onmousewheel = iconScroll;

});

//滚动事件
var iconScroll = function (e) {
  //debugger
  //statusS=true;
  var direct = 0;
  e = e || window.event;

  if (e.wheelDelta) {
    //判断浏览器IE，谷歌滑轮事件
    if (e.wheelDelta > 0) {
      if (statusS) {
        statusS = false;
        //当滑轮向上滚动时
        screenScrolling(1);
        setTimeout("statusS = true", 500);
      }
    } else if (e.wheelDelta < 0) {
      if (statusS) {
        statusS = false;
        //当滑轮向下滚动时
        screenScrolling(0);
        setTimeout("statusS = true", 500);
      }
    }
  } else if (e.detail) {
    //Firefox滑轮事件
    if (e.detail < 0) {
      if (statusS) {
        statusS = false;
        //当滑轮向上滚动时
        screenScrolling(1);
        setTimeout("statusS = true", 500);
      }
    } else if (e.detail > 0) {
      if (statusS) {
        statusS = false;
        //当滑轮向下滚动时
        screenScrolling(0);
        setTimeout("statusS = true", 500);
      }
    }
  }
};

//滚轮滚动事件
function screenScrolling(flag) {
  //开始执行效果
  if (flag == 1) {
    //向上滚动

    $(".mrc").eq(i).show().siblings().hide();//滚动事件的内容

  } else if (flag == 0) {
    //向下滚动

    $(".mrc").eq(i).show().siblings().hide();//滚动事件的内容
  }


}