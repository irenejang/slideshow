var btnIndex;
var activeIndex;

function fadeOut() {
	$('.active-img').fadeOut();
}


$('.img-container li:gt(0)').hide();

$('.buttons li').click(function() {
	$(this).addClass('active-button').siblings().removeClass('active-button');
});

$('.buttons li').click(function() {
	fadeOut();
	var btnIndex = $(this).index(); 
	$('.photos').eq(btnIndex).fadeIn();
	$('.photos').eq(btnIndex).addClass('active-img').siblings().removeClass('active-img');
});

$('.prev').click(function() {
	var imgIndex = $('.active-img').index();
	fadeOut();
	if (imgIndex > 0) {
		$('.photos').eq(imgIndex - 1).fadeIn();
		$('.photos').eq(imgIndex - 1).addClass('active-img').siblings().removeClass('active-img');
	} else {
		$('.photos').eq($('.photos').length - 1).fadeIn();
		$('.photos').eq($('.photos').length - 1).addClass('active-img').siblings().removeClass('active-img');
	}
	var activeIndex = $('.active-img').index();
	$('buttons li').eq(activeIndex).addClass('active-button').siblings().removeClass('active-button');
});

$('.next').click(function() {
	var imgIndex = $('.active-img').index();
	fadeOut();
	if (imgIndex < 4) {
		$('.photos').eq(imgIndex + 1).fadeIn();
		$('.photos').eq(imgIndex + 1).addClass('active-img').siblings().removeClass('active-img');
	} else {
		$('.photos').eq(0).fadeIn();
		$('.photos').eq(0).addClass('active-img').siblings().removeClass('active-img');
	}
	var activeIndex = $('.active-img').index();
	$('buttons li').eq(activeIndex).addClass('active-button').siblings().removeClass('active-button');
});





// $('.buttons li').eq(1).click(function() {
// 	$('.photos').eq(0).fadeOut();
// 	$('.photos').eq(1).fadeIn();
// });



// $('.buttons li').eq(i).click(function(i) {
// 	$('li > img').eq(i).addClass('active-img').siblings().removeClass('active-img');
// 	$('.active-img').show();
// 	$('img:not(.active-img)').hide();
	// $('.img'
	// $('.active-img').show();


// makeActiveImg function:
	// change class to active-img
	// 
	// remove class active-img from siblings

// bind makeActiveImg to button selector
	// run makeActiveImg