var iNow = 0;
$('.ads-tip span').on('mouseover',function(){
	clearInterval(timer);
	$('#ads img').eq($(this).index()).show().siblings().hide();
	$(this).addClass('selected').siblings().removeClass('selected');
	iNow = $(this).index();
})
$('.ads-tip span').on('mouseout',function(){
	run();
})

run();
function run(){
	timer = setInterval(function(){
		iNow++;
		if(iNow == $('#ads img').length){
			iNow = 0;
		}
		$('#ads img').eq(iNow).show().siblings().hide();
		$('.ads-tip span').eq(iNow).addClass('selected').siblings().removeClass('selected');
	},1500)
}

$('.title ul li').on('click',function(){
	$('.show').animate({
		left: -800*$(this).index()
	},1500)
	$(this).addClass('selected').siblings().removeClass('selected');
})

