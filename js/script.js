let popup = document.querySelector(".modal-message");
let writeUsButton = document.querySelector(".address > .btn");
let close = popup.querySelector(".modal-close");
let form = popup.querySelector("form");
let userName = popup.querySelector("[name=name]");
let email = popup.querySelector("[name=email]");
let storage = {
	name: localStorage.getItem("name"),
	email: localStorage.getItem("email")
}
let messageText = popup.querySelector("textarea")
console.log(storage.name);

writeUsButton.addEventListener("click", (evt) => {
	evt.preventDefault();
	popup.classList.add("modal-message-show");

	if (storage.name) {
		userName.value = storage.name;
		email.value = storage.email;
		messageText.focus();
		} else {
	userName.focus();
	}
	
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

	localStorage.setItem("name", userName.value);
	localStorage.setItem("email", email.value);
});



console.log(close);