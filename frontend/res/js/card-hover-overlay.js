let productGrid = document.querySelector(".products-grid");

Object.values(productGrid.children).forEach((card) => {
	let overlay = card.children[1];

	card.addEventListener("mouseover", () => {
		overlay.style.opacity = "1";
		overlay.style.visibility = "visible";
	});

	card.addEventListener("mouseout", () => {
		overlay.style.opacity = "0";
		overlay.style.visibility = "hidden";
	});
});
