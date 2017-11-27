/**
 * Created by zhangxiaojuan on 2016/4/7.
 */

$(function () {




  //注册h5滑动事件
    document.body.addEventListener('touchstart', touchStart, false);
    document.body.addEventListener('touchmove', touchMove, false);
    document.body.addEventListener('touchend', touchEnd, false);
  });





  //html5 滑动事件
  var startX,//触摸时的坐标
    startY,
    x,
    y, //上下滑动的距离
    aboveY = 0; //设一个全局变量记录上一次内部块滑动的位置


  function touchStart(e) { //触摸开始

    var touch = e.touches[0];
    startY = touch.pageY; //刚触摸时的坐标
    e.preventDefault();
  }

  function touchMove(e) {//滑动
    var touch = e.touches[0];
    y = touch.pageY - startY;//滑动的距离
    e.preventDefault();
  }

  function touchEnd(e) {//手指离开屏幕
    if (y > 0) {
      //向下滑的的事件
    }
    if (y < 0) {
      //向上划的事件
    }
    e.preventDefault();
  }






