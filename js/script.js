$(function () {

	$(window).scroll(function () {
		parallax();
	})

	function parallax() {

		var wScroll = $(window).scrollTop();
		$('.bg-prlx__mountains').css('background-position', 'center' + (wScroll * 0.2) + 'px');
		console.log(wScroll);

	}

});