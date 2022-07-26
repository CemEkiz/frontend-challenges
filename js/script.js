const btnClose = document.querySelector('.nav__btn-close');
const btnOpen = document.querySelector('.header__btn-open');
const navMenuMobile = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');
const navLinks = document.querySelectorAll('.nav__list__link');

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
