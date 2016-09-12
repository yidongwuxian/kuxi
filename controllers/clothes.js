

app.controller('clothTabCtrl', clothTabCtrl);
function clothTabCtrl($scope, DataGetterService,$stateParams,$localStorage, Constants, $state) {

	$scope.totalPrice=0;
	$scope.totalNum=0;
	$scope.categoryList = [];
	$scope.goodsList = {};

	 $scope.selectItem = function($event,price,goodsId, categoryId) {
        var ch = $event.target;
        if(! ch.checked){
        	ch.checked=true;
        }else {
        	ch.checked = null;
        }
        if (ch.checked){
        	$scope.totalNum++;
        	$scope.totalPrice =accAdd($scope.totalPrice,price);
        	for(var i=0,goods;goods = $scope.result[categoryId][i++];){
        		if (goods.GOODS_ID == goodsId) {
        			goods.NUM=1;
        			$scope.goodsList[goodsId] = goods;
        			break;		
        		}
        	}
        	
        } else {
        	$scope.totalNum--;
        	$scope.totalPrice = Subtr($scope.totalPrice, price);
        	delete $scope.goodsList[goodsId];

        }
	}

	$scope.submitForm = function(){
    	if ($scope.totalNum<1) {
    		alert('请选择后提交');
    		return false;
    	};
    	DataGetterService.isLogin();
		$localStorage.OBJECT = $scope.goodsList;
		$state.go('orderSubmit',{},{reload:true})
    	
    }
    //加法   
	function accAdd(arg1,arg2){   
		var r1,r2,m;   
		try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}   
		try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}   
		m=Math.pow(10,Math.max(r1,r2))   
		return (arg1*m+arg2*m)/m   
	}   
	//减法   
	function Subtr(arg1,arg2){  
	    var r1,r2,m,n;  
	    try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}  
	    try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}  
	    m=Math.pow(10,Math.max(r1,r2));  
	    n=(r1>=r2)?r1:r2;  
	    return ((arg1*m-arg2*m)/m).toFixed(n);  
	}

	DataGetterService.getData(function(data){
		$scope.result = data;
	  	$scope.categoryList = $scope.result.categoryList;
	  	for (var i = 0,ca; ca=$scope.categoryList[i++]; ) {
	  		var key= ca.GOODS_CATEGORY_ID;
	  		$scope.result[key].selectedStyle=false;
	  	};
	}, '/api/v2/goods_list?&callback=JSON_CALLBACK'
	,{AREA_ID:$localStorage.AREA_ID,GOODS_TYPE_ID:$stateParams.uid});

	$scope.hobby = false;

	$scope.goserviceInfo = function(){
		$state.go("serviceInfo", {}, { reload: true });
	}
}
