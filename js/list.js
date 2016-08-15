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
});
