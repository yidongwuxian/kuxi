var app = angular.module('myApp', ["ngStorage", 'ngService', "ngConts"]);
app.controller('moreCtrl', moreCtrl);
function moreCtrl($scope,DataGetterService, Constants) {
	$scope.loginOut = function(){
		$localStorage.USERNAME;
		$localStorage.TOKEN;
		DataGetterService.getData(function(data){
			window.location = "login.html";
		}, Constants.loginOut_url);
	}
};
