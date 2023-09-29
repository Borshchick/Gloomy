const popupTriggerButtons = document.querySelectorAll('[data-popup-trigger]');
const popup = document.querySelector('.pop-up__wrapper');
const popUpWrapper = document.querySelector('.pop-up')

// Відкриття попапу
function openPopUp() {
    popup.style.display = 'flex'
}

// Закриття попапу
function closePopUp() {
    popup.style.display = 'none'
}

// Перетворення NodeList на масив
const popupTriggerButtonsArray = Array.from(popupTriggerButtons);

popupTriggerButtonsArray.forEach((button) => {
    button.addEventListener('click', function() {
        openPopUp();
    });
});

// Додайте обробник кліків на весь документ
document.addEventListener('click', function(event) {
    // Перевірте, чи клік не в попапі та не на кнопці відкриття попапу
    if (!popUpWrapper.contains(event.target) && !popupTriggerButtonsArray.includes(event.target)) {
        closePopUp();
    }
});

// Додайте обробник клавіші "Escape" для закриття попапу
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopUp();
    }
});







// function popUpValidate (){
//     let isEmailValid = true
//     let isTelValid = true
//     let isTextValid = true
//     inputs.forEach((input) => {
//         if(input.type === 'email'){
            // const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            // const inputValue = input.value.trim()
//             if(inputValue === ''){
//                 isEmailValid = false
//                 alert('required')
//                 return
//             }else if(!emailPattern.test(inputValue)){
//                 isEmailValid = false
//                 alert('invalid email')
//                 return
//             }
//             isEmailValid = true 
//         }else if(input.type === 'tel'){
//             const phonePattern = /^\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
//             const inputValue = input.value.trim()
//             if(inputValue === ""){
//                 isTelValid = false
//             }else if(!phonePattern.test(inputValue)){
//                 isTelValid = false
//                 return
//             }
//             isTelValid = true
//         }
        
//     })
//     return isEmailValid && isTextValid && isTelValid
// }

const inputs = document.querySelectorAll('.pop-up__input')
const popupSubmitButtons = document.querySelectorAll('input[type="submit"]');

function popupEmailValidate (){
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    inputs.forEach((input) => {
        if(input.type === 'email'){
            const inputValue = input.value.trim()
            if(inputValue === ''){
                console.error('required')
                return
            }else if(!emailPattern.test(inputValue)){
                console.error('invalid email')
                return
            }
            console.log("valid email")
        }
    })
}

popupSubmitButtons.forEach((button) => {
    button.addEventListener('click', function(e){
        e.preventDefault()
        popupEmailValidate()
    })
})