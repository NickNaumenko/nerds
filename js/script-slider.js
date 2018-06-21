let slides = document.querySelectorAll(".slide");
let sliderControls = document.querySelectorAll(".slider-controler");
console.log(sliderControls);

let currentIndex = 0;



function func() {
	let nextIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;

	slides[currentIndex].classList.remove("current-slide");
	sliderControls[currentIndex].classList.remove("current");

	slides[nextIndex].classList.add("current-slide");
	sliderControls[nextIndex].classList.add("current");

	currentIndex = nextIndex;

	timerId = setTimeout(func, 3000);
}

var timerId = setTimeout(func, 3000);

for (let i = 0; i < sliderControls.length; i++) {
	let sliderSelector = i;

	let setCurrentSlide = function (selector) {		

		slides[currentIndex].classList.remove("current-slide");
		slides[sliderSelector].classList.add("current-slide");

		sliderControls[currentIndex].classList.remove("current");
		sliderControls[sliderSelector].classList.add("current");

		currentIndex = i;

	};

	sliderControls[i].addEventListener("click", (evt) => {
		evt.preventDefault();

		setCurrentSlide();

		clearTimeout(timerId);
		timerId = setTimeout(func, 3000);
	});
}
