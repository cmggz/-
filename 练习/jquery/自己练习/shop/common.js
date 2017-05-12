$('.brand').on('mouseover',function(){
	$('.sub-brand').css('display','block');
});
$('.man').on('mouseover',function(){
	$('.sub-man').css('display','block');
});
$('.brand').on('mouseout',function(){
	$('.sub-brand').css('display','none');
});
$('.man').on('mouseout',function(){
	$('.sub-man').css('display','none');
});

$('#skin-btns li').on('click',function(){
	$(this).addClass('selected').siblings().removeClass('selected');
	$('#main-nav').css('background',$(this).attr('skin-color'));
})