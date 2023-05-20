function updatemenu() {
    if (document.getElementById('responsive-menu').checked == true) {
      document.getElementById('menu').style.borderBottomRightRadius = '0';
      document.getElementById('menu').style.borderBottomLeftRadius = '0';
    }else{
      document.getElementById('menu').style.borderRadius = '0px';
    }
  }

  window.addEventListener('resize', function() {
    if (window.innerWidth <= 762) {
      document.getElementById('warning-message').style.display = 'block';
      document.body.style.overflow = 'hidden';
    } else {
      document.getElementById('warning-message').style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });

var tl = gsap.timeline({paused: true});

tl.to(".day1", {"--scale": 1.2, duration: 1, transformOrigin: "center"});
document.querySelector(".day1Link").addEventListener("mouseover", function() {
 tl.play();
});
document.querySelector(".day1Link").addEventListener("mouseout", function() {
 tl.reverse();
});
