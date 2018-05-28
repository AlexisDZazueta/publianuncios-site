$(function() {
   var navbar = $(".navbar");
   $(window).scroll(function() {    
       var scroll = $(window).scrollTop();
       if (scroll >= 100) {
           navbar.addClass("scrolled");
       } else {
           navbar.removeClass("scrolled");
       }
   });
});