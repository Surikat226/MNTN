$(function () {

	$(window).scroll(function () {
		parallax();
	})

	function parallax() {
		var wScroll = $(window).scrollTop();
		$('.bg-prlx__mountains').css('background-position-y', (wScroll * -0.1 + 'px'));
	}

	///////////////////  Vanilla JS + jQuery  ////////////////////////

	let copyright = document.querySelector('.footleftbx__copyright');
	let footerbody = document.querySelector('.footer__body');

	let media = window.matchMedia('(max-width: 992px)');

	function mediaChange() {
		if (media.matches) {
			$(copyright).appendTo(footerbody)
		} else {
			// Нужно задать условие для возврата copyright на прежнее место
		}
	}

	media.addListener(mediaChange); // Вешаю обработчик событий на переменную media внутри функции mediaChange (как я понял), таким образом отслеживая boolean значение переменной media (true или false)

});