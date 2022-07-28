const btnClose = document.querySelector('.nav__btn-close');
const btnOpen = document.querySelector('.header__btn-open');
const navMenuMobile = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.nav__list__link');

// Nav Mobile
const openMenu = () => {
	navMenuMobile.classList.remove('hidden');
	overlay.classList.remove('hidden');
};

const closeMenu = () => {
	navMenuMobile.classList.add('hidden');
	overlay.classList.add('hidden');
};

btnOpen.addEventListener('click', openMenu);
btnClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu);
navLinks.forEach((link) => link.addEventListener('click', closeMenu));

// Slider

var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	loop: true,

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
});

///////////// Calculate Shopping Cart ///////////////
const btnMinus = document.querySelector('.item__btn-minus');
const btnPlus = document.querySelector('.item__btn-plus');
const numberItem = document.querySelector('.item__number');

numberCalc = 0;

// Increase number of item by 1
btnPlus.addEventListener('click', function () {
	numberCalc++;
	numberItem.textContent = numberCalc;
});

// Decrease number of item by 1
btnMinus.addEventListener('click', function () {
	// Guard Clause
	if (numberCalc === 0) return;

	numberCalc--;
	numberItem.textContent = numberCalc;
});
