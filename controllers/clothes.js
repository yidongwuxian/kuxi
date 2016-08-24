var app = angular.module('myApp', []);
app.controller('clothTabCtrl', ['$scope', function ($scope) {
	$scope.myTab = [{
			title: '上装外套',
			url: 'Jacket.tpl'
		}, {
			title: '下装裤裙',
			url: 'Culotte.tpl'
		}];

	$scope.currentTab = 'Jacket.tpl';

	$scope.onClickTab = function (tab) {
		$scope.currentTab = tab.url;
	}

	$scope.isActiveTab = function(tabUrl) {
		return tabUrl == $scope.currentTab;
	}
}]);
