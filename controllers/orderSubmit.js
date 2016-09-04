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
		var num = $scope.goodsList[goodsId].NUM;
		++num;
		$scope.goodsList[goodsId].NUM = num>10?10:num;
	};
	$scope.downNum = function (goodsId) {
		var num = $scope.goodsList[goodsId].NUM;
		--num;
		$scope.goodsList[goodsId].NUM = num<1?1:num;	
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


	$scope.selectDataMap = new Array();
	// 获取预约时间 server_time_array
	DataGetterService.getData(
		function(data){ 
			if ( data.isNow == 1) {
				// 可以立即下单
			}

			if ( data.isWork == 1) {
				// 可以预约 时间
			} else {
				// 当日不可预约 时间
			}
			for (var i=0, dataTimeStr;dataTimeStr = data.time[i++];){
				var dataNow = {str:"今天",str_date:"2016-09-04",ORDER_PICKUP_DATE:0,ORDER_PICKUP_TIME:dataTimeStr};
				$scope.selectDataMap.push(dataNow);
			}
			var datax = new Array();
			datax.push("07:00-09:00");
			datax.push("09:00-11:00");
			datax.push("11:00-13:00");
			datax.push("13:00-15:00");
			datax.push("15:00-17:00");
			datax.push("17:00-19:00");
			datax.push("19:00-21:00");
			for (var i=0, dataTimeStr;dataTimeStr = datax[i++];){
				$scope.selectDataMap.push({str:"明天",str_date:"2016-09-05",ORDER_PICKUP_DATE:1,ORDER_PICKUP_TIME:dataTimeStr});	
			}
			for (var i=0, dataTimeStr;dataTimeStr = datax[i++];){
				$scope.selectDataMap.push({str:"后天",str_date:"2016-09-06",ORDER_PICKUP_DATE:2,ORDER_PICKUP_TIME:dataTimeStr});
			}
		}
		,"/api/server_time_array?REQ_TYPE=03&&callback=JSON_CALLBACK&&"
		,paramArr
	);
	$scope.changeSelectTime = function(event){
		var sel = event.target;
		opt = sel.options[sel.options.selectIndex];
		console.log(opt);
	}

	$scope.REQUESTMARK = new Date().getTime();
	
	// 提交订单
	$scope.orderSubmitForm = function(){
		if (!$scope.address) {
			alert( '请选择地址' );
			return false;
		};
		
		paramArr.DELIVERY_ADDRESS_ID=$scope.address.DELIVERY_ADDRESS_ID,//地址id
		paramArr.GOODS_LIST=[];
		for (key in $scope.goodsList){
			var goods=$scope.goodsList[key];
			var g = {NUM:goods.NUM+"",GOODS_ID:goods.GOODS_ID+"", GOODS_NAME:goods.GOODS_NAME};
			paramArr.GOODS_LIST.push(g);
		}
		paramArr.GOODS_LIST = JSON.stringify(paramArr.GOODS_LIST);
		
		paramArr.MEMBER_ADDRESS_INFO_1 = $scope.address.ADDRESS;
		paramArr.MEMBER_ADDRESS_INFO_2 = $scope.address.ADDRESS; //详细地址
		paramArr.MEMBER_ADDRESS_TELEPHONE=$scope.address.MOBILE; //收货人电话
		paramArr.MEMBER_ADDRESS_CONSIGNEE=$scope.address.CONSIGNEE; //收货人姓名
		paramArr.ORDER_PICKUP_TYPE= $scope.ORDER_PICKUP_TYPE; //取件类型（type）：1、默认，2、指定；
		paramArr.ORDER_PICKUP_DATE= $scope.ORDER_PICKUP.ORDER_PICKUP_DATE; //取件日期0今天　1明天　2后天
		paramArr.ORDER_PICKUP_TIME= $scope.ORDER_PICKUP.ORDER_PICKUP_TIME; //取件时间段 "10:00-12:00"
		paramArr.ORDER_REMARK=$scope.ORDER_REMARK; //订单备注
		paramArr.REQUESTMARK= $scope.REQUESTMARK;//验证是否重复提交参数	
		paramArr.IS_WEEKLY= 2;//是否周周洗订单1是2否
		paramArr.REQUESTMARK=$scope.REQUESTMARK; //重复提交参数判断

		DataGetterService.getData(
			function(data){ 
				$state.go('myOrder', {}, {reload : true});
			}
			,"/api/order_submit?REQ_TYPE=03&&callback=JSON_CALLBACK&&"
			,paramArr
			,function(){
				$scope.REQUESTMARK = new Random();
			}
		);
	}
	

}