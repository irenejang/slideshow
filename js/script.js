var $photos = $('.photos');
var $buttons = $('.buttons li');
var play = true;

function nextImg() {
	var imgIndex = $('.active-img').index();
	$('.active-img').fadeOut();
	if (imgIndex < $photos.length - 1) {
		$photos.eq(imgIndex + 1).fadeIn().addClass('active-img').siblings().removeClass('active-img');
	} else {
		$photos.eq(0).fadeIn().addClass('active-img').siblings().removeClass('active-img');
	}
	var activeIndex = $('.active-img').index();
	$buttons.eq(activeIndex).addClass('active-button').siblings().removeClass('active-button');
}

function stopAutoplay() {
	clearInterval(autoplay);
}

var autoplay = setInterval(function() {
		nextImg();
	}, 1750);

$('.img-container li:gt(0)').hide();

$buttons.click(function() {
	$(this).addClass('active-button').siblings().removeClass('active-button');
});

$buttons.click(function() {
	$('.active-img').fadeOut();
	var btnIndex = $(this).index(); 
	$photos.eq(btnIndex).fadeIn().addClass('active-img').siblings().removeClass('active-img');
});

$('.prev').click(function() {
	var imgIndex = $('.active-img').index();
	$('.active-img').fadeOut();
	if (imgIndex > 0) {
		$photos.eq(imgIndex - 1).fadeIn();
		$photos.eq(imgIndex - 1).addClass('active-img').siblings().removeClass('active-img');
	} else {
		$photos.eq($photos.length - 1).fadeIn().addClass('active-img').siblings().removeClass('active-img');
	}
	var activeIndex = $('.active-img').index();
	$buttons.eq(activeIndex).addClass('active-button').siblings().removeClass('active-button');
});

$('.next').click(function() {
	nextImg();
});

$('.stop').click(function() {
	if (play) {
		clearInterval(autoplay);
		play = false;
		$('.stop p').text("Start Autoplay");
	}
	else {
		setInterval(function() {
			nextImg();
		}, 1750);
		play = true;
		$('.stop p').text("Stop Autoplay");
	}
});




