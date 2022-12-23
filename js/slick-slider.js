// Hero slider //

$(document).ready(function(){
  $('.hero-slider').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 8200,
    speed: 1000,
    infinite: true,
    draggable: true,
    arrows: false,
    useTransform:true,
    responsive: [
      {
        breakpoint: 550,
        settings: {
          dots: false
        }
      }
    ]
  });
});

var percentTime;
    var tick;
    var time = 1;
    var progressBarIndex = 0;

    $('.progressBarContainer .progressBar').each(function(index) {
        var progress = "<div class='inProgress inProgress" + index + "'></div>";
        $(this).html(progress);
    });

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if (($('.hero-slider .slick-track div[data-slick-index="' + progressBarIndex +  '"]').attr("aria-hidden")) === "true") {
            progressBarIndex = $('.hero-slider .slick-track div[aria-hidden="false"]').data("slickIndex");
            startProgressbar();
        } else {
            percentTime += 1 / (time + 7.2);
            $('.inProgress' + progressBarIndex).css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $('.hero-slider').slick('slickNext');
                progressBarIndex++;
                if (progressBarIndex > 2) {
                    progressBarIndex = 0;
                }
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $('.inProgress').css({
            width: 0 + '%'
        });
        clearInterval(tick);
    }
    startProgressbar();
    // End ticking machine

    $('.progressBarContainer div').click(function () {
      clearInterval(tick);
      var goToThisIndex = $(this).find("span").data("slickIndex");
      $('.hero-slider').slick('slickGoTo', goToThisIndex, false);
      startProgressbar();
    });


// Slider cards, types of law //

$(document).ready(function(){
$('.slider-cards-items').slick({
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 5,
  draggable: true,
  swipeToSlide: true,
  prevArrow: '.arrow_prev',
  nextArrow: '.arrow_next',
  responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 1190,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 976,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        prevArrow: false,
        nextArrow: false,
        dots: true,
        dotsClass: "slider_cards_dots",
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
});

// Testimonials slider //

$(document).ready(function(){
  $('.slider-testimonials-items').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1000,
    slidesToShow: 1,
    draggable: true,
    swipeToSlide: true,
    dots:true,
    arrows: false,
    dotsClass: "slider_cards_dots",
  });
  });

// Five slider logos //

  $(document).ready(function(){
    $('.slider-five-col-items').slick({
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 1000,
      slidesToShow: 5,
      draggable: true,
      swipeToSlide: true,
      responsive: [
        {
          breakpoint: 1190,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true
          }
        },
        {
          breakpoint: 976,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    });