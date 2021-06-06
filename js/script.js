$(function () {

	$(window).scroll(function () {
		parallax();
	})

	function parallax() {
		var wScroll = $(window).scrollTop();
		$('.bg-prlx__mountains').css('background-position-y', (wScroll * -0.1 + 'px'));
	}

	///////////////////  Vanilla JS  ////////////////////////

	const copyright = document.querySelector('.footleftbx__copyright');
	const footerbody = document.querySelector('.footer__body');

	if (window.matchMedia('(max-width: 992px)').matches) {
		copyright.append(footerbody)
	};

});