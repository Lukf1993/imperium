$(document).ready(function(){

// Hamburger
    $(".jsOpenMenu").on('click', function(){
        $("#myTopnav").slideToggle();
       
    });

// More/Less 
        $('.read-more-content').addClass("hide");
        $('.read-more-show, .read-more-hide').removeClass("hide");

        $('.read-more-show').on('click', function(e){
            $(this).hide();
            $(this).prev('.read-more-content').slideToggle();
            e.preventDefault();
        });
        $('.read-more-hide').on('click', function(e){
            $(this).parent('.read-more-content').slideToggle().next('.read-more-show').show();;
            e.preventDefault();
        });

// Scroll Buttons
    $('#Clans_Button').on('click', function() {
        $('html, body').animate({
            scrollTop: $('.clans').offset().top
        }, 1000);
    });

    $('#Regulations_Button').on('click', function(){
        $('html, body').animate({
            scrollTop: $('.regulations').offset().top
        }, 1000);
    });

    $('#Attacks_Button').on('click', function(){
        $('html, body').animate({
            scrollTop: $('.attacks').offset().top
        }, 1000);
    });

// Scroll Top
    $('#arrow-top').on('click', function(e){
        $('html, body').animate({
            scrollTop: 0}, 1000);
        e.preventDefault();
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 250) {
            $('#arrow-top').fadeIn(200); 
        } else {
            $('#arrow-top').fadeOut(200);
        }
    });

    
    

});

