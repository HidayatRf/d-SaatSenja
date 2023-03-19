const container = document.querySelector('.container');

const navbar = document.querySelector('.navbar');
const navLink = navbar.querySelector('.navLink');
const openNavLink = navbar.querySelector('.openNavLink')

openNavLink.addEventListener('click', function() {
	navLink.classList.toggle('active')
})


const contactUs = document.querySelector(".contact-us")
const inputMessage = contactUs.querySelector(".wrapper .input-message")
const sendMessage = contactUs.querySelector(".wrapper .send-message")

window.addEventListener('load', () => {
	container.style.paddingTop = `${navbar.clientHeight}px`
	navLink.style.top = `${navbar.clientHeight}px`
	inputMessage.innerHTML = ""
})