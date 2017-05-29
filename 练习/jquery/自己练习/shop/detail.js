//选项卡
$('.tab-btns li').on('click',function(){
	$(this).addClass('selected').siblings().removeClass('selected');
	$('.tab-content div').eq($(this).index()).show().siblings().hide();
})

//滑入滑出左边小图加减边框
$('.imgs-list li img').on('mouseover',function(){
	$(this).css('border','1px solid #999');	
})
$('.imgs-list li img').on('mouseout',function(){
	$(this).css('border','1px solid #fff');
	$('.imgs-list li img').eq(0).css('border','1px solid #dfdfdf');
})

//点击左边小图显示大图
$('.imgs-list li img').on('click',function(){
	var imgSrc = $(this).attr('src');
	var arr = imgSrc.split('.',1);
	var img =  arr.join()+'_small.jpg';
	$('.big-display img').attr('src',img);
})

//滑入滑出右边小图加减边框
$('.color li img').on('mouseover',function(){
	$(this).addClass('select');
})
$('.color li img').on('mouseout',function(){
	$(this).removeClass('select');
})

//点击右边小图显示大图
$('.color li img').on('click',function(){
		$(this).addClass('selected').parent().siblings().find('img').removeClass('selected');	
		var imgSrc = $(this).attr('src');
		var arr = imgSrc.split('.',1);
		var img =  arr.join()+'_one_small.jpg'	
		$('.big-display img').attr('src',img);
})


//点击显示相应的尺寸
$('.size li').on('click',function(){
	$(this).css('background','#f60').siblings().css('background','#fff');

})

//点击显示相应的价格
var totalPrice = $('.total-price').html();	
$("#num-select").change(function(){
    var num = $(this).val();
	var amount = num * totalPrice;
	$('.total-price').html( amount );
})
.change();

//放大镜
$('.mask').hover(function(){
	$('.big-pic').show();
	$('.drag').show();
},function(){
	$('.big-pic').hide();
	$('.drag').hide();
}).on('mousemove',function(e){
	var left = e.pageX - $('.drag').width() / 2;
	var top = e.pageY - $('.drag').height() / 2;
	if (left > $('.small-pic').width() - $('.drag').width()+378){
		left = $('.small-pic').width() - $('.drag').width()+378;
	}
	if(left < 378){
		left = 378;
	}
	if (top > $('.small-pic').height() - $('.drag').height()+114){
		top = $('.small-pic').height() - $('.drag').height()+114;
	}
	if(top < 114){
		top = 114;
	}
	$('.drag').offset({
		left:left,
		top:top
	})

	var scaleX = (left-378) / ($('.small-pic').width() - $('.drag').width());
	var scaleY = (top-114) / ($('.small-pic').height() - $('.drag').height());
	console.log(-scaleX * ($('.bigPicImg').width()-$('.big-pic').width()))
	$('.bigPicImg').offset({
		left:scaleX * ($('.bigPicImg').width()-$('.big-pic').width()),
		top:scaleX * ($('.bigPicImg').height()-$('.big-pic').height())
	})	
})