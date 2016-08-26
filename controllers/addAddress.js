app.controller('addAddressCtrl', function($scope,$http,DataGetterService,$localStorage,Constants){
	$scope.sumbitAddress = function(){
		$http.jsonp('http://111.198.143.96:11211/api/addMemberAdress.do?&callback=JSON_CALLBACK&&CONSIGNEE='+encodeURI($scope.consignee)+ '&MOBILE='+encodeURI($scope.mobile) +'&ADDRESS=' + encodeURI($scope.address) + '&ACCOUNT_ID='+$localStorage.ACCOUNT_ID +'&USERNAME='+$localStorage.USERNAME +'&TOKEN='+$localStorage.TOKEN +'&REQ_TYPE=01&REGION_PROVINCE_ID=1&REGION_CITY_ID=1&REGION_COUNTRY_ID=1').success(
		　　function(data){
				if(data.result){

				}else{
					$localStorage.reset();
					alert(data.resp_msg)
				}
		　　}
		);
	}
});
