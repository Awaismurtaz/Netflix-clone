

$(document).ready(function () {
  $(".trending-movie-slider").slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: true,
    infinite: false,
    dots: false,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });
});

// movies slider

$(document).ready(function () {
  $(".movies__slider").slick({
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    infinite: false,
    dots: true,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  });
});

const header = document.querySelector(".site-header");

if (header) {
  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;
    const pageHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const tenPercent = pageHeight * 0.1;

    header.classList.toggle("sticky_header", scrollPosition > tenPercent);
  });
}

