var serviceApp = angular.module('ngService', ["ngStorage","ngConts",'me-lazyload','angular-iscroll']);
serviceApp.service('DataGetterService', function($localStorage, $http, Constants){
	return {
		getData:function(call_back_param, request_url){
			if(request_url !== '') {
				$http.jsonp(Constants.baseUrl + request_url).success(function(data){
					call_back_param(data.result);
			    });
			}
		}
	}
});
