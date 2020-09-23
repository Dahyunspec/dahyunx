$(document).ready(function(){
    $('#team .team').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      centerMode: true,
      variableWidth: true,
      arrows: false,
      dots: false,
      responsive: true,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 3
        }
      }]
    });
  });