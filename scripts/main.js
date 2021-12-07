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

/* Execution of fade script*/

const scrollHandler = () => {
	fadeOutOnScroll(header);
}

window.addEventListener('scroll', scrollHandler);

/* Toggle script */

const sectionArray = ["section1", "section2", "section3", "section4"];
const buttonArray = ["button1", "button2", "button3", "button4"]

let visibleA = null;
let visibleB = null;

const show = (a, b) => {

    if(visibleA !== a) {
    	visibleA = a;
    } 
    hide();

	if(visibleB !== b) {
    	visibleB = b;
    } 
	hide();

}

const hide = () => {
    for(let i = 0; i < sectionArray.length; i++) {

        let a = sectionArray[i];
		let b = buttonArray[i];
        let section = document.getElementById(a);
		let button = document.getElementById(b)

        if (visibleA === a && visibleB === b) {
        	section.style.display = "block";
			button.style.backgroundColor = "#161616"
        } else {
            section.style.display = "none";
			button.style.backgroundColor = "#2a2a2a"
        }
		
    }	
}

/* Execution og toggle script */

const toggleHandler = () => {
	show('section1', 'button1');
}

window.addEventListener("DOMContentLoaded", toggleHandler);