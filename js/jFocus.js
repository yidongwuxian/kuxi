/**

 * jFocus插件

 * @description  用于文本框获取焦点、移除焦点插件

 * @method       jFocus

 * @author       Kirin

 * @version      1.0

 * @Created      2015/12/27

 * @example

 * $("#id").jFocus();
 *
 */
$.fn.extend({
	jFocus:function(options){
		var self = this;
		var defval = self.val();
		var thisval = $(this).val();
		var optionsDefault = {};
        $.extend(optionsDefault,options);

		//获取焦点
		self.on("focus",function(){
			if( thisval == defval ){
				$(this).val( "" );
			}
		});

		//移除焦点
		self.on("blur",function(){
			 var thisval = $(this).val();
				if( thisval =="" ){
					$(this).val(defval);
				}
		})
	}
});
