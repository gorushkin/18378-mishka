var myList = document.querySelectorAll(".product__add-to");
var popup = document.querySelector(".add-to-basket");
var overlay = document.querySelector(".overlay");

for (var i = 0; i < myList.length; i++) {
  myList[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    console.log('press');
    popup.classList.add("add-to-basket--show");
    overlay.classList.add("overlay--show");
  });
}

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
  overlay.classList.remove("overlay--show");
  popup.classList.remove("add-to-basket--show");
  // if (popup.classList.contains("add-to-basket--show")) {
  //   popup.classList.remove("add-to-basket--show");
  // }
  // if (overlay.classList.contains("overlay--show")) {
  //   overlay.classList.remove("overlay--show");
  // }
});
