//头条新闻上下滚动 start
function autoScroll(obj){
	$(obj).find("ul").animate({
		//marginTop : "-42px"
		opaicty: 1
	},500,function(){
		$(this).css({
			//marginTop : "0px"
			opaicty: 0
		}).find("li:first").appendTo(this);
	})
}
//头条新闻上下滚动 end

$(function(){
	//顶部区域选择 start
	//加载城市事件
	$('body').on('click', '.regionTx', function () {
		var zid = $(this).attr('id');
		$('.city-container').show();

	});
	//选择城市 start
	// $('body').on('click', '.city-list p', function () {
	// 	var type = $('.city-container').data('type');
	// 	//$('#zone_ids').html($(this).html()).attr('data-id', $(this).attr('data-id'));
	// 	$('.regionTx').html($(this).html()).attr('data-id', $(this).attr('data-id'));
	// 	$('.city-container').hide();
	// });
	// $('body').on('click', '.letter a', function () {
	// 	var s = $(this).html();
	// 	$(window).scrollTop($('#' + s + '1').offset().top);
	// });
	//顶部区域选择 end
	$.ajax({
	   type: "GET",//请求方式
	   url: "http://111.198.143.96:11211/api/area_list_v1.do",//地址，就是action请求路径
	   //data: "jsonp",//数据类型text xml json  script  jsonp
	   success: function(msg){//返回的参数就是 action里面所有的有get和set方法的参数
	        console.log(msg);
	     document.getElementById("result").innerHTML=msg;
	   }
	});

	//轮播图 start
	window.mySwipe = Swipe(document.getElementById('gallery'));
	//轮播图 end

    //头条新闻上下滚动调用代码 start
	setInterval('autoScroll(".hdlines-box")', 3000);
   //头条新闻上下滚动调用代码 end
});
