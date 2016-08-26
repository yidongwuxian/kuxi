//var app = angular.module('myApp', []);
// app.controller('clothTabCtrl', ['$scope','$state', function ($scope, $state) {
// 	$scope.myTab = [{
// 			title: '上装外套',
// 			url: 'Jacket.tpl'
// 		}, {
// 			title: '下装裤裙',
// 			url: 'Culotte.tpl'
// 		}];
//
// 	$scope.currentTab = 'Jacket.tpl';
//
// 	$scope.onClickTab = function (tab) {
// 		$scope.currentTab = tab.url;
// 	}
//
// 	$scope.isActiveTab = function(tabUrl) {
// 		return tabUrl == $scope.currentTab;
// 	}
//
// 	$scope.goserviceInfo = function ($state) {
// 		$state.go('pages/serviceInfo.html');
// 	}
// }]);
app.controller('clothTabCtrl', clothTabCtrl);
function clothTabCtrl($scope, DataGetterService, Constants) {
	DataGetterService.getData(function(data){$scope.lists= data.goodsList;}, Constants.list_url);
}
