var form = document.querySelector("form");
var inputname = document.querySelector("[name=name]")
var familyname = document.querySelector("[name=familyname]")
var phonenumber = document.querySelector("[name=phonenumber]")
var email = document.querySelector("[name=email]")

form.addEventListener("submit", function (evt) {
  if (!inputname.value || !familyname.value || !phonenumber.value || !email.value) {
    evt.preventDefault();
    if (!familyname.value) {
      familyname.classList.add("order-form__input--invalid");
    }
    if (!inputname.value) {
      inputname.classList.add("order-form__input--invalid");
    }
    if (!phonenumber.value) {
      phonenumber.classList.add("order-form__input--invalid");
    }
    if (!email.value) {
      email.classList.add("order-form__input--invalid");
    }
  }
});
