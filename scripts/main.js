/* Script til fade effekt på header */

const header = document.getElementById('header');

function fadeOutOnScroll(element) {
	if (!element) {
		return;
	}
	
	const distanceToTop = window.pageYOffset + element.getBoundingClientRect().top;
	const elementHeight = element.offsetHeight;
	const scrollTop = document.documentElement.scrollTop;
	
	let opacity = 1;
	
	if (scrollTop > distanceToTop) {
		opacity = 1 - (scrollTop - distanceToTop) / elementHeight;
	}
	
	if (opacity >= 0) {
		element.style.opacity = opacity;
	}
}

function scrollHandler() {
	fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);