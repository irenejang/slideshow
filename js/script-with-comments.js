var $photos = $('.photos');
var $buttons = $('.buttons li');
var play = true;

var autoplay = setInterval(function() {
		nextImg();
	}, 1750);

function stopAutoplay() {
	clearInterval(autoplay);
}

// When clicking next button:
	// Hide current active image
	// If selecting 1st-4th image:
		// Show image with index one more than current active image
		// Give image active class & remove active class from siblings
	// If selecting 5th image:
		// Show image with 0 index
		// Give image active class & remove active class from siblings
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

// Hide all img except first one
$('.img-container li:gt(0)').hide();

// When clicking button:
	// Give clicked button active class & remove active class from siblings
	// Hide current active image
	// Show image with same index as clicked button
	// Give image active class & remove active class from siblings
$buttons.click(function() {
	$(this).addClass('active-button').siblings().removeClass('active-button');
	$('.active-img').fadeOut();
	var btnIndex = $(this).index(); 
	$photos.eq(btnIndex).fadeIn().addClass('active-img').siblings().removeClass('active-img');
});

// When clicking previous:
	// Hide current active image
	// If selecting 2nd-5th image:
		// Show image with index one less than current active image
		// Give image active class & remove active class from siblings
	// If selecting 1st img:
		// Show last image 
		// Give image active class & remove active class from siblings
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

// When clicking autoplay: 
	// If turning off:
		// Clear autoplay
		// Change text to "Start Autoplay"
	// If turning on:
		// Start autoplay
		// Change text to "Stop Autoplay"
$('.stop').click(function() {
	if (play) {
		clearInterval(autoplay);
		play = false;
		$('.stop p').text("Start Autoplay");
	}
	else {
		autoplay = setInterval(function() {
			nextImg();
		}, 1750);
		play = true;
		$('.stop p').text("Stop Autoplay");
	}
});




