var splitInfo = new SplitType(".heading-h2", { types: 'words' })//splits the paragraph into spans of words
var splitWelcome = new SplitType(".heading-h1", { types: 'words' })//splits the paragraph into spans of words
var tl = gsap.timeline({ paused: true });
window.addEventListener("load", function () {
  tl.play();
});

tl.from("h1 > .word", {
  opacity: 0,
  stagger: 0.5,//like a mini timeline, delay in seconds
})

tl.from("h2 > .word", {
  opacity: 0,
  delay: 0.5,
  stagger: {//random order stagger
    from: "random",
    amount: 0.7,
  },
  ease: "power3.inOut",
})

function updatemenu() {
  if (document.getElementById('responsive-menu').checked == true) {
    document.getElementById('menu').style.borderBottomRightRadius = '0';
    document.getElementById('menu').style.borderBottomLeftRadius = '0';
  } else {
    document.getElementById('menu').style.borderRadius = '0px';
  }
}

window.addEventListener('resize', function () {
  if (window.innerWidth <= 762) {
    document.getElementById('warning-message').style.display = 'block';
    document.body.style.overflow = 'hidden';
  } else {
    document.getElementById('warning-message').style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});


var tl1 = gsap.timeline({ paused: true });
var tl2 = gsap.timeline({ paused: true });
var tl3 = gsap.timeline({ paused: true });
var tl4 = gsap.timeline({ paused: true });
var tl5 = gsap.timeline({ paused: true });
var tl6 = gsap.timeline({ paused: true });
var tl7 = gsap.timeline({ paused: true });
var tl8 = gsap.timeline({ paused: true });
var tl9 = gsap.timeline({ paused: true });
var tl10 = gsap.timeline({ paused: true });


tl1.to(".day1", { "--scale": 1.2, duration: 0.5, transformOrigin: "center", ease: "circ.inOut", });
document.querySelector(".day1Link").addEventListener("mouseover", function () {
  tl1.play();
});
document.querySelector(".day1Link").addEventListener("mouseout", function () {
  tl1.reverse();
});

tl2.to(".day2", { "--scale": 1.2, duration: 0.5, transformOrigin: "center", ease: "circ.inOut", });
document.querySelector(".day2Link").addEventListener("mouseover", function () {
  tl2.play();
});
document.querySelector(".day2Link").addEventListener("mouseout", function () {
  tl2.reverse();
});

tl3.to(".day3", { "--scale": 1.2, duration: 0.5, transformOrigin: "center", ease: "circ.inOut", });
document.querySelector(".day3Link").addEventListener("mouseover", function () {
  tl3.play();
});
document.querySelector(".day3Link").addEventListener("mouseout", function () {
  tl3.reverse();
});

tl4.to(".day4", { "--scale": 1.2, duration: 0.5, transformOrigin: "center", ease: "circ.inOut", });
document.querySelector(".day4Link").addEventListener("mouseover", function () {
  tl4.play();
});
document.querySelector(".day4Link").addEventListener("mouseout", function () {
  tl4.reverse();
});

tl5.to(".day5", { "--scale": 1.2, duration: 0.5, transformOrigin: "center", ease: "circ.inOut", });
document.querySelector(".day5Link").addEventListener("mouseover", function () {
  tl5.play();
});
document.querySelector(".day5Link").addEventListener("mouseout", function () {
  tl5.reverse();
});

tl6.to(".day6", { "--scale": 1.2, duration: 0.5, transformOrigin: "center", ease: "circ.inOut", });
document.querySelector(".day6Link").addEventListener("mouseover", function () {
  tl6.play();
});
document.querySelector(".day6Link").addEventListener("mouseout", function () {
  tl6.reverse();
});

tl7.to(".day7", { "--scale": 1.2, duration: 0.5, transformOrigin: "center", ease: "circ.inOut", });
document.querySelector(".day7Link").addEventListener("mouseover", function () {
  tl7.play();
});
document.querySelector(".day7Link").addEventListener("mouseout", function () {
  tl7.reverse();
});

tl8.to(".day8", { "--scale": 1.2, duration: 0.5, transformOrigin: "center", ease: "circ.inOut", });
document.querySelector(".day8Link").addEventListener("mouseover", function () {
  tl8.play();
});
document.querySelector(".day8Link").addEventListener("mouseout", function () {
  tl8.reverse();
});

tl9.to(".day9", { "--scale": 1.2, duration: 0.5, transformOrigin: "center", ease: "circ.inOut", });
document.querySelector(".day9Link").addEventListener("mouseover", function () {
  tl9.play();
});
document.querySelector(".day9Link").addEventListener("mouseout", function () {
  tl9.reverse();
});

tl10.to(".day10", { "--scale": 1.2, duration: 0.5, transformOrigin: "center", ease: "circ.inOut", });
document.querySelector(".day10Link").addEventListener("mouseover", function () {
  tl10.play();
});
document.querySelector(".day10Link").addEventListener("mouseout", function () {
  tl10.reverse();
});



