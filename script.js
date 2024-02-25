// Side navigation
const menuBtn = document.getElementById("menuBtn");
const sideNav = document.getElementById("sideNav");
const menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src = "images/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "images/menu.png";
  }
};

// Dark, light mode

const container = document.querySelector(".container");
const toggle = document.querySelector(".toggle");

toggle.addEventListener("click", () => {
  container.classList.toggle("dark")
    ? (toggle.firstElementChild.className = "far fa-moon")
    : (toggle.firstElementChild.className = "far fa-sun");
});

// Photogalery

let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});

// Contact form

const contform = document.querySelector(".container-form");
const signUpBtn = document.querySelector(".green-bg button");

signUpBtn.addEventListener("click", () => {
  contform.classList.toggle("change");
});

// Password

const password1 = document.querySelector(".password-first");
const password2 = document.querySelector(".password-second");
const paragraphText = document.querySelector(".result-text");

password1.addEventListener("input", () => {
  const password1Value = password1.value;
  const password2Value = password2.value;

  if (password1Value === password2Value) {
    paragraphText.textContent = "Hesla jsou shodná";
    paragraphText.classList.add("valid");
    paragraphText.classList.remove("invalid");
  } else {
    paragraphText.textContent = "Hesla nejsou shodná";
    paragraphText.classList.add("invalid");
    paragraphText.classList.remove("valid");
  }

  if (password1Value === "" && password2Value === "") {
    paragraphText.textContent = "";
  }
});

password2.addEventListener("input", () => {
  const password1Value = password1.value;
  const password2Value = password2.value;

  if (password1Value === password2Value) {
    paragraphText.textContent = "Hesla jsou shodná";
    paragraphText.classList.add("valid");
    paragraphText.classList.remove("invalid");
  } else {
    paragraphText.textContent = "Hesla nejsou shodná";
    paragraphText.classList.add("invalid");
    paragraphText.classList.remove("valid");
  }

  if (password1Value === "" && password2Value === "") {
    paragraphText.textContent = "";
  }
});

// Heading

const heading = document.querySelectorAll("main h1");

heading.forEach((title) => {
  title.addEventListener("click", () => {
    title.style.display = "none";
  });
});

// Reviews

const review = document.querySelectorAll(".review-col");

review.forEach((column) => {
  column.addEventListener("mouseenter", () => {
    column.style.transform = "scale(1.1)";
    column.style.color = "blue";
  });

  column.addEventListener("mouseleave", () => {
    column.style.transform = "scale(1)";
    column.style.color = "black";
  });
});

// About us

const image1 = document.querySelector(".image1");
const image2 = document.querySelector(".image2");

image1.addEventListener("mouseenter", () => {
  image1.style.transform = "rotate(-25deg)";
});
image1.addEventListener("mouseleave", () => {
  image1.style.transform = "rotate(0deg)";
});

image2.addEventListener("mouseenter", () => {
  image2.style.transform = "rotate(25deg)";
});
image2.addEventListener("mouseleave", () => {
  image2.style.transform = "rotate(0deg)";
});

// Price list

const pricelist = document.querySelectorAll(".price-list-plan");

pricelist.forEach((list) => {
  list.addEventListener("mouseenter", () => {
    list.style.transform = "scale(1.1)";
  });
  list.addEventListener("mouseleave", () => {
    list.style.transform = "scale(1)";
  });
});

// Spa

const image = document.querySelectorAll(".image");

image.forEach((treatment) => {
  treatment.addEventListener("mouseenter", () => {
    treatment.style.transform = "scale(1.1)";
  });
  treatment.addEventListener("mouseleave", () => {
    treatment.style.transform = "scale(1)";
  });
});

// Trips

const slides = document.querySelectorAll(".slide");

slides.forEach(function (oneslide) {
  oneslide.addEventListener("click", function () {
    deleteActiveClass();
    oneslide.classList.add("active");
  });
});

function deleteActiveClass() {
  slides.forEach(function (mySlide) {
    mySlide.classList.remove("active");
  });
}

// scroll
const arrow = document.querySelector(".arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 1000) {
    arrow.style.display = "block";
  }

  arrow.addEventListener("click", () => {
    arrow.style.display = "none";
  });
});
