//var app = angular.module('myApp', []);
app.controller('weekTabCtrl', ['$scope', function ($scope) {
	$scope.myTab = [
		{
			title: '精致洗衣',
			url: 'laundry.tpl'
		}, {
			title: '品质洗鞋',
			url: 'culotte.tpl'
		},{
			title: '家居洗涤',
			url: 'house.tpl'
		}, {
			title: '车饰清洗',
			url: 'car.tpl'
		}, {
			title: '其他',
			url: 'others.tpl'
		}
	];

	$scope.currentTab = 'laundry.tpl';

	$scope.onClickTab = function (tab) {
		$scope.currentTab = tab.url;
	}

	$scope.isActiveTab = function(tabUrl) {
		return tabUrl == $scope.currentTab;
	}
}]);
