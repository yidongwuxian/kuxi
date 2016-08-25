app.controller('feedbackCtrl', function($scope, DataGetterService,$localStorage,Constants){
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.feedback_url);
});


app.controller('writefeedbackCtrl', function($scope,$http, DataGetterService,$localStorage,Constants) {
	$scope.submitFeedback = function(){
		$http.jsonp(httpx+'/api/commit_feedback.do?&callback=JSON_CALLBACK&&CONTENT='+$scope.feedback.textarea+ '&ACCOUNT_ID='＋'80C0E58E443B46A09CE1CE14B904D490' + '&TOKEN='＋'d0ce6306-f0f9-4740-900f-355f45675d93' + '&REQ_TYPE=01').success(
		　　function(data){
				if(data.result){
				}else{
					$localStorage.reset();
					alert(data.resp_msg)
				}
		　　}
		);
	}
});
