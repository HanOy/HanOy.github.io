function numRand() {
    var x = 124; //上限
    var y = 1; //下限
    var rand = parseInt(Math.random() * (x - y + 1) + y);
    //中奖信息本地存储
    if(localStorage.getItem('lotteryNumber')){
        var numList = localStorage.getItem('lotteryNumber').split(',');
        if ($.inArray(rand, numList) != -1) {
            numRand();
        }
    }
    return rand;
}

function PrefixInteger(num, length) {  
    return (Array(length).join('0') + num).slice(-length);  
}

var isBegin = false;
$(function(){
    //中奖信息本地存储
    if(localStorage.getItem('lotteryNumber')){
        var numList = localStorage.getItem('lotteryNumber').split(',');
        $('#num_show').append(numList.join(','))
    }

    var u = 265;
    $('.btn').click(function(){
        if(isBegin) return false;
        isBegin = true;
        $(".num").css('background-position', '11px 0');
        var randomNum = numRand();
        saveLocalStorage(randomNum);
        var result = PrefixInteger(randomNum, 4);
        var num_arr = (result+'').split('');
        $(".num").each(function(index){
            var _num = $(this);
            var yPos = (u*60) - (u*num_arr[index]);
            setTimeout(function(){
                _num.animate({ 
                    backgroundPosition: '11px ' + yPos + 'px'
                },{
                    duration: 6000+index*3000,
                    easing: "easeInOutCirc",
                    complete: function(){
                        if(index==3) isBegin = false;
                    }
                });
            }, index * 300);
        });
        setTimeout(function(){
            $('#num_show').append(','+randomNum);
        }, 15000)
    }); 

    $('.result a').click(function(){
        localStorage.clear();
    })
});

function saveLocalStorage(num){
    var numStr = localStorage.getItem('lotteryNumber');
    if (numStr) {
        var numList = numStr.split(',');
        numList.push(num);
    }else {
        var numList = {};
        numList[0] = num;
    }
    if (numList.length > 1) {
        localStorage.lotteryNumber = numList.join(",");
    }else{
        localStorage.lotteryNumber = num;
    }
}