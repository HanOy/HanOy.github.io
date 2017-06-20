$(function(){
	$('.start').on('click', function(){
		var index = getRandom(0, 14);
		var $td = $('table').find('td').eq(index);
		$('.alert div').text($td.text());
		$('.alert div').css('color', $td.css("color"));
		$('.alert').show();
		var count = 10;
		var remain = setInterval(function() {
            if (count > 1) {
                count--;
                var index = getRandom(0, 14);
				var $td = $('table').find('td').eq(index);
				$('.alert div').text($td.text());
				$('.alert div').css('color', $td.css("color"));
            } else {
                clearInterval(remain);
            }
        }, 1500)
	})

	$('.alert').on('click', function(){
		$('.alert').hide();
	})

	var getRandom = function(min, max){
		parseInt(Math.random()*(max-min+1)+min,10);
		return Math.floor(Math.random()*(max-min+1)+min);
	}
})