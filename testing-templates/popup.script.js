// script.js
const popup = document.getElementById("myPopup");
let lastScrollTop = 250;

window.addEventListener("scroll", () => {
	const currentScrollTop = window.scrollY;

	if (currentScrollTop > lastScrollTop) {
		// Scrolling down
		popup.style.display = "block";
	} else {
		// Scrolling up
		popup.style.display = "none";
	}

	lastScrollTop = currentScrollTop;
});
