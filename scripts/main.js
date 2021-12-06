/* Fade script */


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


/* Toggle script */


const toggle = (button, article) => {

	let array = [1, 2, 3, 4];

	let x = document.getElementById(button);
	let y = document.getElementById(article);

	for (i = 0; array.length > 0; i++) {

		if (x.filter(a => typeof a === "number") === array[i]) {
			x.style.backgroundColor = "gray";
			y.style.display = "block";
		} 
		
		else {
			x.style.backgroundColor = "darkgray";
			y.style.display = "none";
		}

	}

}

const toggleHandler = () => {
	toggle(button, article);
}

document.getElementsByClassName('nav-btn').addEventListener('click', toggleHandler);