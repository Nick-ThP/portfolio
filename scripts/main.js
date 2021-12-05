/* Script til fade effekt på header */

const header = document.getElementById('header');

const fadeOutOnScroll = element => {
	if (!element) {
		return;
	}
	
	let distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	let elementHeight = element.offsetHeight;
	let scrollTop = document.documentElement.scrollTop;
	
	let opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}

}

const scrollHandler = () => {
	fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);