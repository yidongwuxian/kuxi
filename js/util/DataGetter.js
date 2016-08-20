var serviceApp = angular.module('ngService', ["ngStorage","ngConts"]);
serviceApp.service('DataGetterService', function($localStorage, $http, Constants){
	return {
		getData:function(call_back_param, path){
			var request_url = '';
			switch (path) {
				case 'index_city'  :	request_url = Constants.index_city_url;break;
				case 'index_ads1'  :	request_url = Constants.index_ads1_url;break;
				case 'index_floor' :	request_url = Constants.index_floor_url;break;
				case 'index_ads6'  :	request_url = Constants.index_ads6_url;break;
				case 'index_ads7'  :	request_url = Constants.index_ads7_url;break;
				default:break;
			}
			var data = null;
			if(request_url !== '') {
				$http.jsonp(Constants.baseUrl + request_url).success(function(data){
					call_back_param(data.result);
			    });
			} 
		}
	}
});
//app.service('DataGetterService', function($localStorage){
//	return {
//		getData:function(){return $localStorage.USERNAME}
//	};
//});