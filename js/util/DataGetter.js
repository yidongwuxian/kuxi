var serviceApp = angular.module('ngService', ["ngStorage","ngConts",'me-lazyload','mui']);
serviceApp.service('DataGetterService', function($localStorage, $http, Constants, $state){
	var getData=function(call_back_param, request_url, param_arr ,call_back_fail_param){
			if(request_url !== '') {
				var paramstr = '';
				for( param in param_arr){
					request_url = request_url + "&&"+ param +"=" + window.encodeURI(param_arr[param])
				}
				$http.jsonp(Constants.baseUrl +request_url ).success(function(data){
					data = eval(data);
					if (data.resp_code == '403'){
						$state.go("login", {}, { reload: true });
					}else if(data.resp_code == '500'){
						alert(data.resp_msg);
					} else {
						call_back_param(data.result);	
					}
			    });
			}
		}
	return {
		getData:getData,
		isLogin:function(){
			getData(function(data){

			},'/api/v2/is_user_login?callback=JSON_CALLBACK',{USERNAME:$localStorage.USERNAME,TOKEN:$localStorage.TOKEN})
		}
	}
});
