var constantsApp = angular.module('ngConts',['ngStorage'])
constantsApp.factory('Constants', function($localStorage){
	return {
		USERNAME : $localStorage.USERNAME,
		TOKEN    : $localStorage.TOKEN,
		AREA_ID  : $localStorage.AREA_ID,
		baseUrl  : 'http://111.198.143.96:11211',
		index_city_url:'/api/area_list_v1.do?callback=JSON_CALLBACK&&',
		index_ads1_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=1&REQ_TYPE=01',
		index_floor_url:'/api/v2/index_goods_type_first_list_v2.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&REQ_TYPE=01',
		index_ads6_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=6&REQ_TYPE=01',
		index_ads7_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=7&REQ_TYPE=01',
		price_list_url:'/api/user_my_goods_price_list?&callback=JSON_CALLBACK&&AREA_ID='+19+'&REQ_TYPE=01'
//		index_ads1_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&AD_ZONE_ID=1&REQ_TYPE=01',
//		index_floor_url:'/api/v2/index_goods_type_first_list_v2.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&REQ_TYPE=01',
//		index_ads6_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&AD_ZONE_ID=6&REQ_TYPE=01',
//		index_ads7_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&AD_ZONE_ID=7&REQ_TYPE=01'
	}

});

//app.value('Constants', {
//	"baseUrl"  : 'http://111.198.143.96:11211',
//	"index_city_url":'/api/area_list_v1.do?callback=JSON_CALLBACK&&'
//});
