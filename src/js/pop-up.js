const popupTriggerButtons = document.querySelectorAll("[data-popup-trigger]");
const popup = document.querySelector(".pop-up__wrapper");
const popUpWrapper = document.querySelector(".pop-up");
const popupCloseButton = document.querySelector(".pop-up__close");
const html = document.querySelector("html");

function openPopUp() {
  popup.style.display = "flex";
  html.classList.add("overflow-hidden");
}

function closePopUp() {
  popup.style.display = "none";
  html.classList.remove("overflow-hidden");
}

const popupTriggerButtonsArray = Array.from(popupTriggerButtons);

popupTriggerButtonsArray.forEach((button) => {
  button.addEventListener("click", function () {
    openPopUp();
  });
});

document.addEventListener("click", function (event) {
  if (
    !popUpWrapper.contains(event.target) &&
    !popupTriggerButtonsArray.includes(event.target)
  ) {
    closePopUp();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopUp();
  }
});

popupCloseButton.addEventListener("click", () => {
  closePopUp();
});

const inputs = document.querySelectorAll(".pop-up__input");
const popupSubmitButton = document.querySelector('input[type="submit"]');
const tel = document.querySelector('input[type="tel"]');
const popUpErrors = document.querySelectorAll(".pop-up-error-message");
const popUpEmailError = document.getElementById("emailError");
const popUpTelError = document.getElementById("phoneError");
const popUpNameError = document.getElementById("nameError");

function popUpFormData() {
  let formData = new FormData();

  inputs.forEach((input) => {
    if (input.type !== "submit") {
      formData.append(input.name, input.value);
    }
  });

  fetch("/components/sendmail/contact.php", {
    method: "POST",
    body: formData,
  });
}

function clearAllInputs() {
  inputs.forEach((input) => {
    input.value = "";
  });
}

function popupEmailValidate() {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  let isEmailValid = true;
  inputs.forEach((input) => {
    if (input.type === "email") {
      const inputValue = input.value.trim();
      if (inputValue === "") {
        popUpEmailError.innerHTML = "Required";
        isEmailValid = false;
        input.classList.add("pop-up-error-input");
        return;
      } else if (!emailPattern.test(inputValue)) {
        popUpEmailError.innerHTML = "Invalid Email";
        isEmailValid = false;
        input.classList.add("pop-up-error-input");
        return;
      }
      popUpEmailError.innerHTML = "";
      input.classList.remove("pop-up-error-input");
    }
  });
  return isEmailValid;
}

tel.addEventListener("input", (e) => {
  tel.value = tel.value.replace(/[^\d.]/g, "");
});

// function popupPhoneValidate() {
//   const phonePattern =
//     /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
//   let isPhoneValid = true;
//   inputs.forEach((input) => {
//     if (input.type === "tel") {
//       const inputValue = input.value.trim();
//       if (inputValue === "") {
//         popUpTelError.innerHTML = 'Required'
//         isPhoneValid = false;
//         input.classList.add('pop-up-error-input')
//         return;
//       } else if (!phonePattern.test(inputValue)) {
//         popUpTelError.innerHTML = 'Invalid Number'
//         isPhoneValid = false;
//         input.classList.add('pop-up-error-input')
//         return;
//       }
//       popUpTelError.innerHTML = ''
//       isPhoneValid = true;
//       input.classList.remove('pop-up-error-input')
//     }
//   });
//   return isPhoneValid;
// }

function popupNameValidate() {
  let isTextValid = true;
  inputs.forEach((input) => {
    if (input.name === "name") {
      const inputValue = input.value.trim();
      if (inputValue === "") {
        isTextValid = false;
        popUpNameError.innerHTML = "Required";
        input.classList.add("pop-up-error-input");
        return;
      }
      isTextValid = true;
      popUpNameError.innerHTML = "";
      input.classList.remove("pop-up-error-input");
    }
  });
  return isTextValid;
}

popupSubmitButton.addEventListener("click", function (e) {
  e.preventDefault();
  let isPopupEmailValid = popupEmailValidate();
  //   let isPopupPhoneValid = popupPhoneValidate();
  let isPopupNameValid = popupNameValidate();

  if (isPopupEmailValid && isPopupNameValid) {
    popUpFormData();
    console.log("all ok");
    closePopUp();
    clearAllInputs();
  }
});
