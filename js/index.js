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
	$('body').on('click', '.city-list p', function () {
		var type = $('.city-container').data('type');
		$('.regionTx').html($(this).html()).attr('data-id', $(this).attr('data-id'));
		$('.city-container').hide();
	});
	$('body').on('click', '.letter a', function () {
		var s = $(this).html();
		$(window).scrollTop($('#' + s + '1').offset().top);
	});
	//顶部区域选择 end

	//轮播图 start
	window.mySwipe = Swipe(document.getElementById('gallery'));
	//轮播图 end

    //头条新闻上下滚动调用代码 start
	setInterval('autoScroll(".hdlines-box")', 3000);
   //头条新闻上下滚动调用代码 end
});

//城市选择调用API代码 start
var httpx = 'http://111.198.143.96:11211';
	var app = angular.module('myApp', []);
	app.controller('cityCtrl', function($scope,$http) {
	    $http.jsonp(httpx + '/api/area_list_v1.do?callback=JSON_CALLBACK&&').success(function(data){
	    	$scope.items = data.result;
	    });
	});
//城市选择调用API代码 end
