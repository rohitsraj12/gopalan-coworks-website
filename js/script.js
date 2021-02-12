$(document).ready(function(){
    // hamberger mobile navigation
    $("#hamberger").click(function(){
        $("#header-nav").slideToggle();
    })

    // document.getElementsByClassName("banner__video").controls = true;

    $(".nav__list").click(function(){
      $(this).find(".sub__nav").slideToggle();
    });

    var wrap = $("#body-header");

    wrap.on("scroll", function(e) {
    
      if (this.scrollTop > 200) {
        wrap.addClass("fix-search");
      } else {
        wrap.removeClass("fix-search");
      }
    });

    
    // scroll down fixed body header 
      // $(window).scroll(function() {    
      //     var scroll = $(window).scrollTop();
      
      //     if (scroll >= 600) {
      //         $("#body-header").addClass("header-fixed");
      //     } else {
      //         $("#body-header").removeClass("header-fixed");
      //     }

      //     if(scroll >= 600){
      //       $("#fixed-button").removeClass("hide");
      //     } else {
      //       $("#fixed-button").addClass("hide");
      //     }
      // });

      
    $(".close").click(function(){
        $(".modal").fadeOut(400);
        $(".form__wrap").fadeOut(400);
    });

    $(".show__phone").click(function(){
        $(".modal").fadeIn(400);
    });



  // owl slider
    var $owl = $('.section__location .owl-carousel');

    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
      center: true,
      loop: true,
      items: 3,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
    });

    
    var $owl = $('.section__testimonial .owl-carousel');

    $owl.children().each( function( index ) {
      $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
    });

    $owl.owlCarousel({
      // center: true,
      loop: true,
      items: 3,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,

        dots: true,
      // autoplayHoverPause: true,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        },

    }
    });

    $(document).on('click', '.owl-item>div', function() {
      // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
      var $speed = 300;  // in ms
      $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
    });

    $('.event__block').hover(function(){
      $('.community__front > .gallery__block').toggleClass('gallery__block-body');
    });

    // location form hide and show
    $('#show-form').click(function(){
      $('.gallery__form-wrap').toggleClass('form__hide');
    })

    $('#btn-close').click(function(){
      $('.gallery__form-wrap').toggleClass('form__hide');
    })

    // faq toggle section
    $('.faq__header').click(function(){
      $('.faq__ans').slideUp(300);
      $(this).parent().find('.faq__ans').slideDown(300);
      $('.fa-angle-down').css('transform', 'rotate(0deg)');
      $(this).parent().find('.fa-angle-down').css('transform', 'rotate(180deg)');
    })

    // google review read more button
    $(".load__review-btn > .btn__link").click(function(){
      $(".load__review").removeClass('hide');
      $(this).text('Load Less..');
      $(this).parent().removeClass('load__review-btn');
      $(this).parent().addClass('less__review-btn');
    });

















    // typing effect for banner

    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
  };
})