app.controller('feedbackCtrl', function($scope, DataGetterService,$localStorage,Constants){
	DataGetterService.getData(function(data){$scope.items= data;}, Constants.feedback_url);
});

app.config(function($httpProvider){
	$httpProvider.defaults.headers.post['Content-Type']='application/x-www-form-urlencoded;charset=utf-8';
});

app.controller('writefeedbackCtrl', function($scope,$http,$localStorage) {
	$scope.submitFeedback = function(){
		//$scope.ajax=function(){
	         $scope.postData='CONTENT='+$scope.feedback.textarea +'&ACCOUNT_ID='+$localStorage.ACCOUNT_ID+'&TOKEN='+$localStorage.TOKEN+'&REQ_TYPE=01';   //注意拼接形式
			 $http({
		         url:'http://111.198.143.96:11211/api/commit_feedback.do?&callback=JSON_CALLBACK&&',
		         method:'post',
		         data: $scope.postData
		     })
	         .success(function(data){
	             $scope.items=data.result;
	         })
	         .error(function(err){
	             console.log(err);
	         })
		 //}
	}
});


// $http.jsonp(httpx+'/api/commit_feedback.do?&callback=JSON_CALLBACK&&CONTENT='++ '&ACCOUNT_ID='＋'80C0E58E443B46A09CE1CE14B904D490' + '&TOKEN='＋'d0ce6306-f0f9-4740-900f-355f45675d93' + '&REQ_TYPE=01').success(
// 　　function(data){
// 		if(data.result){
// 		}else{
// 			$localStorage.reset();
// 			alert(data.resp_msg)
// 		}
// 　　}
// );
