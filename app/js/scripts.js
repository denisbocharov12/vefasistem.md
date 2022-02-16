$(document).ready(function () {
    $('.partners-slider').slick({
        autoplay: true,
        dots: false,
        autoplaySpeed: 8000,
        speed: 1000,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 6,
        arrows: false,
        cssEase: "ease-out",
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    $('.tab-slider').slick({
      autoplay: false,
      dots: true,
      autoplaySpeed: 5000,
      speed: 1000,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      cssEase: "ease-out",
    });
    $('.portfolio-slider').slick({
        autoplay: true,
        dots: false,
        autoplaySpeed: 5000,
        speed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        cssEase: "ease-out",
        prevArrow:"<i class='icon-arrow-link prev-arrow'></i>",
        nextArrow:"<i class='icon-arrow-link next-arrow'></i>",
    });
    $('.item-slider').slick({
      autoplay: false,
      dots: false,
      autoplaySpeed: 5000,
      speed: 1000,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      cssEase: "ease-out",
      prevArrow:"<i class='icon-arrow-link prev-arrow'></i>",
      nextArrow:"<i class='icon-arrow-link next-arrow'></i>",
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
    $('.tehnika-slider').slick({
        autoplay: true,
        dots: true,
        autoplaySpeed: 5000,
        speed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        cssEase: "ease-out",
    });
    $('.main-slider').slick({
        autoplay: false,
        dots: false,
        autoplaySpeed: 5000,
        speed: 1000,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '',
        nextArrow: '',
        cssEase: "ease-out",
        asNavFor: '.services-slider'
    });
    $('.services-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: false,
        asNavFor: '.main-slider',
        arrows: false,
        infinite: false,
        centerMode: false,
        speed: 1000,
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });
    (function scrollReveal() {
        window.sr = ScrollReveal();
        sr.reveal('.services-item-left', {
          duration   : 500,
          distance   : '300px',
          easing     : 'ease-out',
          origin     : 'bottom',
          reset      : false,
          interval: 200,
          opacity: 0 ,
          scale      : 1,
          viewFactor : 1,
        }, 150);
        sr.reveal('.services-item-right', {
            duration   : 500,
            distance   : '300px',
            easing     : 'ease-out',
            origin     : 'right',
            reset      : false,
            interval: 200,
            opacity: 0 ,
            scale      : 1,
            viewFactor : 1,
        }, 150);
        sr.reveal('.services-image.active', {
            duration   : 1250,
            distance   : '700px',
            easing     : 'ease-out',
            origin     : 'bottom',
            reset      : false,
            interval: 250,
            opacity: 0 ,
            scale      : 1,
            viewFactor : 1,
        }, 150);
        sr.reveal('.footer-form', {
          duration   : 500,
          distance   : '500px',
          easing     : 'ease-out',
          origin     : 'bottom',
          reset      : false,
          interval: 250,
          opacity: 0 ,
          scale      : 1,
          viewFactor : 0,
        }, 150);
        sr.reveal('.experience-item', {
          duration   : 500,
          distance   : '500px',
          easing     : 'ease-out',
          origin     : 'bottom',
          reset      : false,
          interval: 250,
          opacity: 0 ,
          scale      : 1,
          viewFactor : 0,
        }, 150);
        sr.reveal('.solutions-display', {
          duration   : 500,
          distance   : '500px',
          easing     : 'ease-out',
          origin     : 'left',
          reset      : false,
          scale      : 1,
          viewFactor : 0,
        }, 150);
      })();
      if(window.matchMedia('(max-width: 1560px)').matches){ 
        var size = 60,
            newsContent= $('#list .row-list .list-item .content-block h2'),
            newsText = newsContent.text();
            
        if(newsText.length > size){
          newsContent.text(newsText.slice(0, size) + ' ...');
        }
      }
      if(window.matchMedia('(max-width: 450px)').matches){
        (function(){
          $(".flex-slide").each(function(){
              $(this).hover(function(){
                  $(this).find('.flex-title').css({
                      transform: 'rotate(0deg)',
                      top: '25%'
                  });
                  $(this).find('.flex-about').css({
                      opacity: '1'
                  });
              }, function(){
                  $(this).find('.flex-title').css({
                      transform: 'rotate(90deg)',
                      top: '23vw',
                  });
                  $(this).find('.flex-about').css({
                      opacity: '0'
                  });
              })
          });
        })();
      }
      if(window.matchMedia('(max-width: 992px)').matches){
        (function(){
          $(".flex-slide").each(function(){
              $(this).hover(function(){
                  $(this).find('.flex-title').css({
                      transform: 'rotate(0deg)',
                      top: '25%'
                  });
                  $(this).find('.flex-about').css({
                      opacity: '1'
                  });
              }, function(){
                  $(this).find('.flex-title').css({
                      transform: 'rotate(90deg)',
                      top: '9vw',
                  });
                  $(this).find('.flex-about').css({
                      opacity: '0'
                  });
              })
          });
        })();
      } else {
        (function(){
          $(".flex-slide").each(function(){
              $(this).hover(function(){
                  $(this).find('.flex-title').css({
                      transform: 'rotate(0deg)',
                      top: '25%'
                  });
                  $(this).find('.flex-about').css({
                      opacity: '1'
                  });
              }, function(){
                  $(this).find('.flex-title').css({
                      transform: 'rotate(90deg)',
                      top: '12vw',
                  });
                  $(this).find('.flex-about').css({
                      opacity: '0'
                  });
              })
          });
        })();
      }
      
});
//HEADER
$(window).scroll(function() {
    var header = $(document).scrollTop();
    var headerHeight = $("#header").outerHeight();
    if (header > headerHeight) {
      $(".main #header").addClass("fixed");
    } else {
      $(".main #header").removeClass("fixed");
    }
    if (header > 250) {
      $(".main #header").addClass("in-view");
    } else {
      $(".main #header").removeClass("in-view");
    }
    if (header > headerHeight) {
      $(".page #header").addClass("fixed");
    } else {
      $(".page #header").removeClass("fixed");
    }
    if (header > 250) {
      $(".page #header").addClass("in-view");
    } else {
      $(".page #header").removeClass("in-view");
    }
});
(function($) {
  $(function() {
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
        $('.tab-slider').slick('refresh');
    });
  });
})(jQuery);

$(document).on('mouseenter', '.items-block .teh-item', function (event) {
  if ($('.items-block .teh-item.selected').length === 0) {
      $('.teh-slider-item').removeClass('active');
      let dataId = $(event.target).data('id');
      $('#tehnika .row-main').find("[data-id='" + dataId + "']").addClass('active');
      $(".items-block .teh-item").click(function () {
          $('.items-block').find('.teh-item.selected').removeClass('selected');
          $(this).toggleClass('selected');
      });
  }
}).on('click touchstart', '.items-block .teh-item', function () {
  if ($('.items-block .teh-item.selected').length > 0) {
      $('.teh-slider-item').removeClass('active');
      let dataId = $('.items-block .teh-item.selected').data('id');
      $('#tehnika .row-main').find("[data-id='" + dataId + "']").addClass('active');
  }
}).on('mouseleave', '.items-block', function () {
  if ($('.items-block .teh-item.selected').length > 0) {
      $('.teh-slider-item').removeClass('active');
      let dataId = $('.items-block .teh-item.selected').data('id');
      $('#tehnika .row-main').find("[data-id='" + dataId + "']").addClass('active');
  }
});

$(document).on('mouseenter', '#services .services-item', function (event) {
  if ($('#services .services-item.selected').length === 0) {
      $('.services-image').removeClass('active');
      let dataId = $(event.target).data('id');
      $('#services .services-block').find("[data-id='" + dataId + "']").addClass('active');
      $("#services .services-item").click(function () {
          $('.items-block').find('.teh-item.selected').removeClass('selected');
          $(this).toggleClass('selected');
      });
  }
}).on('click touchstart', '#services .services-item', function () {
  if ($('#services .services-item.selected').length > 0) {
      $('.services-image').removeClass('active');
      let dataId = $('#services .services-item.selected').data('id');
      $('#services .services-block').find("[data-id='" + dataId + "']").addClass('active');
  }
}).on('mouseleave', '.items-block', function () {
  if ($('#services .services-item.selected').length > 0) {
      $('.services-image').removeClass('active');
      let dataId = $('#services .services-item.selected').data('id');
      $('#services .services-block').find("[data-id='" + dataId + "']").addClass('active');
  }
});
$(document).on('mouseenter', '.items-block .teh-item', function () {
  let dataId = $(this).data('id');
  $('.items-block .teh-item').find('h5').removeClass('active');
  $(this).find('h5').addClass('active');
  $('#'+ dataId + '').addClass('active');
  $('.tehnika-slider').slick('refresh');
}).on('mouseleave', '.items-block .teh-item', function () {
  let dataId = $(this).data('id');
  $('#'+ dataId + '').removeClass('active');
  $('.tehnika-slider').slick('refresh');
});
$(".items-block .teh-item").click(function(){
  $('.items-block').find('.teh-item.active').removeClass('active');
  $(this).toggleClass('active');
});

$(document).on('click', '.toggle-menu', function(){
  $(this).toggleClass('on');
  $('.hidden-menu').slideToggle();
  if ($(this).hasClass('on')) {
    $("#header").addClass("header-media");
    $("#header").find('.logo-image').attr('src', 'assets/img/black-logo.svg')
  } else {
    $("#header").removeClass("header-media");
    if ($("#header").hasClass('in-view')) {
      $(".header-sticky").find('.logo-image').attr('src', 'assets/img/black-logo.svg')
    } else {
      $("#header").find('.logo-image').attr('src', 'assets/img/white-logo.svg')
    }
  }

  return false; // non important
});

$(document).on('click', '.transport-menu', function(){
  $(this).toggleClass('on');
  
  $('.tabs__caption_menu').slideToggle('slow');       
});