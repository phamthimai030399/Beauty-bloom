const inputs = document.querySelectorAll("input");
Array.from(inputs).forEach((input) => {
  const placeHolderCurrent = input.getAttribute("placeholder");
  input.addEventListener("focus", function () {
    this.setAttribute("placeholder", "");
    const clearInput = this.parentElement.querySelector(".clear-input");

    if (clearInput) {
      // show x when focus
      clearInput.classList.remove("d-none");
      this.addEventListener("input", function () {
        if (this.value == "") {
          clearInput.querySelector(".clear-input svg path").style.fill =
            "#c8c8c8";
        } else {
          clearInput.querySelector(".clear-input svg path").style.fill = "#000";
        }
      });

      // click x clear input
      clearInput.addEventListener("click", () => {
        clearInput.previousElementSibling.value = "";
        clearInput.querySelector("svg path").style.fill = "#c8c8c8";
        input.focus();
      });
    }
    this.addEventListener("focusout", function (e) {
      this.setAttribute("placeholder", placeHolderCurrent);
      if (this.value == "") {
        this.style.outline = "none";
      }
    });

    // click outside input
    window.addEventListener("click", (e) => {
      if (
        e.target.parentElement == input.parentElement ||
        e.target.parentElement.parentElement == input.parentElement ||
        e.target.parentElement.parentElement.parentElement ==
          input.parentElement
      ) {
        return false;
      } else {
        if (clearInput) {
          clearInput.classList.add("d-none");
        }
      }
    });
  });
});

// password show/hide
const passwordInputs = document.querySelectorAll(".password-input");
Array.from(passwordInputs).forEach((passwordInput) => {
  passwordInput.addEventListener("click", function () {
    const input = this.parentElement.querySelector("input");
    console.log(input.type);
    if (input.type == "password") {
      input.setAttribute("type", "text");
    } else {
      input.setAttribute("type", "password");
    }
  });
});

// login popup slider
const loginSlider = new Swiper(".login-slider", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".login-next",
    prevEl: ".login-prev",
  },
  pagination: {
    el: ".login-pagination",
    clickable: true,
  },
});

// register popup slider
const registerSlider = new Swiper(".register-slider", {
  spaceBetween: 30,
  effect: "fade",
  navigation: {
    nextEl: ".register-next",
    prevEl: ".register-prev",
  },
  pagination: {
    el: ".register-pagination",
    clickable: true,
  },
});

// open discount popup
const buttonPopupSale = document.querySelector(".discount-btn");
if (buttonPopupSale) {
  setTimeout(() => {
    buttonPopupSale.click();
    buttonPopupSale.classList.remove("d-none");
  }, 1000);
}

// customize select country at footer
const form = document.forms.language;
const labels = document.querySelectorAll(".language-label");
let radio = document.querySelector("input[name=language]:checked");
const summary = document.getElementById("language-result");
labels.forEach((label) => {
  if (label.htmlFor === radio.value) {
    summary.innerHTML = label.innerHTML;
  }
});
if (radio) {
  radio.addEventListener("click", () => {
    document.querySelector("#language details").open = false;
  });
}
if (form) {
  form.onchange = function () {
    radio = document.querySelector("input[name=language]:checked");
    labels.forEach((label) => {
      if (label.htmlFor === radio.value) {
        summary.innerHTML = label.innerHTML;
      }
    });
    document.querySelector("#language details").open = false;
  };
}

//quantity
const plusbtn = document.querySelectorAll(".plus");
plusbtn.forEach((plus) => {
  plus.addEventListener("click", () => {
    const quantity = plus.parentElement.querySelector(".qty");
    if (quantity.value) {
      quantity.value = parseInt(quantity.value) + 1;
    } else quantity.value = 0;
  });
});
const minusbtn = document.querySelectorAll(".minus");
minusbtn.forEach((minus) => {
  minus.addEventListener("click", () => {
    const quantity = minus.parentElement.querySelector(".qty");
    if (parseInt(quantity.value) > 0) {
      quantity.value = parseInt(quantity.value) - 1;
    } else quantity.value = 0;
  });
});

// scroll animate
const scrollBox = document.querySelectorAll(".scroll-box");

function checkScroll() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  scrollBox.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    }
  });
}

window.addEventListener("scroll", checkScroll);
