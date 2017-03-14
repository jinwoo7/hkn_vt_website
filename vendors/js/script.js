$(document).ready(function() {

    /* For Sticky Navigation */
    $('.js--about-us').waypoint(function(direction){
        if (direction == "down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    },{
        offset: '60px;'
    });
    
    /* Scroll on buttons */    
    $('.js--top-btn').click(function(){
        $('html, body').animate({scrollTop: $('.js--top-of-page').offset().top}, 1000);
    });
    
    $('.js--btn-full').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
    });
    
    /* Navigation scroll */
    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /* Animations on scroll */    
    $('.js--top-of-page').waypoint(function(direction) {
        $('.js--top-of-page').addClass('animated bounce');
    },{
        offset: '50%'
    });
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated pulse');
    },{
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated pulse');
    },{
        offset: '50%'
    });
    
    /* Mobile Nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')){
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else{
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }
        
    });
});