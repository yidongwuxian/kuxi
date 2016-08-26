$(function(){
	//结算数量 start
	if($('#yunBox span').val() > 0){
		$('.reduceBtn').css("display","block");
		$('#yunBox span').css("display","block");
	}

	$('#yunBox dl').each(function(){
		$(this).find('.plusBtn').click(function(){
			$('#yunBox span').val()+1
		});
	});
	//结算数量 end

	//开启modal
	$('#selectService').click(function(){
		$('#bangModal').modal({
		  keyboard: true
	   })
	});
	//选择服务内容和价格
	$('#bangSave').click(function(){
		$('input[name="bangcheckbox"]:checked').each(function(){
			 $('#selectService').html("点击修改");
			 $('.serviceCn').html($(this).prev().text()).show();
			 $('.servicePrice').css('display','inline-block');
			 $('.serviceMinPrice').html($(this).parent().parent().find('.serviceMinPriceVal').text());
			 $('.serviceMaxPrice').html($(this).parent().parent().find('.serviceMaxPriceVal').text());
			 $('#bangModal').modal('hide');
			 $(this).prop("checked", false );
		});
	});

	//限制textarea最多输入50个字 start
	var commitTextArea = $('#commitTextArea');
	commitTextArea.keyup(function(){
		var commitLen = $(this).val().length;
		if(commitLen > 49){
			$(this).val($(this).val().substring(0,50));
		}
	});
	//限制textarea最多输入50个字 end
});
//商品列表API代码 start
// var app = angular.module('myApp', ['ui.router',"ngStorage",'ngService', "ngConts"]);
// app.controller('listCtrl', listCtrl);
// function listCtrl($scope, DataGetterService, Constants) {
// 	DataGetterService.getData(function(data){$scope.list= data;}, Constants.list_url);
// }
//商品列表调用API代码 end
