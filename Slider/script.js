let currentSlide = 0, theSlides = document.getElementsByClassName('widget_media_image'), customSliderTimer, next, prev, theWrapper = document.getElementById('my-custom-slider-demo');
function customNavToNextSlide() {
	next = ( currentSlide < theSlides.length - 1 ) ? currentSlide + 1 : 0;
	customSetCurrentSlide(next);
}
function customNavToPrevSlide() {
	prev = ( currentSlide > 0 ) ? currentSlide - 1 : theSlides.length - 1;
	customSetCurrentSlide(prev);
}
function customSetCurrentSlide(to) {
	clearInterval(customSliderTimer);
	for (let i = 0; i < theSlides.length; i ++) {
		if ( currentSlide == i ) {
			theSlides[currentSlide].classList.remove('active');
		}
		if ( next == i ) {
			theSlides[to].classList.add('active');
		}
	}
	currentSlide = to;
	customSliderStart();
}
function customSliderStart() {
	customSliderTimer = setInterval(function() {
		customNavToNextSlide();
	}, 5000);
}
function customSliderInit() {
	let height = theSlides[0].getElementsByTagName('img')[0].height;
	theWrapper.style.height = height + 'px';
	for (let i = 0; i < theSlides.length; i ++) {
		theSlides[i].style.height = height + 'px';
	}
}
if (typeof theSlides !== 'undefined') {
	window.addEventListener('resize', customSliderInit);
	customSliderInit();
	if ( theSlides.length > 1 ) {
		customSliderStart();
	}
}

function dragSlider(){
    customSliderStart
}