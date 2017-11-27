//获得元素element距离整个页面顶部的距离(有可能有轻微的误差) 不同的页面缩放可能会有影响
function getElementTop(element){
	//获得当前元素element距离相对定位的父元素的top值
	var top=element.offsetTop;
	//将element换成相对定位的父元素
	while((element=element.offsetParent)!=null){
		top+=element.offsetTop;
	}
	return top;
}






//父元素无定位
document.getElementById("div").offsetTop