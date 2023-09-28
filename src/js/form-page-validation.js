const firstCheckBoxes = document.querySelectorAll(".first_check");
const secondCheckBoxes = document.querySelectorAll(".second-check");
const personalDataInputs = document.querySelectorAll(".personal-data-input");
const answerInput = document.querySelectorAll(".answer-input");
const submitBtn = document.querySelector(".form-page__submit-button");
const dataErrorMessages = document.querySelectorAll(".error-message");
const emailErrorMessage = document.getElementById("email-error");
const errorFirstCheck = document.querySelector(".error-check");
const errorSecondCheck = document.querySelector(".error-second-check");
const nonRequire = document.querySelector(".non-required");
const urlErrorMessage = document.querySelector(".error-url");

const textInputs = [];

const fetchData = () => {
  const inputs = document.querySelectorAll("input");
  const values = {};
  const selectedOptions = [];

  inputs.forEach((input) => {
    if (input.type !== "submit") {
      if (input.type === "checkbox") {
        if (input.checked) {
          const label = document.querySelector(`label[for="${input.id}"]`);
          if (label) {
            selectedOptions.push(label.textContent); 
          }
          return
        } 
      }else{
        values[input.name] = input.value
      }
    }
  });

  selectedOptions.forEach((option) => {
    values[option] = option;
  });

  console.log(values);

  fetch("./posts.php", {
    method: "POST",
    body: values,
  });
};


personalDataInputs.forEach((input) => {
  if (input.type !== "email" && input.name !== "competitors") {
    textInputs.push(input);
  }
});

function addErrorMessage(input) {
  const errorMessageId = input.name + "Error";
  const errorMessage = document.getElementById(errorMessageId);
  if (errorMessage) {
    errorMessage.innerHTML = "Required";
  }
}

function removeErrorMessage(input) {
  const errorMessageId = input.name + "Error";
  const errorMessage = document.getElementById(errorMessageId);
  if (errorMessage) {
    errorMessage.innerHTML = "";
  }
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
    dataInput.classList.add("valid-border");
    setTimeout(function () {
      dataInput.classList.remove("valid-border");
    }, 2000);
  });
}

function personalDataValidate() {
  let isEmailValid = true;
  let isTextDataValid = true;
  let isValidURL = true
  personalDataInputs.forEach((dataInput) => {
    const inputType = dataInput.getAttribute("type");
    const dataValue = dataInput.value.trim();
    if (dataInput.classList.contains("non-required")) {
      return;
    }
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
      const emailValue = dataValue
      emailErrorMessage.innerHTML = "";
      dataInput.classList.remove("error-input");
    } else if (dataInput.getAttribute("name") === "url") {
      const urlPattern =
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      if (dataValue === "") {
        urlErrorMessage.innerHTML = "Required";
        isValidURL = false;
        dataInput.classList.add("error-input");
        return;
      } else if (!urlPattern.test(dataValue)) {
        urlErrorMessage.innerHTML = "Invalid URL";
        dataInput.classList.add("error-input");
        isValidURL = false;
        return;
      }
      const URLValue = dataValue
      isValidURL = true;
      urlErrorMessage.innerHTML = "";
      dataInput.classList.remove("error-input");
      return;
    } else {
      if (dataValue === "") {
        isTextDataValid = false;
        dataInput.classList.add("error-input");
        addErrorMessage(dataInput);
        return;
      }
      isTextDataValid = true
      removeErrorMessage(dataInput);
      dataInput.classList.remove("error-input");
    }
  });

  return isEmailValid && isTextDataValid && isValidURL;
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


// let formData = {
//   email: emailValue,
//   url: URLValue,
// }

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // console.log(formData)

  let isPersonalDataValid = personalDataValidate();
  let isFirstCheckedValid = isFirstChecked();
  let isSecondCheckValid = isSecondCheck();

  if (isPersonalDataValid && isFirstCheckedValid && isSecondCheckValid) {
    fetchData()
    removeCheck(firstCheckBoxes);
    removeCheck(secondCheckBoxes);
    removeError();
    removeErrorMessage();
    console.log("all ok");
    // return;
  } else {
    console.log("i have bad news for u");
  }
});

const formBg = document.querySelector(".pages-wrapper");

if (currentPage.includes("contact-us-page.html")) {
  formBg.style.backgroundPosition = "center 200px";
}




