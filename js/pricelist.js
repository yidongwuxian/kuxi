var app = angular.module('myApp', ["ngStorage", 'ngService', "ngConts"]);
app.controller('PriceListCtrl', PriceListCtrl);
function PriceListCtrl($scope,DataGetterService, Constants) {
	DataGetterService.getData(function(data){
		$scope.pricelists= data;
	}, Constants.price_list_url);
};
