// BTN TOP
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 70 ){
            $('.btn-top').addClass('active');
        }else{
            $('.btn-top').removeClass('active');
        }
    });
});
// HEADER NAV
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 70){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });
});
// GNB NAV
$(function(){
    $('.menu_open').click(function(){
        $('.gnb').addClass('active');
    });
    $('.close').click(function(){
        $('.gnb').removeClass('active');
    });
});
// SCROLLA 
$(function(){
    $('.animate').scrolla({
        mobile:false,
        once:false
    });
});
// SLICK
$(function(){
    $('.banner .slide').slick({
        arrows:true,
        dots:false,
        fade:false,
        autoplay:true,
        autoplaySpeed:3500,
        pauseOnHover:false       
    });
});



















