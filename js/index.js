const miniModal = $("#miniModal");
let modalVisible = false;
let hoverTimeout;

// Function to show modal
function showModal(currentPoster) {
  const title = currentPoster.data("title");
  const tags = currentPoster.data("tags");
  const img = currentPoster.data("img");
  const progress = currentPoster.data("progress");

  $("#modalTitle").text(title);
  $("#modalTags").text(tags);
  $("#modalImg").attr("src", img);
  $("#modalProgress").css("width", progress + "%");

  miniModal.addClass("delayed");

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
  });

  miniModal.addClass("show");
  modalVisible = true;
}

// Hover enter
$(".poster").on("mouseenter", function () {
  const currentPoster = $(this);

  clearTimeout(hoverTimeout);

  if (modalVisible) {
    // First hide the old modal
    miniModal.removeClass("show delayed");
    modalVisible = false;

    // Wait for the hide transition to finish, then show new one
    hoverTimeout = setTimeout(() => {
      showModal(currentPoster);
    }, 300); // matches your CSS transition time
  } else {
    showModal(currentPoster);
  }
});

// Hover leave
$(".poster-carousel, #miniModal").on("mouseleave", function () {
  setTimeout(() => {
    if (!$(".poster-carousel:hover").length && !$("#miniModal:hover").length) {
      miniModal.removeClass("show delayed");
      modalVisible = false;
    }
  }, 150);
});

miniModal.on("mouseenter", function () {
  modalVisible = true;
  miniModal.addClass("show");
});

miniModal.on("mouseleave", function () {
  setTimeout(() => {
    if (!$(".poster-carousel:hover").length && !$("#miniModal:hover").length) {
      miniModal.removeClass("show delayed");
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
  slidesToScroll: 2,
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
