/*================= MENU SHOW Y HIDDEN =================*/
const navMenu = document.getElementById('nav-menu'),
		navToggle = document.getElementById('nav-toggle'),
		navClose = document.getElementById('nav-close')
		
/*========== MENU SHOW ==========*/
/* Validate if constant exists */
if(navToggle){
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}

/*========== MENU HIDDEN ==========*/
/* Validate if constant exists */
if(navClose){
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
	const navMenu = document.getElementById('nav-menu')
	// When we click on each nav__link, we remove the show-menu class
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
		skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
	let itemClass = this.parentNode.className

	for(i = 0; i < skillsContent.length; i++){
		skillsContent[i].className = 'skills__content skills__close'
	}
	if(itemClass === 'skills__content skills__close'){
		this.parentNode.className = 'skills__content skills__open'
	}
}

skillsHeader.forEach((el) =>{
	el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
		tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target)

		tabContents.forEach(tabContent =>{
			tabContent.classList.remove('qualification__active')
		})
		target.classList.add('qualification__active')

		tabs.forEach(tab =>{
			tab.classList.remove('qualification__active')
		})
		tab.classList.add('qualification__active')
	})
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
		modalBtns = document.querySelectorAll('.services__button'),
		modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
	modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i)
	})
})

modalCloses.forEach((modalClose) => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach((modalView) =>{
			modalView.classList.remove('active-modal')
		})
	})
})

/*==================== MIXTUP FILTER PORTFOLIO ====================*/
let mixerPortfolio = mixitup('.portfolio__container', {
	selectors: {
		target: '.portfolio__card'
	},
	animation: {
		duration: 300
	}
});

/*============== Link Active Portfolio ==============*/
const linkPortfolio = document.querySelectorAll('.portfolio__item')

function activePortfolio(){
	linkPortfolio.forEach(l=> l.classList.remove('active-portfolio'))
	this.classList.add('active-portfolio')
}

linkPortfolio.forEach(l=> l.addEventListener("click", activePortfolio))

/*============= Portfolio popup =============*/
document.addEventListener("click", (e) =>{
	if(e.target.classList.contains("portfolio__button")){
		togglePortfolioPopup();
		portfolioItemDetails(e.target.parentElement);
	}
})

function togglePortfolioPopup(){
	document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem){
	document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".portfolio__img").src;
	document.querySelector(".portfolio__popup-subtitle span").innerHTML = portfolioItem.querySelector(".portfolio__title").innerHTML;
	document.querySelector(".portfolio__popup-body").innerHTML = portfolioItem.querySelector(".portfolio__item-details").innerHTML;
}

/*==================== TESTIMONIAL ====================*/
let swiper = new Swiper(".testimonial__container", {
	loop: true,
	grabCursor: true,
	spaceBetween: 24,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
		dynamicBullets: true,
	},
	breakpoints:{
		576:{
			slidesPerView: 2,
		},
		768:{
			slidesPerView: 2,
			spaceBetween: 48,
		},
	},
});

/*==================== INPUT ANIMATION ====================*/
const inputs = document.querySelectorAll(".input");

function focusFunc(){
	let parent = this.parentNode;
	parent.classList.add("focus");
}

function blurFunc(){
	let parent = this.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}

inputs.forEach((input) =>{
	input.addEventListener("focus", focusFunc);
	input.addEventListener("blur", blurFunc);
})

/*==================== SCROLL SECTION ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', navHighlighter);

function navHighlighter()
{
	let scrollY = window.pageYOffset;
	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50,
		sectionId = current.getAttribute('id');

		if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
		}else{
			document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
		}
	})
}

/*==================== CHANGE BACKGROUND HEADER ====================*/
window.addEventListener('scroll', scrollHeader)

function scrollHeader(){
	const nav = document.getElementById('header')
	// When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
	if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}

/*======================== SHOW SCROLL UP ========================*/
window.addEventListener('scroll', scrollUp)

function scrollUp(){
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll
	if(this.scrollY > 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

/*======================== DARK LIGHT THEME========================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
	// If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
	themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
	// Add or remove the dark / icon theme
	document.body.classList.toggle(darkTheme)
	themeButton.classList.toggle(iconTheme)
	// We save the theme and the current icon that the user chose
	localStorage.setItem('selected-theme', getCurrentTheme())
	localStorage.setItem('selected-icon', getCurrentIcon())
})