app.controller('orderSubmitCtrl', orderSubmitCtrl);

function orderSubmitCtrl($scope, DataGetterService,$localStorage, Constants, $state) {
	// 判断登陆状态
	if (!$localStorage.TOKEN) {
		$state.go('login',{}, {reload: false});
	}
	// 判断订单类型，周周戏或 普通衣服

	// 初始化商品列表
	$scope.goodsList = Constants.OBJECT;

	$scope.upNum = function (goodsId) {
		var num = $scope.goodsList[goodsId].GOODS_NUM;
		++num;
		$scope.goodsList[goodsId].GOODS_NUM = num>10?10:num;
	};
	$scope.downNum = function (goodsId) {
		var num = $scope.goodsList[goodsId].GOODS_NUM;
		--num;
		$scope.goodsList[goodsId].GOODS_NUM = num<1?1:num;	
	}
	var paramArr = {};
	paramArr.USERNAME=$localStorage.USERNAME;
	paramArr.IS_DEFAULT=1
	paramArr.TOKEN=$localStorage.TOKEN;
	paramArr.AREA_LEVEL_3=$localStorage.AREA_ID;
	// 获取 默认地址 
	DataGetterService.getData(
		function(data){ 
			var isDefault = data.length;
			if ( isDefault ) {
				$scope.address = data[0];
			}
		}
		,"/api/getMemberAdresslistv2?REQ_TYPE=03&&callback=JSON_CALLBACK&&"
		,paramArr
	);
	// 


	// 获取预约时间 server_time_array
	DataGetterService.getData(
		function(data){ 
			var isDefault = data.length;
			if ( isDefault ) {
				$scope.address = data[0];
			}
		}
		,"/api/server_time_array?REQ_TYPE=03&&callback=JSON_CALLBACK&&"
		,paramArr
	);

	// 提交订单
	$scope.orderSubmitForm = function(){
		if (!$scope.address) {
			alert( '请选择地址' );
			return false;
		};

		if (!scope.address){

		}
		
		paramArr.DELIVERY_ADDRESS_ID=$scope.address.DELIVERY_ADDRESS_ID,//地址id
		paramArr.GOODS_LIST=[{
		     "NUM":"5",//商品数量
		     "GOODS_ID":"2",//商品id
		     "GOODS_NAME":"长袖衬衣2",//商品名称    
		}],
		paramArr.MEMBER_ADDRESS_INFO_1 = $scope.address.ADDRESS;
		paramArr.MEMBER_ADDRESS_INFO_2 = $scope.address.ADDRESS; //详细地址
		paramArr.MEMBER_ADDRESS_TELEPHONE=$scope.address.MOBILE; //收货人电话
		paramArr.MEMBER_ADDRESS_CONSIGNEE=$scope.address.CONSIGNEE; //收货人姓名
		paramArr.ORDER_PICKUP_TYPE= 1; 取件类型（type）：1、默认，2、指定；
		paramArr.ORDER_PICKUP_DATE= 0; 取件日期0今天　1明天　2后天
		paramArr.ORDER_PICKUP_TIME="10:00-12:00"; 取件时间段
		paramArr.ORDER_REMARK=$scope.ORDER_REMARK; //订单备注
		paramArr.REQUESTMARK=5154988451515165;//验证是否重复提交参数	
		paramArr.IS_WEEKLY=1;//是否周周洗订单1是2否

		DataGetterService.getData(
			function(data){ 
				var isDefault = data.length;
				if ( isDefault ) {
					$scope.address = data[0];
				}
			}
			,"/api/server_time_array?REQ_TYPE=03&&callback=JSON_CALLBACK&&"
			,paramArr
			,function(){

			}
		);
	}
	

}