const cardButtons = document.querySelectorAll('.top-line__card');
const cardItems = document.querySelectorAll('.top-line__text');

function toggleItems() {
    cardButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            
            // Перебираємо всі тексти і приховуємо їх
            cardItems.forEach((item) => {
                item.classList.add('d-none');
            });
            
            // Знаходимо і відображаємо потрібний текст
            const targetItem = document.getElementById(targetId);
            if (targetItem) {
                targetItem.classList.remove('d-none');
            }

            // Змінюємо колір кнопок
            cardButtons.forEach((btn) => {
                if (btn === button) {
                    // Якщо ця кнопка натиснута, змінюємо її колір на червоний
                    btn.style.color = 'black';
                } else {
                    // Інакше, змінюємо колір інших кнопок на сірий
                    btn.style.color = '#A3A3A3';
                }
            });
        });
    });
}

toggleItems(); // Викликаємо функцію для додавання обробників подій
