
$(function() {
    $.scrollify({
        section : ".scroll",
        // interstitialSection : ".body__footer",
        // easing: "easeOutExpo",
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

  $('.owl-carousel').owlCarousel({
    stagePadding: 10,
    loop:true,
    margin:20,
    nav:true,
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