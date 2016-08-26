//头条新闻上下滚动 start
function autoScroll(obj){
	$(obj).find("ul").animate({
		marginTop : "-42px"
		//opaicty: 1
	},500,function(){
		$(this).css({
			marginTop : "0px"
			//opaicty: 0
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


    //头条新闻上下滚动调用代码 start
	setInterval('autoScroll(".hdlines-box")', 3000);
   //头条新闻上下滚动调用代码 end
});

//城市选择调用API代码 start
	app.controller('cityCtrl', function($scope,DataGetterService,$localStorage,Constants) {
		DataGetterService.getData(function(data){$scope.items= data;}, Constants.index_city_url);

	    $scope.selectArea = function($event){
	    	var $$this = $($event.target);
	    	var type = $('.city-container').data('type');
			$('.regionTx').html($$this.html()).attr('data-id', $$this.data('id'));
			$localStorage.AREA_ID=$$this.data('id');
			$('.city-container').hide();

			ads1CtrlFun();
			//ads1Ctrl($scope,$http,$localStorage)
			floorCtrl($scope, DataGetterService, Constants);
			ads7Ctrl($scope, DataGetterService, Constants);
			ads6Ctrl($scope, DataGetterService, Constants);
	    }
	});
//城市选择调用API代码 end

//轮播图调用API代码 start
    function ads1CtrlFun() {
    	app.controller('ads1Ctrl', function($scope,DataGetterService, Constants) {
	 		var slides = $scope.slides = [];
	 		DataGetterService.getData(function(data){$scope.slides= data;}, Constants.index_ads1_url);
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

//轮播图调用API代码 start

//首页分类调用API代码 start
	app.controller('floorCtrl', floorCtrl);
	function floorCtrl($scope,DataGetterService,$localStorage, Constants) {
		DataGetterService.getData(function(data){
			$localStorage.GOODS_TYPE_ID = data.GOODS_TYPE_ID;
			$scope.floors= data;
		}, Constants.index_types_url);
	}
//首页分类调用API代码 start

//底部广告调用API代码 start
	app.controller('ads7Ctrl', ads7Ctrl);
	function ads7Ctrl($scope, DataGetterService, Constants) {
		DataGetterService.getData(function(data){$scope.ads7= data;}, Constants.index_ads7_url);
	}
//底部广告调用API代码 start

//底部头条调用API代码 start
	app.controller('ads6Ctrl', ads6Ctrl);
	function ads6Ctrl($scope, DataGetterService, Constants) {
		DataGetterService.getData(function(data){$scope.ads6= data;}, Constants.index_ads6_url);
	}
//底部头条调用API代码 start
