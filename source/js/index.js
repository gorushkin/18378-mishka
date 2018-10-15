var popup = document.querySelector(".add-to-basket");
var overlay = document.querySelector(".overlay");
var link = document.querySelector(".product-card__to-order");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("add-to-basket--show");
  overlay.classList.add("overlay--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains("add-to-basket--show")) {
      popup.classList.remove("add-to-basket--show");
    }
    if (overlay.classList.contains("overlay--show")) {
      overlay.classList.remove("overlay--show");
    }
  }
})

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (popup.classList.contains("add-to-basket--show")) {
    popup.classList.remove("add-to-basket--show");
  }
  if (overlay.classList.contains("overlay--show")) {
    overlay.classList.remove("overlay--show");
  }
});

