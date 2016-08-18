var app = angular.module('myApp', []);
app.controller('orderDetailsTabCtrl', ['$scope', function ($scope) {
	$scope.myTab = [{
			title: '订单状态',
			url: 'orderStatus.tpl'
		}, {
			title: '衣服详情',
			url: 'clothDetails.tpl'
		}];

	$scope.currentTab = 'orderStatus.tpl';

	$scope.onClickTab = function (tab) {
		$scope.currentTab = tab.url;
	}

	$scope.isActiveTab = function(tabUrl) {
		return tabUrl == $scope.currentTab;
	}
}]);
