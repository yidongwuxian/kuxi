var constantsApp = angular.module('ngConts',['ngStorage'])
constantsApp.factory('Constants', function($localStorage){
	return {
<<<<<<< Updated upstream
		USERNAME      : $localStorage.USERNAME,
		TOKEN         : $localStorage.TOKEN,
		AREA_ID       : $localStorage.AREA_ID,
		ACCOUNT_ID    : $localStorage.ACCOUNT_ID,
		TABLE_ID      : $localStorage.TABLE_ID,
		GOODS_TYPE_ID : $localStorage.GOODS_TYPE_ID,
=======
		USERNAME   : $localStorage.USERNAME,
		TOKEN      : $localStorage.TOKEN,
		AREA_ID    : $localStorage.TOKEN,
		ACCOUNT_ID : $localStorage.ACCOUNT_ID,
		TABLE_ID   : $localStorage.TABLE_ID,
		OBJECT:$localStorage.OBJECT,
>>>>>>> Stashed changes
		baseUrl  : 'http://111.198.143.96:11211',
		index_city_url:'/api/area_list_v1.do?callback=JSON_CALLBACK&&',
		index_ads1_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=1&REQ_TYPE=01',
		index_types_url: '/api/v2/index_goods_type_first_list_v1?&callback=JSON_CALLBACK&&AREA_ID=25',
		index_ads6_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=6&REQ_TYPE=01',
		index_ads7_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+19+'&AD_ZONE_ID=7&REQ_TYPE=01',
		loginOut_url:'/api/login_out.do?&callback=JSON_CALLBACK&&USERNAME='+$localStorage.USERNAME+'&TOKEN='+$localStorage.TOKEN+'&REQ_TYPE=01',
<<<<<<< Updated upstream
		mycenter_url:'/api/user_info_center.do?&callback=JSON_CALLBACK&'+ '&USERNAME='+$localStorage.USERNAME+'&TOKEN='+$localStorage.TOKEN+ '&REQ_TYPE=01',
		list_url:'/api/v2/goods_list_1?&callback=JSON_CALLBACK&&AREA_ID='+23+'&GOODS_TYPE_ID='+7+'&REQ_TYPE=01',
=======
		mycenter_url:'/api/user_info_center.do?&callback=JSON_CALLBACK&&'+ 'USERNAME='+$localStorage.USERNAME+ '&TOKEN='+$localStorage.TOKEN+ '&REQ_TYPE=01',
		list_url:'/api/v2/goods_list?&callback=JSON_CALLBACK&&AREA_ID='+23+'&GOODS_TYPE_ID='+7+'&REQ_TYPE=01',
>>>>>>> Stashed changes
		bang_url:'/api/v2/goods_list_1?&callback=JSON_CALLBACK&&AREA_ID=23&REQ_TYPE=01&GOODS_TYPE_ID=13',
		week_url:'/api/goods_type_list_weekly.do?&callback=JSON_CALLBACK&&REQ_TYPE=01&AREA_ID=19',
		week_cloth_url: '/api/goods_list_weekly?&callback=JSON_CALLBACK&&AREA_ID=19&REQ_TYPE=01&GOODS_TYPE_ID=7',
		week_home_url: '/api/goods_list_weekly?&callback=JSON_CALLBACK&&AREA_ID=19&REQ_TYPE=01&GOODS_TYPE_ID=11',
		week_car_url: '/api/goods_list_weekly?&callback=JSON_CALLBACK&&AREA_ID=19&REQ_TYPE=01&GOODS_TYPE_ID=12',
		feedback_url: '/api/feedback_list.do?&callback=JSON_CALLBACK&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'&REQ_TYPE=01',
		version_url: '/api/get_version_update.do??&callback=JSON_CALLBACK&&REQ_TYPE=01&APP_USE_ROLE=0&VERSION_CODE=12&VERSION_NAME=1.1.1&TERMINALT_TYPE=00',
		money_url: '/api/account_balance.do?&callback=JSON_CALLBACK&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME,
		invite_url:
		'/api/share_to_friend.do?&callback=JSON_CALLBACK&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'&ACTIVITY_TYPE=3&REQ_TYPE=01&AREA_LEVEL_2=19',
		exclusive_url: 'api/bangding_guanjia_list.do?&callback=JSON_CALLBACK&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'& REQ_TYPE=01',
		recharge_record_url: '/api/recharge_record.do?&callback=JSON_CALLBACK&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME +'&SHOWCOUNT=10&CURRENTPAGE=1&SHOWCOUNT=10',
		coupon_url: 'api/user_coupon_list_v1.do?&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME +'&REQ_TYPE=01'+'&ORDER_NO='+$localStorage.ORDER_NO + '&ORDER_ID='+$localStorage.ORDER_ID,
		address_url: '/api/getMemberAdresslistv2.do?&callback=JSON_CALLBACK&&AREA_LEVEL_3='+23+ '&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'&REQ_TYPE=01',
		del_address_url: '/api/delete_address.do?&callback=JSON_CALLBACK&&DATA_IDS='+$localStorage.DATA_IDS+'TOKEN='+$localStorage.TOKEN+
		'&USERNAME='+$localStorage.USERNAME+'&REQ_TYPE=01',
		userreg_agreement_url: '/api/service_agreement.do?&callback=JSON_CALLBACK&&REQ_TYPE=01&SERVICE_AGREEMENT_TYPE=1&AREA_LEVEL_2=19',
		housekeeper_agreement_url:'/api/service_agreement.do?&callback=JSON_CALLBACK&&REQ_TYPE=01&SERVICE_AGREEMENT_TYPE=2&AREA_LEVEL_2=19',
		coupon_agreement_url:'/api/service_agreement.do?&callback=JSON_CALLBACK&&REQ_TYPE=01&SERVICE_AGREEMENT_TYPE=3&AREA_LEVEL_2=19',
		order_topaids_url:'/api/order_findOrderListByUserInfoForUser.do?&callback=JSON_CALLBACK&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'&PAY_STATUS=2&REQ_TYPE=01',
		order_paymenting_url:'/api/order_findOrderListByUserInfoForUser.do?&callback=JSON_CALLBACK&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'&PAY_STATUS=3&REQ_TYPE=01',
		order_completed_url:'/api/order_findOrderListByUserInfoForUser.do?&callback=JSON_CALLBACK&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'&PAY_STATUS=1&REQ_TYPE=01'
//		index_ads1_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&AD_ZONE_ID=1&REQ_TYPE=01',
//      index_types_url: '/api/v2/index_goods_type_first_list_v1?&callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+',
//		index_ads6_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&AD_ZONE_ID=6&REQ_TYPE=01',
//		index_ads7_url:'/api/ad_list.do?callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&AD_ZONE_ID=7&REQ_TYPE=01',
//      loginOut_url:'/api/login_out.do?&callback=JSON_CALLBACK&&USERNAME='+$localStorage.USERNAME+'&TOKEN='+$localStorage.TOKEN+'&REQ_TYPE=01',
//      mycenter_url:'/api/user_info_center.do?TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'&REQ_TYPE=01',
//      list_url: '/api/v2/goods_list_1?&callback=JSON_CALLBACK&&AREA_ID='+25+'&GOODS_TYPE_ID='+7+'&REQ_TYPE=01',
//bang_url:'/api/v2/goods_list_1?&callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&REQ_TYPE=01&GOODS_TYPE_ID=13',
//week_url:'/api/goods_type_list_weekly.do?&callback=JSON_CALLBACK&&REQ_TYPE=01&AREA_ID='+$localStorage.AREA_ID+',
// week_cloth_url: '/api/goods_list_weekly?&callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&REQ_TYPE=01&GOODS_TYPE_ID=7',
// week_home_url: '/api/goods_list_weekly?&callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&REQ_TYPE=01&GOODS_TYPE_ID=11',
// week_car_url: '/api/goods_list_weekly?&callback=JSON_CALLBACK&&AREA_ID='+$localStorage.AREA_ID+'&REQ_TYPE=01&GOODS_TYPE_ID=12',
//      feedback_url: '/api/feedback_list.do?&callback=JSON_CALLBACK&&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+'$localStorage.USERNAME+'&REQ_TYPE=01',
// money_url: '/api/account_balance.do?&callback=JSON_CALLBACK&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME,
// recharge_record_url: '/api/recharge_record.do?&callback=JSON_CALLBACK&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME +'&SHOWCOUNT=10&CURRENTPAGE=1&SHOWCOUNT=10',
// coupon_url: 'api/user_coupon_list_v1.do?&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME +'&REQ_TYPE=01'+'&ORDER_NO='+$localStorage.ORDER_NO + '&ORDER_ID='+$localStorage.ORDER_ID,
//address_url: '/api/getMemberAdresslistv2.do?&callback=JSON_CALLBACK&&AREA_LEVEL_3='+$localStorage.AREA_LEVEL_3+ '&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'&REQ_TYPE=01',
// del_address_url: '/api/delete_address.do?&callback=JSON_CALLBACK&&DATA_IDS='+$localStorage.DATA_IDS+'TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'&REQ_TYPE=01',
// userreg_agreement_url:'/api/service_agreement.do?&callback=JSON_CALLBACK&&REQ_TYPE=01&SERVICE_AGREEMENT_TYPE=1&AREA_LEVEL_2='+$localStorage.AREA_LEVEL_2+'',
// housekeeper_agreement_url:'/api/service_agreement.do?&callback=JSON_CALLBACK&&REQ_TYPE=01&SERVICE_AGREEMENT_TYPE=2&AREA_LEVEL_2='+$localStorage.AREA_LEVEL_2+'',
// coupon_agreement_url:'/api/service_agreement.do?&callback=JSON_CALLBACK&&REQ_TYPE=01&SERVICE_AGREEMENT_TYPE=2&AREA_LEVEL_2='+$localStorage.AREA_LEVEL_2+''
	}

});
