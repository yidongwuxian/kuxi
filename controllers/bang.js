app.controller('bangCtrl', bangCtrl);
function bangCtrl($scope, DataGetterService, Constants) {
    DataGetterService.getData(function(data){
	   $scope.bangs = data.goodsList;
   }, Constants.bang_url);

   $scope.minus = function($index) {
       if ($scope.varlist.itemNum[$index] == 0) {
           return;
       } else {
           $scope.varlist.itemNum[$index]--;
           //getTotal();
       }
   }

   $scope.add = function($index) {
       $scope.varlist.itemNum[$index]++;
       //getTotal();
   }

   // 计算总价
   var getTotal = function($index) {
       $scope.varlist.total = 0;
       for (var j = 0; j < len; j++) {
           $scope.varlist.total = $scope.varlist.total + $scope.varlist.itemNum[j];
       }
       return $scope.varlist.total;
   }

}

app.directive('triStateCheckbox', function() {
  return {
    replace: true,
    restrict: 'E',
    scope: { checkboxes: '=' },
    template: '<div><input type="checkbox" ng-model="master" ng-change="masterChange()">'
      + '<div ng-repeat="cb in checkboxes">'
      + '<input type="checkbox" ng-model="cb.isSelected" ng-change="cbChange()">{{cb.desc}}'
      + '</div>'
      + '</div>',
    controller: function($scope, $element) {
      $scope.masterChange = function() {
        if($scope.master) {
          angular.forEach($scope.checkboxes, function(cb, index){
            cb.isSelected = false;
          });
        } else {
          angular.forEach($scope.checkboxes, function(cb, index){
            cb.isSelected = true;
          });
        }
      };
      var masterCb = $element.children()[0];
      $scope.cbChange = function() {
        var allSet = true, allClear = true;
        angular.forEach($scope.checkboxes, function(cb, index){
          if(cb.isSelected) {
            allClear = false;
          } else {
            allSet = false;
          }
        });
        if(allSet)        {
          $scope.master = true;
          masterCb.indeterminate = false;
        }
        else if(allClear) {
          $scope.master = false;
          masterCb.indeterminate = false;
        }
        else {
          $scope.master = false;
          masterCb.indeterminate = true;
        }
      };
      $scope.cbChange();  // initialize
    },
  };
});
