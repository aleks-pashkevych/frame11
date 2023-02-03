"use strict";

const myBtn = document.querySelectorAll(".btn");
const popUp = document.querySelector(".popup");

const popUp2 = document.querySelector("#popup-2");
const closer = document.querySelectorAll(".closer");
const closeArea = document.querySelector(".popup__area");
const closeArea2 = document.querySelector(".area2");
const closeLink = document.querySelector(".popup__content-link");

const body = document.querySelector("body");

const textHead = document.querySelector(".popup__head");
const textArea = document.querySelectorAll(".popup__form-input-text");
const emailArea = document.querySelector(".popup__form-input-email");
const subscribeBtn = document.querySelector(".subscribe-btn");

let isDataOk = false;
let headChanged = false;

const closePopupWindow = (window) => {
  window.classList.remove("visible");
  window.classList.add("hidden");
  body.style.overflow = "auto";
};
const openPopUp = (window) => {
  window.classList.remove("hidden");
  popUp.classList.add("visible");
  body.style.overflow = "hidden";
};
myBtn.forEach((btn) => {
  btn.onclick = () => {
    openPopUp(popUp);
  };
});

closer.forEach((closer) => {
  closer.onclick = () => {
    closePopupWindow(popUp);
    closePopupWindow(popUp2);
  };
});

closeArea.onclick = () => {
  closePopupWindow(popUp);
};
closeArea2.onclick = () => {
  closePopupWindow(popUp2);
};

textArea.forEach((textArea) => {
  let textCorrect = true;
  let isChanged = false;
  textArea.addEventListener("keypress", function (e) {
    if (e.target.value.length > 2) {
      if (
        e.target.value.length > 2 &&
        e.target.value[0].toUpperCase() == e.target.value[0]
      ) {
        const isTextRE = /^[a-z]/;
        for (let i = 1; i < e.target.value.length; i++) {
          if (isTextRE.test(e.target.value[i])) {
            textCorrect = true;
          } else {
            textCorrect = false;
          }
        }
      } else {
        textCorrect = false;
      }
    }
    if (!textCorrect) {
      textArea.style.borderColor = "red";
      textArea.style.borderWidth = "4px";
      textHead.style.color = "red";
      textHead.textContent = "Please Check Your Data!";
      isChanged = true;
    } else {
      textArea.style.borderColor = "#000";
      textArea.style.borderWidth - "1px";
      textHead.style.color = "#000";
      if (isChanged == true) {
        textHead.textContent = "Now All Looks Ok.";
      }
    }
    isDataOk = textCorrect;
  });
});
emailArea.addEventListener("keypress", function (e) {
  const emailValue = e.target.value;
  const emailRE =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let isValid = true;
  if (emailValue.length > 5) {
    if (emailRE.test(emailValue) == true) {
      isValid = true;
    } else {
      isValid = false;
    }
  }
  if (!isValid) {
    emailArea.style.borderColor = "red";
    emailArea.style.borderWidth = "4px";
    textHead.textContent = "Please Check Your Data!";
  } else {
    emailArea.style.borderColor = "#000";
    emailArea.style.borderWidth = "1px";
    textHead.textContent = "Now All Looks Ok.";
  }
  isDataOk = isValid;
});
const textForm = document.querySelector(".popup__content-text");

subscribeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(`Full data ok = ${isDataOk}`);
  let areaNotEmpty = false;

  if (
    textArea[0].value.length > 0 &&
    textArea[1].value.length > 0 &&
    emailArea.value.length > 0
  ) {
    areaNotEmpty = true;
  }
  console.log(`Areas: ${areaNotEmpty}`);
  if (isDataOk == true && areaNotEmpty == true) {
    console.log(
      `Name: ${textArea[0].value}, SName: ${textArea[1].value}, email: ${emailArea.value}}`
    );
    textForm.textContent = `${textArea[0].value}, your request has been send. We will contact you in a nearest future.`;
    closePopupWindow(popUp);
    openPopUp(popUp2);
  } else {
    console.log("not OK");
    console.log(
      `Area-1: ${textArea[0].value.length}, Area-1: ${textArea[1].value.length}, email: ${emailArea.value.length}`
    );
  }
});

closeLink.addEventListener("click", (e) => {
  e.preventDefault();
  closePopupWindow(popUp2);
});
