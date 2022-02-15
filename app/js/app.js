$(document).ready(function(){
    // Header Start
    $(window).scroll(function() {
        var header = $(document).scrollTop();
        var headerHeight = $("header").outerHeight();
        if(window.matchMedia('(min-width: 992px)').matches){
          if (header > headerHeight) {
            $("header").addClass("fixed");
            $('header .section_header .col-header-info .header-widjet-element.header-media-menu').fadeIn(100);
          } else {
            $("header").removeClass("fixed");
            $('header .section_header .col-header-info .header-widjet-element.header-media-menu').fadeOut(100);
  
          }
        }
    });
    // Header End
    // Menu
    $('.open-menu-after-header').click(function(){
      $('.sidebar-after-header').toggleClass('sidebar-menu-show');
      $('.col-header-menu-social').toggleClass('add-bg');
      $('body').toggleClass('hidden')
    });
    $('.open-primary-menu').click(function(){
      $('.sidebar-primary').toggleClass('sidebar-menu-show');
      $('body').toggleClass('hidden')
    });
    $('.sidebar-nav-menu .menu-item-has-children .link').click(function(e){
      e.preventDefault();
      $(this).next('.sub-menu').toggleClass('sub-menu-show');
    });
    // End Menu
    $('.wrap-home-slider').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 8000,
        speed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        swipe: true,
        prevArrow: "<div class='slider-theme-arrows prev'><i class='fa fa-chevron-left prev-arrow'></i></div>",
        nextArrow: "<div class='slider-theme-arrows next'><p>Вперед</p><i class='fa fa-chevron-right next-arrow'></i></div>",
        cssEase: 'ease-out',
        responsive: [
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
            },
        },
        ],
    });
    $('.categories-slider-init').slick({
        autoplay: false,
        dots: false,
        autoplaySpeed: 8000,
        speed: 1000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        swipe: false,
        centerMode: true,
        centerPadding: '0px',
        prevArrow: "<div class='slider-theme-arrows prev'><i class='fa fa-chevron-right prev-arrow'></i><p>Назад</p></div>",
        nextArrow: "<div class='slider-theme-arrows next'><p>Вперед</p><i class='fa fa-chevron-right next-arrow'></i></div>",
        cssEase: 'ease-out',
        responsive: [
        {
            breakpoint: 992,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
            dots: true,
            swipe: true
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
            arrows: false,
            dots: true,
            swipe: true
            },
        },
        ],
    });
    $('.products-slider-init').slick({
        autoplay: false,
        dots: false,
        autoplaySpeed: 8000,
        speed: 1000,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        swipe: true,
        prevArrow: "<div class='slider-theme-arrows prev'><i class='fa fa-chevron-left prev-arrow'></i></div>",
        nextArrow: "<div class='slider-theme-arrows next'><p>Вперед</p><i class='fa fa-chevron-right next-arrow'></i></div>",
        cssEase: 'ease-out',
        responsive: [
        {
            breakpoint: 1400,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            swipe: true
            },
        },
        {
            breakpoint: 576,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            swipe: true
            },
        },
        {
            breakpoint: 380,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            swipe: true
            },
        },
        ],
    });
    $('.works-slider').slick({
        autoplay: false,
        dots: false,
        autoplaySpeed: 8000,
        speed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: true,
        cssEase: 'ease-out',
        fade: true,
        asNavFor: '.thumb-works-slider',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                asNavFor: false,
                dots: true,
                arrows: false,
                fade: false
                },
            }
        ]
      });
      $('.thumb-works-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.works-slider',
        dots: true,
        prevArrow: "<div class='slider-theme-arrows prev'><i class='fa fa-chevron-left prev-arrow'></i></div>",
        nextArrow: "<div class='slider-theme-arrows next'><p>Вперед</p><i class='fa fa-chevron-right next-arrow'></i></div>",
        cssEase: 'ease-out',
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true
      });
});
Fancybox.bind('[data-fancybox="gallery"]', {
    dragToClose: false,
  
    Toolbar: false,
    closeButton: "top",
  
    Image: {
      zoom: false,
    },
  
    on: {
      initCarousel: (fancybox) => {
        const slide = fancybox.Carousel.slides[fancybox.Carousel.page];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
      "Carousel.change": (fancybox, carousel, to, from) => {
        const slide = carousel.slides[to];
  
        fancybox.$container.style.setProperty(
          "--bg-image",
          `url("${slide.$thumb.src}")`
        );
      },
    },
  });
$(document).ready(function(){

});
$(function() {
  $('a.scroll-to-btn[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 300, 'linear');
  });
});