app.controller('addressCtrl', function($scope,DataGetterService,$localStorage,Constants,$state){
	//展示收货地址列表
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.address_url);
	//跳转到添加收货地址页面
	$scope.addAddress = function(){
		$state.go("addAddress", {}, { reload: true });
	}
	//删除收货地址
	$scope.delAddress = function(){
		DataGetterService.getData(function(data){}, Constants.del_address_url);
	}
});

app.controller('addAddressCtrl', function($scope,$http,DataGetterService,$localStorage,Constants){
	//地图api调取
	var search = new AMap.CloudDataSearch($localStorage.TABLE_ID);
	console.log(search);

	//填写收货地址以及相关信息，提交
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


app.controller('searchAddressCtrl', function($scope,$http,DataGetterService,$localStorage,Constants){
	//
	$scope.sumbitAddress = function(){
		$scope.searchTx;
	}
});
