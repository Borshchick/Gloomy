let burgerBtn=document.querySelector(".header_burger__icon"),burgerItems=document.querySelector(".header_burger__items");function hideContent(){document.body.style.overflow="hidden",document.body.style.height="100vh"}function showContent(){document.body.style.height="auto",document.body.style.overflow="0"}burgerBtn.addEventListener("click",function(){burgerBtn.classList.toggle("active_burger_btn"),burgerItems.classList.toggle("active_burger"),(burgerBtn.classList.contains("active_burger_btn")?hideContent:showContent)()});let closeArrow=document.querySelector(".header_burger__arrow"),burgerLinks=(closeArrow.addEventListener("click",function(){burgerItems.classList.remove("active_burger"),burgerBtn.classList.remove("active_burger_btn"),showContent()}),document.querySelectorAll(".header_burger__link"));burgerLinks.forEach(function(e){e.addEventListener("click",function(){burgerItems.classList.remove("active_burger"),burgerBtn.classList.remove("active_burger_btn"),showContent()})});