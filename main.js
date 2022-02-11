// document
// 	.getElementById("email-input")
// 	.addEventListener("keyup", function (event) {
// 		if (event.target.value.length > 0) {
// 			document.getElementById("submit-btn").removeAttribute("disabled");
// 		} else {
// 			document
// 				.getElementById("submit-btn")
// 				.setAttribute("disabled", true);
// 		}
// 	});

// document.getElementById("submit-btn").addEventListener("click", function () {
// 	let logIn = document.createElement("a");
// 	logIn.innerText = document.getElementById("submit-btn").innerText;
// 	if (document.getElementById("password-input").value.length <= 0) {
// 		alert("please input password");
// 	} else if (
// 		document.getElementById("email-input").value == "username@mail.com" &&
// 		document.getElementById("password-input").value == "password"
// 	) {
// 		console.log("logged in");
// 		document.getElementById("submit-btn").innerText = "";
// 		document.getElementById("submit-btn").appendChild(logIn);
// 		logIn.setAttribute("href", "logged.html");
// 	} else {
// 		alert("email & password aren't matched");
// 	}
// });

document.getElementById("deposit-btn").addEventListener("click", function () {
	if (
		document.getElementById("email-input").value == "abc@def.com" &&
		document.getElementById("password-input").value == "password"
	) {
		window.location.href = "logged.html";
	}
});
