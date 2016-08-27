app.controller('homeTabCtrl', ['$scope', '$state', function ($scope, $state) {
	$scope.myTab = [{
			title: '床上用品',
			url: 'house.tpl'
		}, {
			title: '沙发饰品',
			url: 'sofa.tpl'
		}, {
			title: '窗帘',
			url: 'curtain.tpl'
		}, {
			title: '地毯',
			url: 'carpet.tpl'
	}];

	$scope.currentTab = 'house.tpl';

	$scope.onClickTab = function (tab) {
		$scope.currentTab = tab.url;
	}

	$scope.isActiveTab = function(tabUrl) {
		return tabUrl == $scope.currentTab;
	}
	$scope.goserviceInfo = function(){
		$state.go("serviceInfo", {}, { reload: true });
	}
}]);
