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

	// $.ajax({
    //          type: "get",
    //          async: false,
    //          url: "http://111.198.143.96:11211/api/area_list_v1.do",
    //          dataType: "jsonp",
    //          jsonp: "callback",
    //          jsonpCallback:"JSON_CALLBACK",
    //          success: function(data){
	// 			 if(data.resp_code == "200" && data.resp_msg == "success"){
	// 				  var newData = data.result;
	// 				  var html = '<ul>';
	// 				  for(var i = 0; i < newData.length; i++){
	// 					 html += '<li>' + newData[i].AREA_EN + '</li>';
	// 				  }
	// 				  html += '</ul>';
	//
	// 				 $('.letter').html(html);
	// 				 var newhtml ='';
	// 				 for(var j= 0; j< newData.length; j++){
	// 					 var inData = newData[j].AREA_EN;
	// 					 for(var k = 0; k< inData.length; k++ ){
	// 						 console.log(inData[i].AREA_NAME);
	// 					 newhtml += '<div class="city-list"> \
	// 					      <div class="city-letter" id="'+ newData[j].AREA_EN +'1"> \
	// 					          <span>'+ newData[j].AREA_EN +'</span> \
	// 					          <span>'+ newData[j].AREA_NAME+'</span> \
	// 					      </div> \
	// 					      <div class="city-cn"> \
	// 					          <p data-id="">'+ inData[k].AREA_NAME +'</p>\
	// 					      </div>\
	// 					    </div>';
	// 				   	  $('.city').html(newhtml);
	//
	// 			   		}
	// 				 }
	//
	// 			 }
    //          },
    //          error: function(){
    //              alert('fail');
    //          }
    // });

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
