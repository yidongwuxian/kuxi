//var app = angular.module('myApp', []);
app.controller('shoesTabCtrl', ['$scope', function ($scope) {
	$scope.myTab = [{
			title: '布鞋  ｜  旅游鞋',
			url: 'shoe.tpl'
		}, {
			title: '皮鞋',
			url: 'pishoe.tpl'
		}, {
			title: '翻毛鞋',
			url: 'maoshoe.tpl'
		}, {
			title: '靴类',
			url: 'xue.tpl'
		}];

	$scope.currentTab = 'shoe.tpl';

	$scope.onClickTab = function (tab) {
		$scope.currentTab = tab.url;
	}

	$scope.isActiveTab = function(tabUrl) {
		return tabUrl == $scope.currentTab;
	}
}]);
