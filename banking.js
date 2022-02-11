// document.getElementById("deposit-btn").addEventListener("click", function () {
// 	document.getElementById("deposit-amount").innerText =
// 		parseFloat(document.getElementById("deposit-amount").innerText) +
// 		parseFloat(document.getElementById("deposit-input").value);
// 	document.getElementById("total-amount").innerText =
// 		parseFloat(document.getElementById("total-amount").innerText) +
// 		parseFloat(document.getElementById("deposit-input").value);
// 	document.getElementById("deposit-input").value = "";
// });

// document.getElementById("withdraw-btn").addEventListener("click", function () {
// 	document.getElementById("withdraw-amount").innerText =
// 		parseFloat(document.getElementById("withdraw-amount").innerText) +
// 		parseFloat(document.getElementById("withdraw-input").value);
// 	document.getElementById("total-amount").innerText =
// 		parseFloat(document.getElementById("total-amount").innerText) -
// 		parseFloat(document.getElementById("withdraw-input").value);
// 	document.getElementById("withdraw-input").value = "";
// });

function inputAmountProcess(inputId) {
	let inputAmount = parseFloat(document.getElementById(inputId).value);
	document.getElementById(inputId).value = "";
	return inputAmount;
}

function previousAmountProcess(inputId, newAmount) {
	let previousBalance = parseFloat(
		document.getElementById(inputId).innerText
	);
	document.getElementById(inputId).innerText = previousBalance + newAmount;
}

function getCurrentBalance(inputId) {
	let previousFinalBalance = parseFloat(
		document.getElementById(inputId).innerText
	);
	return previousFinalBalance;
}

function finalBalanceProcess(inputId, newAmount, identifier) {
	if (identifier == true) {
		let previousFinalBalance = parseFloat(
			document.getElementById(inputId).innerText
		);
		document.getElementById(inputId).innerText =
			previousFinalBalance + newAmount;
	}
	if (identifier == false) {
		let previousFinalBalance = parseFloat(
			document.getElementById(inputId).innerText
		);
		document.getElementById(inputId).innerText =
			previousFinalBalance - newAmount;
	}
}

document.getElementById("deposit-btn").addEventListener("click", function () {
	let depositAmount = inputAmountProcess("deposit-input");
	if (depositAmount > 0) {
		previousAmountProcess("deposit-amount", depositAmount);
		finalBalanceProcess("total-amount", depositAmount, true);
	} else {
		alert("You can not deposit negative balance");
	}
});

document.getElementById("withdraw-btn").addEventListener("click", function () {
	let withdrawAmount = inputAmountProcess("withdraw-input");
	let totalAmount = getCurrentBalance("total-amount");
	if (withdrawAmount > 0 && withdrawAmount < totalAmount) {
		previousAmountProcess("withdraw-amount", withdrawAmount);
		finalBalanceProcess("total-amount", withdrawAmount, false);
	}
	if (withdrawAmount < 0) {
		alert("You can not withdraw negative balance");
	}
	if (withdrawAmount > totalAmount) {
		alert("you can not withdraw more balance than your current balance");
	}
});
