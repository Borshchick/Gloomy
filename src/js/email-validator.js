const emailInput = document.querySelector("#email-input");
const submitButton = document.querySelector("#submit-button");
const errorMessege = document.querySelector(".error");

const fetchEmailData = () => {
  const form = document.querySelector(".newsletter__email-wrapper");
  const inputs = form.querySelectorAll("input");
  const values = {};
  inputs.forEach((input) => {
    if (input.type !== "submit") {
      values[input.name] = input.value;
      console.log(values);
    }
  });

  fetch("./email.php", {
    method: "POST",
    body: values,
  });
};

const validateEmail = (email) => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
};
submitButton.addEventListener("click", function (event) {
  const emailValue = emailInput.value;
  event.preventDefault();
  if (emailValue !== "") {
    if (!validateEmail(emailValue) && emailValue !== "") {
      errorMessege.innerHTML = "Invalid Email";
      emailInput.classList.add("error-border");
    } else {
      fetchEmailData();
      emailInput.classList.remove("error-border");
      errorMessege.innerHTML = "";
      emailInput.value = "";
      emailInput.classList.add("valid-border");
      setTimeout(function () {
        emailInput.classList.remove("valid-border");
      }, 2000);
      console.log("send");
    }
    return;
  }
  emailInput.classList.add("error-border");
  errorMessege.innerHTML = "required";
});

const newsTittle = document.querySelector(".newsletter__tittle");
const newsText = document.querySelector(".newsletter__text");
const currentPage = window.location.href;
if (currentPage.includes("contact-us-page.html")) {
  newsTittle.style.color = "white";
  newsText.style.color = "white";
  emailInput.style.color = "white";
}
