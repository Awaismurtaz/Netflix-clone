
  const miniModal = $("#miniModal");
  let modalVisible = false;

  $(".poster").on("mouseenter", function () {
    const currentPoster = $(this);
    const title = currentPoster.data("title");
    const tags = currentPoster.data("tags");
    const img = currentPoster.data("img");
    const progress = currentPoster.data("progress");

    // Update modal content
    $("#modalTitle").text(title);
    $("#modalTags").text(tags);
    $("#modalImg").attr("src", img);
    $("#modalProgress").css("width", progress + "%");

    // Always apply the delayed class for animation
    miniModal.addClass("delayed");

    // Show modal invisibly to get size
    miniModal
      .css({
        opacity: 0,
        transform: "scale(1) translateY(0)",
        pointerEvents: "none",
        display: "block",
        top: 0,
        left: 0,
        position: "absolute",
      })
      .addClass("show");

    const offset = currentPoster.offset();
    const posterWidth = currentPoster.outerWidth();
    const posterHeight = currentPoster.outerHeight();
    const modalWidth = miniModal.outerWidth();
    const modalHeight = miniModal.outerHeight();

    const modalLeft = offset.left + (posterWidth - modalWidth) / 2;
    const modalTop = offset.top + (posterHeight - modalHeight) / 2;

    miniModal.css({
      top: modalTop + "px",
      left: modalLeft + "px",
      opacity: 1,
      pointerEvents: "auto",
    });

    modalVisible = true;
  });

  $(".poster-carousel, #miniModal").on("mouseleave", function () {
    setTimeout(() => {
      if (!$(".poster-carousel:hover").length && !$("#miniModal:hover").length) {
        miniModal.removeClass("show delayed").css("display", "none");
        modalVisible = false;
      }
    }, 150);
  });

  miniModal.on("mouseenter", function () {
    modalVisible = true;
    miniModal.addClass("show").css("display", "block");
  });

  miniModal.on("mouseleave", function () {
    setTimeout(() => {
      if (!$(".poster-carousel:hover").length && !$("#miniModal:hover").length) {
        miniModal.removeClass("show delayed").css("display", "none");
        modalVisible = false;
      }
    }, 500);
  });




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

$(".movies__slider").slick({
  centerMode: true,
  centerPadding: "50px",
  slidesToShow: 6,
  slidesToScroll: 2, // default desktop scroll
  arrows: true,
  dots: true,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>',
  responsive: [
    {
      breakpoint: 1600, // large laptops
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        centerPadding: "50px",
      },
    },
    {
      breakpoint: 1200, // medium laptops
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        centerPadding: "50px",
      },
    },
    {
      breakpoint: 1024, // tablets landscape
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
        centerPadding: "40px",
      },
    },
    {
      breakpoint: 768, // tablets portrait
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerPadding: "40px",
      },
    },
  ],
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
