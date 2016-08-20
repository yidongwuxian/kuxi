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

$(function($localStorage){
	
	$localStorage.AREA_ID="23";//默认区域Id 23
	
	//顶部区域选择 start
	//加载城市事件
	$('body').on('click', '.regionTx', function () {
		var zid = $(this).attr('id');
		$('.city-container').show();

	});
	//选择城市 start
	/*$('body').on('click', '.city-list p', function () {
		var type = $('.city-container').data('type');
		$('.regionTx').html($(this).html()).attr('data-id', $(this).attr('data-id'));
		$localStorage.AREA_ID=$(this).attr('data-id');
		$('.city-container').hide();
	});*/
	$('body').on('click', '.letter a', function () {
		var s = $(this).html();
		$(window).scrollTop($('#' + s + '1').offset().top);
	});
	//顶部区域选择 end

	//轮播图 start
	// window.mySwipe = Swipe(document.getElementById('gallery'),{
	// 	auto: 1000
	// });
	//轮播图 end

    //头条新闻上下滚动调用代码 start
	setInterval('autoScroll(".hdlines-box")', 3000);
   //头条新闻上下滚动调用代码 end
});

//城市选择调用API代码 start
var httpx = 'http://111.198.143.96:11211';
	var app = angular.module('myApp', ["ngStorage",'ngAnimate', 'ngTouch']);
	app.controller('cityCtrl', function($scope,$http,$localStorage) {
	    $http.jsonp(httpx + '/api/area_list_v1.do?callback=JSON_CALLBACK&&').success(function(data){
	    	$scope.items = data.result;
	    });
	    
	    $scope.selectArea = function($event){
	    	var $$this = $($event.target);
	    	var type = $('.city-container').data('type');
			$('.regionTx').html($$this.html()).attr('data-id', $$this.data('id'));
			$localStorage.AREA_ID=$$this.data('id');
			$('.city-container').hide();
			
			ads1CtrlFun();
			//ads1Ctrl($scope,$http,$localStorage)
			floorCtrl($scope,$http,$localStorage);
			ads7Ctrl($scope,$http,$localStorage);
			ads6Ctrl($scope,$http,$localStorage);
	    }
	});
//城市选择调用API代码 end

//轮播图调用API代码 start
    function ads1CtrlFun() {
    	app.controller('ads1Ctrl', function($scope,$http,$localStorage) {  
	 		var slides = $scope.slides = [];
			$http.jsonp(httpx + '/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=1&REQ_TYPE=01').success(function(data){
		    	$scope.slides = data.result;
		    	console.log(data.result);
		    });
		    $scope.direction = 'left';
	        $scope.currentIndex = 0;

	        $scope.setCurrentSlideIndex = function (index) {
	            $scope.direction = (index > $scope.currentIndex) ? 'left' : 'right';
	            $scope.currentIndex = index;
	        };

	        $scope.isCurrentSlideIndex = function (index) {
	            return $scope.currentIndex === index;
	        };

	        $scope.prevSlide = function () {
	            $scope.direction = 'left';
	            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
	        };

	        $scope.nextSlide = function () {
	            $scope.direction = 'right';
	            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
	        };
		}).animation('.slide-animation', function () {
	        return {
	            beforeAddClass: function (element, className, done) {
	                var scope = element.scope();

	                if (className == 'ng-hide') {
	                    var finishPoint = element.parent().width();
	                    if(scope.direction !== 'right') {
	                        finishPoint = -finishPoint;
	                    }
	                    TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
	                }
	                else {
	                    done();
	                }
	            },
	            removeClass: function (element, className, done) {
	                var scope = element.scope();

	                if (className == 'ng-hide') {
	                    element.removeClass('ng-hide');

	                    var startPoint = element.parent().width();
	                    if(scope.direction === 'right') {
	                        startPoint = -startPoint;
	                    }

	                    TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
	                }
	                else {
	                    done();
	                }
	            }
	        };
	    });
    } 
	
	ads1CtrlFun();

	// function ads1Ctrl($scope,$http, $localStorage) {
 //        $scope.myInterval = 5000;
 //        var slides = $scope.slides = [];
	// 	$http.jsonp(httpx + '/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=1&REQ_TYPE=01').success(function(data){
	//     	$scope.slides = data.result;
	//     	console.log(data.result);
	//     });
	// }
//轮播图调用API代码 start

//首页分类调用API代码 start
	app.controller('floorCtrl', floorCtrl);
	function floorCtrl($scope,$http, $localStorage) {
//		$http.jsonp(httpx + '/api/v2/index_goods_type_first_list_v2.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&REQ_TYPE=01').success(function(data){
		$http.jsonp(httpx + '/api/v2/index_goods_type_first_list_v2.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&REQ_TYPE=01').success(function(data){
	    	$scope.floors = data.result;
	    });
	}
//首页分类调用API代码 start
	
//底部广告调用API代码 start
	app.controller('ads7Ctrl', ads7Ctrl);
	function ads7Ctrl($scope,$http, $localStorage) {
//		$http.jsonp(httpx + '/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&AD_ZONE_ID=7&REQ_TYPE=01').success(function(data){
		$http.jsonp(httpx + '/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=7&REQ_TYPE=01').success(function(data){
			$(data.result).each(function(index,item){//待删除
	    		item.PICTURE_URL="http://img.kucixy.com/img/20160118/4c4db0c74a0d4b498f3c49212bff14ec.jpg";
	    	})
	    	$scope.ads7 = data.result;
	    });
	}
//底部广告调用API代码 start
	
//底部头条调用API代码 start
	app.controller('ads6Ctrl', ads6Ctrl);
	function ads6Ctrl($scope,$http, $localStorage) {
//		$http.jsonp(httpx + '/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&AD_ZONE_ID=6&REQ_TYPE=01').success(function(data){
			$http.jsonp(httpx + '/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=6&REQ_TYPE=01').success(function(data){
	    	$scope.ads6 = data.result;
	    });
	}
//底部头条调用API代码 start
