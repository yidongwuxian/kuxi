app.controller('feedbackCtrl', function($scope, DataGetterService,$localStorage,Constants){
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.feedback_url);
});

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
