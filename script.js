function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }


var tl = gsap.timeline({paused: true});

tl.to(".day1", {"--scale": 1.2, duration: 1, transformOrigin: "center"});

document.querySelector(".day1Link").addEventListener("mouseover", function() {
 // play the timeline
 tl.play();
});

document.querySelector(".day1Link").addEventListener("mouseout", function() {
 // reverse the timeline
 tl.reverse();
});
