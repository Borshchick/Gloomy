const cardButtons=document.querySelectorAll(".top-line__card"),cardItems=document.querySelectorAll(".top-line__text");function toggleItems(){cardButtons.forEach(c=>{c.addEventListener("click",()=>{var t=c.getAttribute("data-target");cardItems.forEach(t=>{t.classList.add("d-none")});const e=document.getElementById(t);e&&e.classList.remove("d-none"),cardButtons.forEach(t=>{t.style.color=t===c?"black":"#A3A3A3"})})})}toggleItems();