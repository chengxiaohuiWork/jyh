$(window).load(function (){
	//首页头部尾部加载
	loadHtml("../html/common/header.html", "#head");
	loadHtml("../html/common/nav.html", "#nav");
	loadHtml("../html/common/warrant.html", "#warrant");
	loadHtml("../html/common/foot.html", "#foot");
	loadHtml("../html/common/footer.html", "#footer");
	
	//轮播图实现轮播效果
	lunbo.show("#banner");
	
	//购物车下拉菜单显示
	myCartMsgShow();
	
})

