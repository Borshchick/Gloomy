let burgerBtn=document.querySelector(".header_burger__icon"),burgerItems=document.querySelector(".header_burger__items"),closeArrow=(burgerBtn.addEventListener("click",function(){burgerBtn.classList.toggle("active_burger_bnt"),burgerItems.classList.toggle("active_burger")}),document.querySelector(".header_burger__arrow")),burgerLinks=(closeArrow.addEventListener("click",function(){burgerItems.classList.remove("active_burger"),burgerBtn.classList.remove("active_burger_bnt")}),document.querySelectorAll(".header_burger__link"));burgerLinks.forEach(function(e){e.addEventListener("click",function(){burgerItems.classList.remove("active_burger"),burgerBtn.classList.remove("active_burger_bnt")})});