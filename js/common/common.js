//头部、尾部抽离函数
function loadHtml(url, dom){
	$.ajax({
		type : "get",
		async : false,
		url : url,
		success : function (data){
			$(dom).html(data);
		}
	});
}
//轮播图

var lunbo = function(){
	var now = 0;
	var oBox = null;
	var oImages = null;
	var oNumBtns = null;
	var oBoxWidth = null;
	var oBtnL = null;
	var oBtnR = null;
	var oLis = null;
	var timer = null;
	//	console.log(oImages);
	//	console.log(oNumBtns);
	//	console.log(oBtnL);
	//	console.log(oBtnR);
	
	return {
		show : function (id){
				oBox = $(id);
				oImages = $($(id).children()[0]).children();
				oNumBtns = $($(id).children()[3]);
//				console.log(oNumBtns);
//				console.log(oNumBtns.css("width"));
				oBtnL = $($(id).children()[1]);
				oBtnR = $($(id).children()[2]);
				for (var i = 0; i < oImages.length; i++){
					var oLi = $("<li></li>");
					oLi.html(i + 1);
					oNumBtns.append(oLi);
				}
				oBoxWidth = parseInt(oNumBtns.css("width")) / 2;
				oNumBtns.css("marginLeft", -oBoxWidth);
//				console.log(oNumBtns.css("marginLeft"));
				
				oLis = oNumBtns.children();
//				console.log(oLis);
				$(oLis[now]).addClass("on");
				
				/*oBtnR.click(function (){
					if (now == oImages.length - 1){
						now = 0;
					} else {
						now++;
					}
					cut();
				})*/
				oBtnR[0].onclick = function (){
					if (now == oImages.length - 1){
						now = 0;
					} else {
						now++;
					}
					cut();
				}
				oBtnL.click(function (){
					if (now == 0){
						now = oImages.length - 1;
					} else {
						now--;
					}
					cut();
				})
				
				function cut(){
					for (var i = 0; i < oImages.length; i++){
						$(oImages[i]).stop().fadeOut();
					}
					$(oImages[now]).stop().fadeIn();
					oLis.removeClass();
					$(oLis[now]).addClass("on");
				}
				
				clearInterval(timer);
				timer = setInterval(oBtnR[0].onclick, 2000);
				oBox.mouseover(function (){
					clearInterval(timer);
				})
				oBox.mouseout(function (){
					clearInterval(timer);
					timer = setInterval(oBtnR[0].onclick, 2000);
				})
				
				
		}
	}
	
}();


//购物车下拉菜单显示
function myCartMsgShow(){
	var oMyCart = $("#myCart");
//	console.log(oMyCart);
	var oCartList = $("#cartList");
	var oUpIcon = oCartList.prev();
	var oHasGoods = $("#hasGoods");
//	console.log(oHasGoods);
//	console.log(oUpIcon);
	var oNoGood = $("#noGood");
	console.log(oNoGood);
	oMyCart.mouseover(function (){
		oCartList.show();
		oHasGoods.hide();
		oUpIcon.show();
		oNoGood.show();
	})
	oMyCart.mouseout(function (){
		oCartList.hide();
		oUpIcon.hide();
		oNoGood.hide();
	})
}
