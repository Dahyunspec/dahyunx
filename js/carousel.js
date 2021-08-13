$(document).ready(function(){
    $('#clients .customer-logos').slick({
      slidesToShow: 6,
      slidesToScroll: 2,
      autoplay: true,
      autoplaySpeed: 1000,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 6
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 6
        }
      }]
    });
  });