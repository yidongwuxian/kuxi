
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


app.controller('addAddressCtrl',['$scope','$templateCache','$http','DataGetterService','$localStorage','Constants','$state',
 function($scope,$templateCache ,$http,DataGetterService,$localStorage,Constants,$state){
	DataGetterService.isLogin();
	//填写收货地址以及相关信息，提交
	$scope.sumbitAddress = function(){
		if (!$scope.GD_DATA){
			return false;
		}
		var params = {};
		params.CONSIGNEE=$scope.consignee;
		params.MOBILE=$scope.mobile;
		params.ADDRESS=$scope.address;
		params.ACCOUNT_ID=$localStorage.ACCOUNT_ID;
		params.USERNAME=$localStorage.USERNAME;
		params.TOKEN=$localStorage.TOKEN;
		params.IS_DEFAULT=$scope.IS_DEFAULT?1:0;//是否默认 0非默认 1默认

		params.TABLE_ID = $localStorage.TABLE_ID; //TABLE_ID
		params.GD_LATITUDE= $scope.GD_DATA._location.lat;//经度
		params.GD_LONGITUDE= $scope.GD_DATA._location.lng;//纬度
		params.GD_ADDRESS= $scope.GD_DATA._address;//高德地址
		params.GD_ID= $scope.GD_DATA._id;//高德ID
		params.COMMUNITY_ID=$scope.GD_DATA.COMMUNITY_ID; //社区ID

		DataGetterService.getData(function(data){
			$state.go('address' ,{}, {reload : true});
		},'/api/addMemberAdress_v1?callback=JSON_CALLBACK',params);
		
	}
}]);
 
app.directive('typeahead', function($timeout,$localStorage) {
  return {
    restrict: 'AEC',
    scope: { 
    	_name: '@',
	    retkey: '@',
	    displaykey:'@',
	    GD_DATA:'=',
	    modeldisplay:'=',
	    _address: '@', 
	    modelret: '=' 
    },
      
    link: function(scope, elem, attrs) {
        scope.current = 0;      
        scope.selected = false; 
        
      scope.da  = function(txt){
      	if (!txt) {
      		scope.TypeAheadData = [];
      		return false;
      	}
        
        var search = new AMap.CloudDataSearch($localStorage.TABLE_ID);  
		search.setOptions({keywords:txt,pageSize:100,pageIndex:1});
		search.searchByDistrict(txt, function(status, result){
			scope.TypeAheadData = result.datas; 
	        scope.ajaxClass = ''; 
		})
		scope.ajaxClass = 'loadImage';
          
          
      }
      
      scope.handleSelection = function(item) {
        scope.modelret = item;
        scope.modeldisplay = item._name; 
        scope.GD_DATA = item;
        scope.current = 0;
        scope.selected = true; 
      }
         
        
      scope.isCurrent = function(index) {
        return scope.current == index;
      }
        
      scope.setCurrent = function(index) {
        scope.current = index;
      }
        
    },
    template: '<input type="text" ng-model="modeldisplay" ng-keyup="da(modeldisplay)" ng-keydown="selected=false" style="width:100%;" ng-class="ajaxClass" placeholder="学校/小区/大厦">'
				+'<div class="list-group table-condensed overlap" ng-hide="!modeldisplay.length || selected" style="width:100%">'
				+'<a 	href="javascript:void();" '
				+	'class="list-group-item noTopBottomPad" '
				+	'ng-repeat="item in TypeAheadData|filter:model  track by $index" '
				+	'ng-click="handleSelection(item)" '
				+	'style="cursor:pointer" '
				+	'ng-class="{active:isCurrent($index)}" '
				+	'ng-mouseenter="setCurrent($index)"> '
				+	'{{item._name}}<br><i>{{item._address}} </i>'
				+'</a> </div>'
  };
});



app.controller('searchAddressCtrl', function($scope,$http,DataGetterService,$localStorage,Constants){

	//地图api调取
	var search = new AMap.CloudDataSearch($localStorage.TABLE_ID);
	console.log(search);

	$scope.sumbitAddress = function(){
		$scope.searchTx;
	}
});
