

app.controller('clothTabCtrl', clothTabCtrl);
function clothTabCtrl($scope, DataGetterService, Constants, $state) {

	$scope.num =0;
	$scope.boughtList = boughtList;
	$scope.total = 0;
	for(var k in boughtList){
	   if(boughtList[k]){
		   $scope.total += boughtList[k].num*boughtList[k].price;
	   }
    }

	var common = {
		 getTotal : function(total){
		     total = 0;
		     for(var k in boughtList){
		         if(boughtList[k]){
		             if(boughtList[k].num <=0){
		                 boughtList[k].num = 0;
		             }
		             total += boughtList[k].num*boughtList[k].price;
		         }
		     }
		     return total;
		 }
	}

	 $scope.buyAction = function(event){
		 var id=event.target.getAttribute("item-id");
		 var price=event.target.getAttribute("price");
		 $scope.num+=1;
     }

	DataGetterService.getData(function(data){
	   $scope.items = data.goodsList;
	}, Constants.list_url);

	$scope.hobby = false;

	$scope.goserviceInfo = function(){
		$state.go("serviceInfo", {}, { reload: true });
	}
}
