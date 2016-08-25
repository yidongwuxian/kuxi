var constantsApp = angular.module('ngConts',['ngStorage'])
constantsApp.factory('Constants', function($localStorage){
	return {
		USERNAME : $localStorage.USERNAME,
		TOKEN    : $localStorage.TOKEN,
		AREA_ID  : $localStorage.AREA_ID,
		baseUrl  : 'http://111.198.143.96:11211',
		index_city_url:'/api/area_list_v1.do?callback=JSON_CALLBACK&&',
		index_ads1_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=1&REQ_TYPE=01',
		index_types_url: '/api/v2/index_goods_type_first_list_v1?&callback=JSON_CALLBACK&&AREA_ID=25',
		index_ads6_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=6&REQ_TYPE=01',
		index_ads7_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=7&REQ_TYPE=01',
		loginOut_url:'/api/login_out.do?&callback=JSON_CALLBACK&&USERNAME='+'18001309176'+'&TOKEN='+'3c2f88cf-c73b-4031-a82c-dff8d5238722'+'&REQ_TYPE=01',
		list_url:'/api/v2/goods_list_1?&callback=JSON_CALLBACK&&AREA_ID='+25+'&GOODS_TYPE_ID='+7+'&REQ_TYPE=01',
		feedback_url: '/api/feedback_list.do?&callback=JSON_CALLBACK&&&TOKEN='+'daf740d0-15f3-4e3c-bfdd-29e6dd4541ce'+'&USERNAME='+'18001309176'+'&REQ_TYPE=01',
		version_url: '/api/get_version_update.do?REQ_TYPE=01&APP_USE_ROLE=0&VERSION_CODE=12&VERSION_NAME=1.1.1&TERMINALT_TYPE=00'
//		index_ads1_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&AD_ZONE_ID=1&REQ_TYPE=01',
//      index_types_url: '/api/v2/index_goods_type_first_list_v1?&callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+',
//		index_ads6_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&AD_ZONE_ID=6&REQ_TYPE=01',
//		index_ads7_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&AD_ZONE_ID=7&REQ_TYPE=01',
//      loginOut_url:'/api/login_out.do?&callback=JSON_CALLBACK&&USERNAME='+$localStorage.USERNAME+'&TOKEN'+$localStorage.TOKEN+'&REQ_TYPE=01',
//      list_url: '/api/v2/goods_list_1?&callback=JSON_CALLBACK&&AREA_ID='+25+'&GOODS_TYPE_ID='+7+'&REQ_TYPE=01',
//      feedback_url: '/api/feedback_list.do?&callback=JSON_CALLBACK&&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+'$localStorage.USERNAME+'&REQ_TYPE=01'
	}

});
