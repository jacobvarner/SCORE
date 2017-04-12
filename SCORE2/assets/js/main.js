jQuery(document).ready(function ($) {
  $(document).on("scroll", function() {
  	if ($(document).scrollTop() > 100) {
  	  $("header").addClass("shrink");
      $("#header-logo").addClass("shrink-logo");
      $("nav#navigation").addClass("right-adjust");
  	} else {
  	  $("header").removeClass("shrink");
      $("#header-logo").removeClass("shrink-logo");
      $("nav#navigation").removeClass("right-adjust");
  	}
  });

  $("#menu-icon").click(function () {
    if ($("#mobile-navigation").height() === 0) {
      $("#mobile-navigation").height("250px");
      $("#menu-icon").attr("src", "assets/images/menu-icon-close.png");
    } else {
      $("#mobile-navigation").height("0px");
      $("#menu-icon").attr("src", "assets/images/menu-icon.png");
    }
  });
});
