var constantsApp = angular.module('ngConts',['ngStorage'])
constantsApp.factory('Constants', function($localStorage){
	return {
		USERNAME   : $localStorage.USERNAME,
		TOKEN      : $localStorage.TOKEN,
		AREA_ID    : $localStorage.AREA_ID,
		ACCOUNT_ID : $localStorage.ACCOUNT_ID,
		baseUrl  : 'http://111.198.143.96:11211',
		index_city_url:'/api/area_list_v1.do?callback=JSON_CALLBACK&&',
		index_ads1_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=1&REQ_TYPE=01',
		index_types_url: '/api/v2/index_goods_type_first_list_v1?&callback=JSON_CALLBACK&&AREA_ID=25',
		index_ads6_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=6&REQ_TYPE=01',
		index_ads7_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=7&REQ_TYPE=01',
		loginOut_url:'/api/login_out.do?&callback=JSON_CALLBACK&&USERNAME='+$localStorage.USERNAME+'&TOKEN='+$localStorage.TOKEN+'&REQ_TYPE=01',
		mycenter_url:'/api/user_info_center.do?&callback=JSON_CALLBACK&&'+ 'USERNAME='+$localStorage.USERNAME+ '&TOKEN='+$localStorage.TOKEN+ '&REQ_TYPE=01',
		list_url:'/api/v2/goods_list_1?&callback=JSON_CALLBACK&&AREA_ID='+23+'&GOODS_TYPE_ID='+7+'&REQ_TYPE=01',
		feedback_url: '/api/feedback_list.do?&callback=JSON_CALLBACK&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'&REQ_TYPE=01',
		version_url: '/api/get_version_update.do??&callback=JSON_CALLBACK&&REQ_TYPE=01&APP_USE_ROLE=0&VERSION_CODE=12&VERSION_NAME=1.1.1&TERMINALT_TYPE=00',
		money_url: '/api/account_balance.do?&callback=JSON_CALLBACK&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME,
		coupon_url: 'api/user_coupon_list_v1.do?&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME +'&REQ_TYPE=01'+'&ORDER_NO='+$localStorage.ORDER_NO + '&ORDER_ID='+$localStorage.ORDER_ID,
		address_url: '/api/getMemberAdresslistv2.do?&callback=JSON_CALLBACK&&AREA_LEVEL_3='+$localStorage.AREA_LEVEL_3+ '&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'&REQ_TYPE=01',
		del_address_url: '/api/delete_address.do??&callback=JSON_CALLBACK&&DATA_IDS='+$localStorage.DATA_IDS+'TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'&REQ_TYPE=01'
//		index_ads1_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&AD_ZONE_ID=1&REQ_TYPE=01',
//      index_types_url: '/api/v2/index_goods_type_first_list_v1?&callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+',
//		index_ads6_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&AD_ZONE_ID=6&REQ_TYPE=01',
//		index_ads7_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&AD_ZONE_ID=7&REQ_TYPE=01',
//      loginOut_url:'/api/login_out.do?&callback=JSON_CALLBACK&&USERNAME='+$localStorage.USERNAME+'&TOKEN='+$localStorage.TOKEN+'&REQ_TYPE=01',
//      mycenter_url:'/api/user_info_center.do?TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'&REQ_TYPE=01',
//      list_url: '/api/v2/goods_list_1?&callback=JSON_CALLBACK&&AREA_ID='+25+'&GOODS_TYPE_ID='+7+'&REQ_TYPE=01',
//      feedback_url: '/api/feedback_list.do?&callback=JSON_CALLBACK&&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+'$localStorage.USERNAME+'&REQ_TYPE=01'
	}

});
