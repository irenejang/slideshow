// this alaso works
// for (var i = 1; i < 5; i++) {
// 	$('.img-container li').eq(i).hide();
// };

// $('img:not(.active-img').hide();

$('.img-container img:gt(0)').hide();

// function autoplay() {
// 	setInterval(function() {
// 		$('.img-container ul li:first-child').fadeOut().next('li img').show();
// 	}, 3000);
// }

// autoplay();

$('.buttons li').click(function() {
	$(this).addClass('active-button').siblings().removeClass('active-button');
});



// makeActiveImg function:
	// change class to active-img
	// 
	// remove class active-img from siblings

// bind makeActiveImg to button selector
	// run makeActiveImg

// $('.buttons li').eq(i).click(function(i) {
// 	$('li > img').eq(i).addClass('active-img').siblings().removeClass('active-img');
// 	$('.active-img').show();
// 	$('img:not(.active-img)').hide();
	// $('.img'
	// $('.active-img').show();
// });

// $('.img-container li').click(function() {
// 	$(this).addClass('active-img').siblings().removeClass('active-img');
// 	$('active-img').show();
// })


// html elements:
	// 5 images
	// prev button
	// next button
	// five circles

// css elements:
	// position elements on top of each other
	// center it
	// prev button: float left
	// next button: float right
	// five circles: center

// set active class to first picture and first circle
	// active button: blue background color
	// active picture: show it 

// javascript elements:
	// on load: img2-5 should be hidden
	// on circle click: 
	// click previous: 
		// if img2-5

