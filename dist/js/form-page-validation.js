const firstCheckBoxes=document.querySelectorAll(".first_check"),secondCheckBoxes=document.querySelectorAll(".second-check"),personalDataInputs=document.querySelectorAll(".personal-data-input"),answerInput=document.querySelectorAll(".answer-input"),submitBtn=document.querySelector(".form-page__submit-button"),dataErrorMessages=document.querySelectorAll(".error-message"),emailErrorMessage=document.getElementById("email-error"),errorFirstCheck=document.querySelector(".error-check"),errorSecondCheck=document.querySelector(".error-second-check"),nonRequire=document.querySelector('[name = "non-require"]'),urlErrorMessage=document.querySelector(".error-url");function addErrorMessage(){dataErrorMessages.forEach(e=>{e.innerHTML="Required"})}function removeErrorMessage(){dataErrorMessages.forEach(e=>{e.innerHTML=""})}function removeCheck(e){e.forEach(e=>{e.checked=!1})}function removeError(){emailErrorMessage.innerHTML="",personalDataInputs.forEach(e=>{e.value="",e.classList.remove("error-input"),e.classList.add("valid-border"),setTimeout(function(){e.classList.remove("valid-border")},2e3)})}function personalDataValidate(){let n=!0,i=!0;return personalDataInputs.forEach(e=>{var r=e.getAttribute("type"),o=e.value.trim();if("non-require"!==e.getAttribute("name")){if("email"===r){const s=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;return""===o?(n=!1,emailErrorMessage.innerHTML="Required",void e.classList.add("error-input")):s.test(o)?(emailErrorMessage.innerHTML="",void e.classList.remove("error-input")):(n=!1,emailErrorMessage.innerHTML="Invalid Email",void e.classList.add("error-input"))}if("url"===e.getAttribute("name")){const t=/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;return(isValidURL=!0,""===o)?(urlErrorMessage.innerHTML="Required",isValidURL=!1,void e.classList.add("error-input")):t.test(o)?(isValidURL=!0,urlErrorMessage.innerHTML="",void e.classList.remove("error-input")):(urlErrorMessage.innerHTML="Invalid URL",e.classList.add("error-input"),void(isValidURL=!1))}if(""===o)return i=!1,e.classList.add("error-input"),void addErrorMessage();removeErrorMessage(),e.classList.remove("error-input")}}),n&&i&&isValidURL}function isFirstChecked(){let r=!1;for(let e=0;e<firstCheckBoxes.length;e++)if(firstCheckBoxes[e].checked){r=!0;break}return r?(console.log("checked"),!(errorFirstCheck.innerHTML="")):!(errorFirstCheck.innerHTML="Pick One")}function isSecondCheck(){let r=!1;for(let e=0;e<secondCheckBoxes.length;e++)if(secondCheckBoxes[e].checked){r=!0;break}return r?(errorSecondCheck.innerHTML="",console.log("good"),!0):!(errorSecondCheck.innerHTML="Pick One")}submitBtn.addEventListener("click",function(e){e.preventDefault();var e=personalDataValidate(),r=isFirstChecked(),o=isSecondCheck();e&&r&&o?(removeCheck(firstCheckBoxes),removeCheck(secondCheckBoxes),removeError(),removeErrorMessage(),console.log("all ok")):console.log("i have bad news for u")});const formBg=document.querySelector(".pages-wrapper");currentPage.includes("contact-us-page.html")&&(formBg.style.backgroundPosition="center 200px");