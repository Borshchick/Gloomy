const arrows = document.querySelectorAll(".faq__accordion-icon");
const accordionContents = document.querySelectorAll(".faq__accordion-content");
const accordionButtons = document.querySelectorAll(".faq__accordion-button");
const accordionItems = document.querySelectorAll(".faq__accordion-item");

accordionButtons.forEach((element, index) => {
  element.addEventListener("click", function () {
    let content = element.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      arrows[index].classList.remove("active-icon");
      accordionItems[index].classList.remove("active-accordion"); // Вибір елемента по індексу
      accordionItems[index].nextElementSibling.classList.remove("remove-dots")
      accordionButtons[index].style.color = "white";
    } else {
      closeAllAccordionContents();
      content.style.maxHeight = content.scrollHeight + "px";
      arrows[index].classList.add("active-icon");
      accordionItems[index].classList.add("active-accordion"); // Вибір елемента по індексу
      accordionItems[index].nextElementSibling.classList.add("remove-dots");
      accordionButtons[index].style.color = "#F2CA00";
    }
  });
});

function closeAllAccordionContents() {
  accordionContents.forEach((element) => (element.style.maxHeight = null));
  arrows.forEach((arrow) => arrow.classList.remove("active-icon"));
  accordionItems.forEach((item) => {
    item.classList.remove("active-accordion")
    const nextElement = item.nextElementSibling
    if (nextElement) {
        nextElement.classList.remove('remove-dots');
    }
  }); // Закриття всіх акордеонів
  accordionButtons.forEach((button) => (button.style.color = "white"));
}
