let lastScroll = 0;
const nav = document.getElementById("nav");
const one = document.getElementById('one');
const three = document.getElementById('three');
const four = document.getElementById('four');

function navoff() {
  one.classList.remove('active');
  three.classList.remove('active');
  four.classList.remove('active');
}

function editone() {
  navoff();
  one.classList.add('active');
  location.href = './home.html';
}

function editthree() {
  navoff();
  three.classList.add('active');
  location.href = './explore.html';
}

function editfour() {
navoff();
four.classList.add('active');
  location.href = './library.html';
}

document.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScroll) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }
  lastScroll = currentScroll;
});

history.scrollRestoration = "auto";

window.addEventListener("load", () => {
  if (document.referrer.includes("index.html")) {
    document.querySelector(".loading").style.display = "flex";
    setTimeout(() => {
      document.querySelector(".loading").style.display = "none";
    }, 1800)
  } else {
    document.querySelector(".loading").style.display = "none";
  }
});

document.querySelector('.logo').addEventListener('click', function() {
  window.location.href = './index.html';
});

// function fas(){
//     const navLinks = document.querySelector('.nav-links');
//     const fasbar = document.getElementById('fasbar');
//     navLinks.classList.toggle('active');
//     fasbar.classList.toggle('fa-bars');
//     fasbar.classList.toggle('fa-times');
// }






