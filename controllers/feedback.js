//意见反馈列表
app.controller('feedbackCtrl', function($scope, DataGetterService,$localStorage,Constants){
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.feedback_url);
});

//意见反馈－写反馈
app.config(function($httpProvider){
	$httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=utf-8';
});

app.controller('writefeedbackCtrl', function($scope,$http,$localStorage,$state) {
	$scope.submitFeedback = function(){
		$http.jsonp('http://111.198.143.96:11211/api/commit_feedback.do?&callback=JSON_CALLBACK&&CONTENT='+encodeURI($scope.feedback.textarea)+ '&ACCOUNT_ID='+$localStorage.ACCOUNT_ID +'&USERNAME='+$localStorage.USERNAME +'&TOKEN='+$localStorage.TOKEN +'&REQ_TYPE=01').success(
		　　function(data){
				if(data.result){
					$state.go("feedback", {}, { reload: true });
				}else{
					$localStorage.reset();
					alert(data.resp_msg)
				}
		　　}
		);
	}
});

//我的订单－已完成－去评价
app.controller('writecommitCtrl', function($scope,$http,$localStorage,$state){
	$scope.submitCommit = function(){
		$http.jsonp('http://111.198.143.96:11211/api/user_submit_evaluate.do?&callback=JSON_CALLBACK&&TOKEN='+$localStorage.TOKEN+'&USERNAME='+$localStorage.USERNAME+'&PARAMS=1&EVALUATE_TYPE=1&EVALUATE_CONTENT='+encodeURI($scope.writecommit.textarea)).success(
		　　function(data){
				alert("评价提交成功！");
				$state.go("main", {}, { reload: true });
		　　}
		);

	}
});
