const emailRegex = /^(.+)@(.+)$/;

let emailInput = document.getElementById("email");
let errorMsg = document.getElementById("error-msg");
let submitBtn = document.getElementById("submit-btn");

submitBtn.addEventListener("click", e => {
    if (!emailRegex.test(emailInput.value)) {
        errorMsg.classList.remove("hidden");
        emailInput.classList.add("red-border");
    }
})
