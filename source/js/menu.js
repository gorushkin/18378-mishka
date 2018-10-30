var button = document.querySelector(".page-header__toggle");
button.classList.add("page-header__toggle--show");
var sitemenu = document.querySelector(".page-header__main-nav-wrapper");
sitemenu.classList.add("page-header__main-nav-wrapper--close-menu");
var usermenu = document.querySelector(".page-header__user-list-wrapper");
usermenu.classList.add("page-header__user-list-wrapper--close-menu");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  button.classList.toggle("page-header__toggle--close");
  sitemenu.classList.toggle("page-header__main-nav-wrapper--show-menu");
  usermenu.classList.toggle("page-header__user-list-wrapper--show-menu");
});
