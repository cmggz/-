$('.brand').hover(function(){
		$('.sub-brand').css('display','block');
	}
,function(){
	$('.sub-brand').css('display','none');
})
$('.man').hover(function(){
		$('.sub-man').css('display','block');
	}
,function(){
	$('.sub-man').css('display','none');
})

$('#skin-btns li').on('click',function(){
	$(this).addClass('selected').siblings().removeClass('selected');
	$('#main-nav').css('background',$(this).attr('skin-color'));
})