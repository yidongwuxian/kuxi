app.controller('orderSubmitCtrl', ['$scope', function ($scope) {


}]);
//mui框架初始化
mui.init({
	swipeBack:true //启用右滑关闭功能
});
//复选框选中/为选中切换
mui('.mui-input-group').on('change', 'input', function() {
	var value = this.checked?"true":"false";
	this.previousElementSibling.innerText = "checked："+value;
});
