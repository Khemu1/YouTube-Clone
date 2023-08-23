let burger = document.querySelector(".sidebar-icon.icon");
let burger2 = document.querySelector(".sidebar-icon-1");
let side = document.querySelector(".side-1");
let overlay = document.querySelector(".overlay");

burger.addEventListener("click", function () {
	side.classList.toggle("active");
	overlay.classList.toggle("overlay-1");
});

burger2.addEventListener("click", function () {
	side.classList.toggle("active");
	overlay.classList.toggle("overlay-1");
});
overlay.addEventListener("click", function () {
	side.classList.toggle("active");
	overlay.classList.toggle("overlay-1");
});
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

//change sub-button
let subButton = document.querySelector(".sub-button");
let isSubscribed = false; // Initial state

subButton.addEventListener("click", function () {
	if (isSubscribed) {
		subButton.innerHTML = "Subscribe";
		subButton.style.width = "120px";
		subButton.style.backgroundColor = "white";
		subButton.style.color = "black";
	} else {
		subButton.innerHTML = '<svg enable-background="new 0 0 24 24" height="30" viewBox="0 0 24 24" width="30" focusable="false" style="pointer-events: none;"><path d="M21.5 9h-2v-.19c0-1.91-1.11-3.62-2.9-4.48l.87-1.8c2.49 1.19 4.03 3.6 4.03 6.28V9zm-17-.19c0-1.91 1.11-3.62 2.9-4.48l-.87-1.8C4.04 3.72 2.5 6.13 2.5 8.81V9h2v-.19zM12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm8-4.65V19H4v-1.65l2-1.88v-5.15C6 7.4 7.56 5.1 10 4.34v-.38c0-1.42 1.49-2.5 2.99-1.76.65.32 1.01 1.03 1.01 1.76v.39c2.44.75 4 3.06 4 5.98v5.15l2 1.87z" fill="white"></path></svg><div>subscribed</div>';
		subButton.style.width = "170px";
		subButton.style.backgroundColor = "rgba(255, 255, 255, 0.251)";
		subButton.style.color = "white";
	}
	// Toggle the state flag
	isSubscribed = !isSubscribed;
});

// show below comment
let comment = document.querySelector("textarea");
let belowText = document.querySelector(".emo-buttons");
let hidebelowText = document.querySelector(".cancel");
comment.addEventListener("click", function () {
	belowText.style.display = "flex";
});
hidebelowText.addEventListener("click", function () {
	belowText.style.display = "none";
	comment.blur();
	comment.value = "";
});
// check comment area
comment.addEventListener("input", function () {
	if (comment.value !== "") {
		button = document.querySelector(".comment");
		button.style.backgroundColor = "rgb(6, 97, 245)";
		button.style.color = "black";
	} else {
		button.style.backgroundColor = "rgba(255, 255, 255, 0.251)";
		button.style.color = "rgba(255, 255, 255, 0.251)";
	}
});
// Set initial values in localStorage
window.localStorage.setItem("like-count", 0);
window.localStorage.setItem("dislike-count", 0);

// Retrieve like and dislike counts from localStorage
let likeCount = parseInt(localStorage.getItem("like-count"));
let dislikeCount = parseInt(localStorage.getItem("dislike-count"));

// Get DOM elements
let like = document.querySelector(".like-count-line");
let disLike = document.querySelector(".dis");
let count = document.querySelector(".count");

let like_click = false;
let dislike_click = false;

// Update like and dislike counts and button colors
like.addEventListener("click", function () {
	if (!like_click && (dislike_click || !dislike_click)) {
		like.style.backgroundColor = "rgba(255, 255, 255, 0.207)";
		likeCount += 1;
		window.localStorage.setItem("like-count", likeCount);
		count.textContent = likeCount;
		disLike.style.backgroundColor = "rgba(255, 255, 255, 0.118)";
		dislikeCount -= 1;
		if (dislikeCount < 0) {
			dislikeCount = 0;
		}
		window.localStorage.setItem("dislike-count", dislikeCount);
		like_click = true;
		dislike_click = false;
	}
});

disLike.addEventListener("click", function () {
	if (!dislike_click && (like_click || !like_click)) {
		like.style.backgroundColor = "rgba(255, 255, 255, 0.118)";
		likeCount -= 1;
		if (likeCount < 0) {
			likeCount = 0;
		}
		window.localStorage.setItem("like-count", likeCount);
		count.textContent = likeCount;

		disLike.style.backgroundColor = "rgba(255, 255, 255, 0.207)";
		dislikeCount += 1;
		window.localStorage.setItem("dislike-count", dislikeCount);

		dislike_click = true;
		like_click = false;
	}
});

//cats
var swiper = new Swiper(".cats", {
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});
// adding custom scroll bar
const scroll = new PerfectScrollbar(`.boxes-cont`);
const scroll1 = new PerfectScrollbar(`.right-side`);
