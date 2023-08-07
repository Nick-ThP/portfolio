/* To top on refresh */

window.scrollTo(0, 0);

/* To top (mobile) */

const toTop = () => {
	if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		window.scroll(0, 0);
	} else {
		null;
	}
};

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

	/* Force hide */

	if (opacity < 0.001) {
		element.style.visibility = 'hidden';
	} else {
		element.style.visibility = 'visible';
	}

};

/* Execution of fade script*/

const scrollHandler = () => {
	fadeOutOnScroll(header);
};

window.addEventListener('scroll', scrollHandler);

/* Toggle script */

const sectionArray = ["section1", "section2", "section3", "section4"];
const buttonArray = ["button1", "button2", "button3", "button4"];

let visibleA = null;
let visibleB = null;

const show = (a, b) => {

	if (visibleA !== a) {
		visibleA = a;
	}
	hide();

	if (visibleB !== b) {
		visibleB = b;
	}
	hide();

	toTop();
};

const hide = () => {
	for (let i = 0; i < sectionArray.length; i++) {

		let a = sectionArray[i];
		let b = buttonArray[i];
		let section = document.getElementById(a);
		let button = document.getElementById(b);

		if (visibleA === a && visibleB === b) {
			section.style.display = "block";
			button.style.backgroundColor = "var(--interface-dark-gray";
			button.style.pointerEvents = 'none';
		} else {
			section.style.display = "none";
			button.style.backgroundColor = "var(--interface-light-gray";
			button.style.pointerEvents = 'auto';
		}
	}

	toTop();
};

/* Execution of toggle script */

const toggleHandler = () => {
	show('section1', 'button1');
};

window.addEventListener("DOMContentLoaded", toggleHandler);

/* Project overlays */

const on = (a, b) => {
	document.getElementById(a).style.display = "grid";
	document.getElementById(b).style.display = "none";

	toTop();
};

const off = (a, b) => {
	document.getElementById(a).style.display = "none";
	document.getElementById(b).style.display = "grid";

	toTop();
};

const allOff = () => {
	document.getElementById('overlay1').style.display = "none";
	document.getElementById('overlay2').style.display = "none";
	document.getElementById('overlay3').style.display = "none";
	document.getElementById('overlay4').style.display = "none";
	document.getElementById('article3').style.display = "grid";

	toTop();
};

document.getElementById('button3').addEventListener('click', allOff);

/* Burger icon menu for small screens */

const toggleBurger = () => {
	let a = document.getElementById('hiddenLinks');
	if (a.style.display === "block") {
		a.style.display = "none";
	} else {
		a.style.display = "block";
	}
};

const closeAfter = () => {
	let a = document.getElementById('hiddenLinks');
	a.style.display = "none";
};

/* Fade-in on main content */

let initialSpin = false;

window.onscroll = () => {
	if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 350) {
		document.getElementById('main-content').classList.add('fade-in');
		if (!initialSpin && !/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			introPic.classList.add("spin-class");
			initialSpin = true;
		}
	}
};

/* Change color */

const getRandomNumber = () => {
	const number = Math.floor(Math.random() * 360);
	if (number >= 210 && number <= 290) {
		return getRandomNumber()
	} else {
		return number;
	}
};

document.getElementById('change-color').addEventListener('click', () => {
	document.documentElement.style.setProperty
		('--interface-accent-color', `hsl(${getRandomNumber()}, 100%, 50%)`)
});

/* Spin */

const introPic = document.getElementById('intro-picture')

introPic.addEventListener("click", function (e) {
	e.preventDefault;
	introPic.classList.remove("spin-class");
	void introPic.offsetWidth;
	introPic.classList.add("spin-class");
}, false);

const forceToNotSpin = () => {
	introPic.classList.remove("spin-class");
};

/* Project text fade on image hover */

const opacityIn = (number) => {
	if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		return
	}

	document.getElementsByClassName('overlay-text')[number].style.opacity = .2;
}

const opacityOut = (number) => {
	if (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
		return
	}

	document.getElementsByClassName('overlay-text')[number].style.opacity = 1;
}

/* Make interface disappear for a brief moment */

const makeInterfaceDisappear = () => {
	document.getElementById('wrapper').style.opacity = 0;

	setTimeout(() => {
		document.getElementById('wrapper').style.opacity = 1;
	}, 300);
}