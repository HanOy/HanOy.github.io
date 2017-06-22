$(function(){
	$('.start').on('click', function(){
		$('.alert').show();
		var time = $('input[name="time"]').val();
		var second = $('input[name="second"]').val();
		if (!time || !second) {
			alert("输入数字");
			return;
		}
		var count = parseInt(time/second);
		var preIndex = 666;
		var remain = setInterval(function() {
            if (count >= 0) {
                count--;
                var index = getRandom(0, 14);
                while (index == preIndex) {
                	index = getRandom(0, 14); 
                }
                preIndex = index;
				var $td = $('table').find('td').eq(index);
				$('.alert div').text($td.text());
				$('.alert div').css('color', $td.css("color"));
            } else {
                clearInterval(remain);
        		$('.alert div').text("完");
            }
        }, second*1000)
	})

	$('.alert').on('click', function(){
		$('.alert').hide();
	})

	var getRandom = function(min, max){
		parseInt(Math.random()*(max-min+1)+min,10);
		return Math.floor(Math.random()*(max-min+1)+min);
	}
})