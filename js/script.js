const popup = document.querySelector(".modal-message");
const writeUsButton = document.querySelector(".address > .btn");
const close = popup.querySelector(".modal-close");
const form = popup.querySelector("form");
const userName = popup.querySelector("[name=name]");
const email = popup.querySelector("[name=email]");
let messageText = popup.querySelector("textarea")

writeUsButton.addEventListener("click", (evt) => {
	evt.preventDefault();
	popup.classList.add("modal-message-show");	
});

close.addEventListener("click", (evt) => {
	evt.preventDefault();
	popup.classList.remove("modal-message-show");
	popup.classList.remove("modal-error");
});

window.addEventListener("keydown", (evt) => {
	if (evt.keyCode === 27 && popup.classList.contains("modal-message-show")) {
		popup.classList.remove("modal-message-show");
		popup.classList.remove("modal-error");
	}
});

form.addEventListener("submit", (evt) => {
	if (!userName.value || !email.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");		
	}
});