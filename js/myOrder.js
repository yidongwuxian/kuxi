var app = angular.module('myApp', []);
app.controller('orderTabCtrl', ['$scope', function ($scope) {
	$scope.myTab = [{
			title: '待支付',
			url: 'notpaid.tpl'
		}, {
			title: '服务中',
			url: 'inservice.tpl'
		}, {
			title: '已完成',
			url: 'completed.tpl'
		}];

	$scope.currentTab = 'notpaid.tpl';

	$scope.onClickTab = function (tab) {
		$scope.currentTab = tab.url;
	}

	$scope.isActiveTab = function(tabUrl) {
		return tabUrl == $scope.currentTab;
	}
}]);
