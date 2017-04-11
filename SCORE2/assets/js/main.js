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
});
