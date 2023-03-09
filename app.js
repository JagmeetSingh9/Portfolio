// Scroll to top button
var scrollTopBtn = document.querySelector('.scroll-top');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 200) {
    scrollTopBtn.classList.add('show');
  } else {
    scrollTopBtn.classList.remove('show');
  }
});

scrollTopBtn.addEventListener('click', function() {
  window.scrollTo(0, 0);
});

// Smooth scroll for navigation links
var navLinks = document.querySelectorAll('nav ul li a');

for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function(e) {
    e.preventDefault();

    var target = this.getAttribute('href');
    var targetPos = document.querySelector(target).offsetTop;
    var startPos = window.pageYOffset;
    var distance = targetPos - startPos;
    var startTime=null;
    function animation(currentTime) {
        if (startTime === null) {
          startTime = currentTime;
        }
      
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPos, distance, duration);
        window.scrollTo(0, run);
      
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
      
      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      }
      
      requestAnimationFrame(animation); });
    }