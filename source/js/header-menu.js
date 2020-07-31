menuOpen = document.querySelector(".header__menu-open");
menu = document.querySelector(".header__menu");
header = document.querySelector(".header");
logo = document.querySelector(".header__logo");
enter = document.querySelector(".enter-link");
userLinks = document.querySelector(".main-info__user-links");

window.onscroll = function(){
  if(window.pageYOffset > 50){
    header.classList.add("header_scrolled");
    enter.classList.add("enter-link_scrolled")
    userLinks.classList.add("main-info__user-links_scrolled")
  } else {
    header.classList.remove("header_scrolled");
    if (header.classList.contains("header_menu-open")){
      enter.classList.add("enter-link_scrolled");
      userLinks.classList.add("main-info__user-links_scrolled")
    } else {
        enter.classList.remove("enter-link_scrolled");
        userLinks.classList.remove("main-info__user-links_scrolled")
      }
    }
  }

menuOpen.addEventListener("click", function(){
  enter.classList.add("enter-link_scrolled");
  menuOpen.classList.toggle("header__menu-open_close-version");
  menu.classList.toggle("header__menu_hidden");
  header.classList.toggle("header_menu-open");
  logo.classList.toggle("header__logo_menu-open");
});
