$(function () {

	$(window).scroll(function () {
		parallax();
	})

	function parallax() {
		var wScroll = $(window).scrollTop();
		$('.bg-prlx__mountains').css('background-position-y', (wScroll * -0.1 + 'px'));
	}

});