$(function() {
  $(".header_sp_nav").click(function() {
    $(".nav1").slideToggle()
  })
  $(window).scroll(function() {

    if ($(window).scrollTop() === 0) {
       $("h1").addClass("active")
$("h1").removeClass("disable")
     } else {
       $("h1").removeClass("active")
$("h1").addClass("disable")

    }

    

  })
})
