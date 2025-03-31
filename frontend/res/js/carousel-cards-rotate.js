let carousels = document.querySelector(".spices-carousel");

Object.values(carousels.children).map((slide, index) => {
	document.addEventListener("scroll", () => {
		// slide.style.transform = `rotate(${index % 2 === 0 ? "-" : ""}${window.scrollY / 5}deg)`;
		// slide.style.transform = `translateX(-${window.scrollY / 2}px)`;
		slide.style.transform = `translateX(-${window.scrollY / 2}px) rotate(${index % 2 === 0 ? "-" : ""}${window.scrollY / 5}deg)`;
	});
});

// OLD CODE

// let carousels = document.querySelector(".carousel-track");

// Object.values(carousels.children).map((slide, index) => {
// 	document.addEventListener("scroll", () => {
// 		slide.children[0].style.transform = `rotate(${index % 2 === 0 ? "-" : ""}${window.scrollY / 5}deg)`;
// 	});
// });
