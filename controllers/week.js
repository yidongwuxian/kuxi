app.controller('weekCtrl', weekCtrl);
function weekCtrl($scope, DataGetterService, Constants) {
	DataGetterService.getData(function(data){
	   $scope.lists = data;
    }, Constants.week_url);

	DataGetterService.getData(function(data){
	   $scope.cloths = data;
	}, Constants.week_cloth_url);

	DataGetterService.getData(function(data){
		$scope.homes = data;
	}, Constants.week_home_url);

	DataGetterService.getData(function(data){
		$scope.cars = data;
	}, Constants.week_car_url);

   // $scope.weekClothTab = function(){
   //  DataGetterService.getData(function(data){
   // 	      $scope.cloths = data;
   //     }, Constants.week_cloth_url);
   // }

   // $scope.weekHomeTab = function(){
   // ataGetterService.getData(function(data){
   // $scope.homes = data;
   // 	 }, Constants.week_home_url);
   // }

   // $scope.weekCarTab = function(){
   // ataGetterService.getData(function(data){
   // $scope.cars = data;
   // 	 }, Constants.week_car_url);
   // }

}
