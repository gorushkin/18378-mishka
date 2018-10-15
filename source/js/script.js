var button = document.querySelector(".main-nav__toggle");
var sitemenu = document.querySelector(".page-header__main-nav");
sitemenu.classList.add("page-header__main-nav--close-menu");
var usermenu = document.querySelector(".page-header__user-list");
usermenu.classList.add("page-header__user-list--close-menu");

button.addEventListener("click", function (evt) {
  evt.preventDefault();
  button.classList.toggle("main-nav__toggle--close");
  sitemenu.classList.toggle("page-header__main-nav--show-menu");
  usermenu.classList.toggle("page-header__user-list--show-menu");
});

var popup = document.querySelector(".add-to-basket");
var link = document.querySelector(".product-card__to-order");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("add-to-basket--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains("add-to-basket--show")) {
      popup.classList.remove("add-to-basket--show");
    }
  }
})
