const firstCheckBoxes = document.querySelectorAll(".first_check");
const secondCheckBoxes = document.querySelectorAll(".second-check");
const personalDataInputs = document.querySelectorAll(".personal-data-input");
const answerInput = document.querySelectorAll(".answer-input");
const submitBtn = document.querySelector(".form-page__submit-button");
const dataErrorMessages = document.querySelectorAll(".error-message");
const emailErrorMessage = document.getElementById("email-error");
const errorFirstCheck = document.querySelector(".error-check");
const errorSecondCheck = document.querySelector(".error-second-check");

function addErrorMessage() {
  dataErrorMessages.forEach((message) => {
    message.innerHTML = "Required";
  });
}

function removeErrorMessage() {
  dataErrorMessages.forEach((message) => {
    message.innerHTML = "";
  });
}

function removeCheck(checkBoxes) {
  checkBoxes.forEach((check) => {
    check.checked = false;
  });
}

function removeError() {
  emailErrorMessage.innerHTML = "";
  personalDataInputs.forEach((dataInput) => {
    dataInput.value = "";
    dataInput.classList.remove("error-input");
    dataInput.classList.add('valid-border')
    setTimeout(function(){
        dataInput.classList.remove('valid-border')
    }, 2000)
  });
}


function personalDataValidate() {
  let isEmailValid = true;
  let isTextDataValid = true;

  personalDataInputs.forEach((dataInput) => {
    const inputType = dataInput.getAttribute("type");
    const dataValue = dataInput.value.trim();

    if (inputType === "email") {
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (dataValue === "") {
        isEmailValid = false;
        emailErrorMessage.innerHTML = "Required";
        dataInput.classList.add("error-input");
        return;
      } else if (!emailPattern.test(dataValue)) {
        isEmailValid = false;
        emailErrorMessage.innerHTML = "Invalid Email";
        dataInput.classList.add("error-input");
        return;
      }
      emailErrorMessage.innerHTML = "";
      dataInput.classList.remove("error-input");
    } else {
      if (dataValue === "") {
        isTextDataValid = false;
        dataInput.classList.add("error-input");
        addErrorMessage();
        return;
      }
    }
  });

  return isEmailValid && isTextDataValid;
}

function isFirstChecked() {
  let isChecked = false;
  for (let i = 0; i < firstCheckBoxes.length; i++) {
    if (firstCheckBoxes[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    errorFirstCheck.innerHTML = "Pick One";
    return false;
  }
  console.log("checked");
  errorFirstCheck.innerHTML = "";
  return true;
}

function isSecondCheck() {
  let isChecked = false;
  for (let i = 0; i < secondCheckBoxes.length; i++) {
    if (secondCheckBoxes[i].checked) {
      isChecked = true;
      break;
    }
  }
  if (!isChecked) {
    errorSecondCheck.innerHTML = "Pick One";
    return false;
  }
  errorSecondCheck.innerHTML = "";
  console.log("good");
  return true;
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  let isPersonalDataValid = personalDataValidate();
  let isFirstCheckedValid = isFirstChecked();
  let isSecondCheckValid = isSecondCheck();

  if (isPersonalDataValid && isFirstCheckedValid && isSecondCheckValid) {
    removeCheck(firstCheckBoxes);
    removeCheck(secondCheckBoxes);
    removeError();
    removeErrorMessage()
    console.log("all ok");
    return;
  } else {
    console.log("i have bad news for u");
  }
});
