$(document).ready(function () {
  $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      if ($(window).width() > 768) {
          if (scroll > 300) {
              $(".nav-position").css("background", "transparent" + "position", "fixed");
          } else {
              $(".nav-position").css("background", "transparent");
          }
      }
  })

  if ($(window).width() < 769) {
      $('.nav-bg').css("background", "rgba(0, 0, 0, 0.5)");
      $('..nav-item a').css("color","white");
      $(window).scroll(function () {
          var scrolls = $(window).scrollTop();
          if (scrolls > 300) {
              $(".nav-position").css("background", "rgba(0, 0, 0, 0.5)");
              $('.nav-bg').css("background", "rgba(0, 0, 0, 0.0)" + "color" , "white")
          }
      })
  }
})
