const container = document.querySelector('.container');

const navbar = document.querySelector('.navbar');
const navLink = navbar.querySelector('.navLink');
const openNavLink = navbar.querySelector('.openNavLink')

let opened = true;

openNavLink.addEventListener('click', function() {
	navLink.classList.toggle('active')
	
	if( opened ) opened = false
	else opened = true
	
	if ( !opened ) {
		navbar.style.background =  "linear-gradient(165deg,rgba(46, 75, 115, 0.6), rgba(49, 85, 135, 0.6))"
		navbar.style.backdropFilter = "backdrop-filter: blur(10px)"
	} else {
		navbar.style.background = "transparent"
		navbar.style.backdropFilter = "backdrop-filter: blur(0px)"
	}
	
})


const contactUs = document.querySelector(".contact-us")
const inputMessage = contactUs.querySelector(".wrapper .input-message")
const sendMessage = contactUs.querySelector(".wrapper .send-message")

window.addEventListener('load', () => {
	navLink.style.top = `${navbar.clientHeight}px`
	inputMessage.innerHTML = ""
})

window.addEventListener('scroll', () => {
	if (Math.floor(window.scrollY) < 2 && opened ) {
		navbar.style.background = "transparent"
		navbar.style.backdropFilter = "backdrop-filter: blur(0px)"
	}else {
		navbar.style.backdropFilter = "backdrop-filter: blur(10px)"
		navbar.style.background =  "linear-gradient(165deg,rgba(46, 75, 115, 0.6), rgba(49, 85, 135, 0.6))"
	}
})