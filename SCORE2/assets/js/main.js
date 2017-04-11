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
    if ($("#mobile-navigation").css("display") === "none") {
      $("#mobile-navigation").css("display", "block");
      $("#menu-icon").attr("src", "assets/images/menu-icon-close.png");
    } else {
      $("#mobile-navigation").css("display", "none");
      $("#menu-icon").attr("src", "assets/images/menu-icon.png");
    }
  });
});
