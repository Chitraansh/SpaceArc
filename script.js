// FIRST TIME TEXT SCROLL ANIMATIONS

const faders = document.querySelectorAll(".fade-in,.fade-in-opacity");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// MENU

const toggleMenu = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const background = document.querySelector(".background");
const logo = document.querySelector(".logo");
const content = document.querySelector(".content");

toggleMenu.onclick = function(){
  toggleMenu.classList.toggle('toggleActive')
  navigation.classList.toggle('toggleActive')
  background.classList.toggle('toggleActive')
  logo.classList.toggle('toggleActive')
  content.classList.toggle('toggleActive')
}

// PROJECT INFO

function toggle(){
  var blur = document.getElementById('blur');
  blur.classList.toggle('activeBlur')
  var popup = document.getElementById('popup');
  popup.classList.toggle('activeBlur')
  var fix = document.getElementById('Explore');
  fix.classList.toggle('activeBlur')
}

// CAROUSEL

$('.carousel').carousel({
  interval: false,
});

// MADE BY CHITRAANSH ANAND
