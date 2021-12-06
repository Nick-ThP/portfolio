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



const sectionArray = ["section1", "section2", "section3", "section4"];

let visibleId = null;

const show = (id) => {

    if(visibleId !== id) {
    	visibleId = id;
    } 

    hide();

}

const hide = () => {

    let div, i, id;

    for(i = 0; i < sectionArray.length; i++) {

        id = sectionArray[i];
        div = document.getElementById(id);

        if(visibleId === id) {
        	div.style.display = "block";
        } else {
            div.style.display = "none";
        }
    }
}  