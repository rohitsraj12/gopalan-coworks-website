$(document).ready(function(){
    const mediaQuery = window.innerWidth;

    
    if(mediaQuery < 574){
        console.log("mobile device style");

    } else if ((mediaQuery > 574) && (mediaQuery < 768)){
        console.log("tab device style");

    } else {
        // console.log("large device style");

        $(function() {
            $.scrollify({
                section : ".scroll",
                // interstitialSection : ".body__footer",
                easing: "easeOutExpo",
                scrollSpeed: 100,
                offset : 0,
                scrollbars: true,
                standardScrollElements: "",
                updateHash: true,
                touchScroll:true,
                // before:function() {},
                // after:function() {},
                // afterResize:function() {},
                // afterRender:function() {}
            });
        });
    }


    


    // fixed load after 1000px scroll
    $(window).scroll(function () {
        var height = $(window).height();
    
        if ($(window).scrollTop() > 800) {
          console.log("hi");
          $(".fixed__bottom").removeClass("hide");
    
        } else {
          console.log("hello");
          $(".fixed__bottom").addClass("hide");
        }
    });
})




/***************************************
 * 
 *  #home page location slider
 *  - large screen 
 *      2 images visible
 *      right side scroll button
 *     
 *  - small screen
 *      1 image visible
 *
 ************************************** */   
  $('.section__location-slider .owl-carousel').owlCarousel({
    stagePadding: 1,
    loop:true,
    margin:20,
    nav:true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    navText:["<div class='d-none nav-btn prev-slide'></div>","<div class='nav-btn next-slide'><span class='link__icon'>&#8594;</span></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2.3
        }
    }
})

$('.owl-carousel').find('.owl-nav').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
});

// gallery slider
$('.section__gallery-slider .owl-carousel').owlCarousel({
    stagePadding: 1,
    loop:true,
    margin:20,
    nav:true,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    navText:["<div class='d-none nav-btn prev-slide'></div>","<div class='nav-btn next-slide'><span class='link__icon'>&#8594;</span></div>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2.3
        }
    }
})

$('.owl-carousel').find('.owl-nav').removeClass('disabled');
$('.owl-carousel').on('changed.owl.carousel', function(event) {
	$(this).find('.owl-nav').removeClass('disabled');
});