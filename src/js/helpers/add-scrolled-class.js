window.addEventListener('scroll', function () {

  var scrollPosition = window.scrollY;
  var bannerHeight = 40;

  if (scrollPosition >= bannerHeight) {
    return document.body.classList.add('scrolled')
  } else {
    return document.body.classList.remove('scrolled')
  }

})
