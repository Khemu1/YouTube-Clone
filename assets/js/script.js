let burger = document.querySelector(".sidebar-icon.icon");
let side = document.querySelector(".side-1");
let side2 = document.querySelector(".side-2");

burger.addEventListener("click", function () {
	if (side.style.display === "none" && side2.style.display === "block") {
		side.style.display = "block";
		side2.style.display = "none";
	} else {
		side.style.display = "none";
		side2.style.display = "block";
	}
});

// swiper section
const swiper = new Swiper(".cats", {
	loop: true,
	// slidesPerView: 1, // Show 7 slides at a time
	// slidesPerGroup: 7,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
const scroll = new PerfectScrollbar(`.side-1`);
const scroll1 = new PerfectScrollbar(`.vids`);

// show more buttons
let show = document.querySelector(".showMore");
let hiddenElements = document.querySelectorAll(".hidden");
let showSpan = show.querySelector(".will-change");

show.addEventListener("click", function () {
	hiddenElements.forEach((element) => {
		element.classList.toggle("hidden");
	});

	if (showSpan.textContent === "Show More") {
		showSpan.textContent = "Show Less";
	} else {
		showSpan.textContent = "Show More";
	}
});
// show more buttons for channels
let showC = document.querySelector(".showMore-C");
let hiddenCs = document.querySelectorAll(".hidden-channel");
let showSpanC = document.querySelector(".will-change-C");

// Store the original text content
let originalText = showSpanC.textContent;
console.log(`start ${originalText}`);
let withNums = `Show ${hiddenCs.length} More`; // Store the text with the number of hidden channels
showSpanC.textContent = withNums;

showC.addEventListener("click", function () {
	hiddenCs.forEach((element) => {
		element.classList.toggle("hidden-channel");
	});

	if (originalText === "show more") {
		showSpanC.textContent = "show less";
		originalText = "show less";
		console.log(originalText);
	} else {
		showSpanC.textContent = withNums;
		originalText = "show more";
	}
});
