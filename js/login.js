	$(function(){
		$.getJSON('http://111.198.143.96:11211/api/sendcode.do?USERNAME=13552081763&callback=JSON_CALLBACK', function(data){
				alert(data);
		});
	})

	var sends = {
		checked:1,
		send:function(){
				var numbers = /^1\d{10}$/;
				var val = $('#phone').val().replace(/\s+/g,""); //获取输入手机号码
				if($('.div-ranks').find('span').length == 0 && $('.div-ranks a').attr('class') == 'send1'){
					if(!numbers.test(val) || val.length ==0){
						$('.div-phone').append('<span class="error">手机格式错误</span>');
						return false;
					}
				}
				if(numbers.test(val)){
					var time = 30;
					$('.div-phone span').remove();
					function timeCountDown(){
						if(time==0){
							clearInterval(timer);
							$('.div-ranks a').addClass('send1').removeClass('send0').html("发送验证码");
							sends.checked = 1;
							return true;
						}

						$('.div-ranks a').html(time+"S后再次发送");
						time--;
						return false;
						sends.checked = 0;
					}
					$('.div-ranks a').addClass('send0').removeClass('send1');
					timeCountDown();
					var timer = setInterval(timeCountDown,1000);
				}
		}
	}
