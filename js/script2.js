$('.img-container img:gt(0)').hide();

$('.buttons li').click(function() {
	$(this).addClass('active-button').siblings().removeClass('active-button');
});

$('.buttons li').click(function() {
	var btnIndex = $(this).index(); // store button index
	$('.photos').eq(btnIndex).addClass('active-img').siblings().removeClass('active-img');
})

// $('photos').index().

$('.buttons li').eq(1).click(function() {
	$('.photos').eq(0).fadeOut().eq(1).fadeIn();
});



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