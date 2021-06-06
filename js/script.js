$(function () {

	$(window).scroll(function () {
		parallax();
	})

	function parallax() {
		var wScroll = $(window).scrollTop();
		$('.bg-prlx__mountains').css('background-position-y', (wScroll * -0.1 + 'px'));
	}

	///////////////////  Vanilla JS  ////////////////////////

	let copyright = document.querySelector('.footleftbx__copyright');
	let footerbody = document.querySelector('.footer__body');

	let media = window.matchMedia('(max-width: 992px)');

	function mediaChange() {
		if (media.matches) {
			console.log('<992px')
		} else {
			console.log('>992px')
		}
	}
	mediaChange()
	media.addListener(mediaChange)



	copyright.append(footerbody)

});