//start
	var yearArray = new Array();
  for (var i = 0; i < 10; i ++) {
	var monthArray = new Array();
	for (var j = 0; j < 12; j ++) {
	  //月的最后一天
	  var year = i + 2016;
	  var month = j;
	  var lastDay = new Date(year, month + 1, 0).getDate();
	  if(year == 2016 && month == 1) {
		//console.log("lastday" + lastDay);
	  }
	  	  var dayArray = new Array();
		  for(var k = 0; k < lastDay; k ++) {
		  	 //hours start
		      var hoursec = new Array();
		      for (var m = 0; m < 24; m ++) {
		        var hsChildrenArray = new Array();
		        for (var n = 0; n < 60; n ++) {

		          var childrenObject = new Object();
		          var secTrue = n ;
		          if(n < 10) {
		            var secTrue = n ;
		            childrenObject.value = "0" + secTrue;
		            childrenObject.text = "0" + secTrue;
		          }else {
		            childrenObject.value = secTrue ;
		            childrenObject.text = secTrue;
		          }

		          hsChildrenArray.push(childrenObject);
		        }

		        var object = new Object();
		        if(m < 10) {
		          object.value = "0" + m + ":" ;
		          object.text = "0" + m + ":";
		        }else {
		          object.value = m +":" ;
		          object.text = m + ":";
		        }
		        object.children = hsChildrenArray;
		        hoursec.push(object);
		      };
      		//hours end
			var day = new Object();
			day.children = hoursec;
			day.value = k + 1 + "日";
			day.text = k + 1 + "日";
			dayArray.push(day);
		  }
		  var month = new Object();
		  month.children = dayArray;
		  month.value = j + 1 + "月";
		  month.text = j + 1 + "月";
		  monthArray.push(month);
	}

	var year = new Object();
	year.value = i + 2016 + "年" ;
	year.text = i + 2016 + "年";
	year.children = monthArray;

	yearArray.push(year);
}
	//end
