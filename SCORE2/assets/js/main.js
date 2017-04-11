jQuery(document).ready(function ($) {
  $(document).on("scroll", function() {
  	if ($(document).scrollTop() > 100) {
  	  $("header").addClass("shrink");
      $("#header-logo").addClass("shrink-logo");
  	} else {
  	  $("header").removeClass("shrink");
      $("#header-logo").removeClass("shrink-logo");
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
