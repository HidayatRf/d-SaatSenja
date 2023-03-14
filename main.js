const container = document.querySelector('.container');

const navbar = document.querySelector('.navbar');
const navLink = navbar.querySelector('.navLink');
const openNavLink = navbar.querySelector('.openNavLink')

openNavLink.addEventListener('click', () => {
	navLink.classList.toggle('active')
})


window.addEventListener('load', () => {
	container.style.paddingTop = `${navbar.clientHeight}px`
	navLink.style.top = `${navbar.clientHeight}px`
})
