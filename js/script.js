$(function () {
  "use strict";

  $(window).on("load", function () {
    var preloader = $('#preloader');

    // Hide preloader and fade in content after a delay
    setTimeout(function () {
      preloader.fadeOut(500)
    }, 0); // Change the delay value as per your requirement

  });
  $(".banner").slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    fade: true,
    autoplay: false,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
  }).slickAnimation();

  // profile slider js
  $(".profile-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    autoplay: true,
    slidesToScroll: 1,
    prevArrow: '<i class="fas left arrow fa-chevron-left"></i>',
    nextArrow: '<i class="fas right arrow fa-chevron-right"></i>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });


  // news slider js
  $(".news-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    autoplay: false,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });

  // team slider js
  $(".team-slider")
    .slick({
      dots: false,
      infinite: true,
      speed: 800,
      arrows: true,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll: 1,
      prevArrow: '<i class="fas left arrow fa-chevron-left"></i>',
      nextArrow: '<i class="fas right arrow fa-chevron-right"></i>',
    })
    .slickAnimation();

  $(".company-slider")
    .slick({
      dots: false,
      infinite: true,
      speed: 800,
      arrows: true,
      slidesToShow: 4,
      autoplay: true,
      slidesToScroll: 1,
      prevArrow: '<i class="fas left arrow fa-chevron-left"></i>',
      nextArrow: '<i class="fas right arrow fa-chevron-right"></i>',
    })

  // back to top js
  var btn = $("#button");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
          scrollTop: 0,
        },
        2000
      );
    } else {
      $("html, body").animate({
          scrollTop: 0,
        },
        0
      );
    }
  });


  // Animation on scroll
  $(window).on("load", function () {
    setTimeout(() => {
      AOS.init({
        once: false,
      });
    }, 0);
  });
  $(".typed").typed({
    strings: ["Welcome to Masud Group", "Invest in quality, not quantity", ],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 100,
    // time before typing starts
    startDelay: 2000,
    // backspacing speed
    backSpeed: 20,
    // time before backspacing
    backDelay: 2000,
    // loop
    loop: true,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: "|",
  });

  // counter up js
  $('.counter').counterUp({
    delay: 50,
    time: 2000
  });

  // clients slider js
  $(".client-slider").slick({
    dots: false,
    infinite: true,
    autoplaySpeed: 0,
    speed: 1500,
    arrows: false,
    slidesToShow: 6,
    autoplay: true,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
  // mobile menu js
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-main').addClass('show-mobile-menu')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
  })
  $('.mobile-topbar .bars i').click(function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay')
  })
  $('.close-m-menu').click(function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
  })
  $('.mobile-menu-overlay').click(function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay')
  })
  $('.mobile-menu-overlay').click(function () {
    $('.mobile-menu-main').removeClass('show-mobile-menu')
  })

  $('.sub-menu ul').hide();
  $(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });


  // video popup js

  $('.vidplay').magnificPopup({
    type: 'iframe',
    iframe: {
      markup: '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '</div>',
      patterns: {
        youtube: {
          index: 'youtube.com/',
          id: 'v=',
          src: 'https://www.youtube.com/embed/%id%?autoplay=1'
        },
      },
      srcAction: 'iframe_src',
    }
  });

  // gallery popup js
  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    },
    removalDelay: 300,
    mainClass: 'mfp-fade',
  });

});