//意见反馈列表
app.controller('feedbackCtrl', function($scope, DataGetterService,$localStorage,Constants){
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.feedback_url);
});

//意见反馈－写反馈
app.controller('writefeedbackCtrl', function($scope,DataGetterService,$stateParams,$localStorage,$state) {

	$scope.submitFeedback = function(){
		DataGetterService.getData(function(data){$state.go("feedback", {}, { reload: true });},
		 "/api/commit_feedback?&callback=JSON_CALLBACK",{
		 	CONTENT : $scope.feedback.textarea,
			ACCOUNT_ID : $localStorage.ACCOUNT_ID,
			USERNAME: $localStorage.USERNAME,
			TOKEN : $localStorage.TOKEN 
		});
	}
});

//我的订单－已完成－去评价
app.controller('writecommitCtrl', function($scope,DataGetterService,Constants,$localStorage,$state){
	
	$scope.submitCommit = function(){
		DataGetterService.getData(function(data){
				alert("评价提交成功！");
				$state.go("myOrder", {}, { reload: true });
		　　},'/api/user_submit_evaluate?&callback=JSON_CALLBACK',{
			TOKEN:$localStorage.TOKEN,
			USERNAME:$localStorage.USERNAME,
			PARAMS:$localStorage.OBJECT.ORDER_NO,
			EVALUATE_TYPE:1,
			EVALUATE_CONTENT:$scope.writecommit.textarea
		});
	}
});
