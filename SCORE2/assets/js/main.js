window.onscroll = function() {navScroll()};

function navScroll() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navigation").style.position = "fixed";
    document.getElementById("header").style.height = "60px"
    document.getElementById("header").style.position = "fixed";
    document.getElementById("header-logo").style.display = "none";
    document.getElementById("header-logo-small").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
