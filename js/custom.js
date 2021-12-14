$(".slick-carousel").slick({
  speed: 500,
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  dots: false,
  centerMode: false,
  arrows: true,
  responsive: [{
      breakpoint: 1920,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

// Mobile Menu 
$('.menu-dots').click(function () {
  $('.menu-dots').css({
    'transition': '0.3s ease-in-out',
    'opacity': '0',
    'visibility': 'hidden'
  });
  $('.cross').css({
    'visibility': 'visible',
    'transition': '0.3s ease-in-out',
    'opacity': '1'
  });
  $('.menu-wrapper').css({
    'visibility': 'visible',
    'opacity': '1',
    'z-index': '5'
  });
});
$('.cross').click(function () {
  $('.cross').css({
    'transition': '0.3s ease-in-out',
    'opacity': '0',
    'visibility': 'hidden'
  });
  $('.menu-dots').css({

    'transition': '0.3s ease-in-out',
    'opacity': '1',
    'visibility': 'visible'
  });
  $('.menu-wrapper').css({
    'visibility': 'hidden',
    'opacity': '0',
    'z-index': '-1'
  });
});
// Mobile Menu 

//Scroll
const nav = document.querySelector(".header-section-wrapper");
const mmenu = document.querySelector(".menu-wrapper");
let lastScrollY = window.scrollY;
window.addEventListener("scroll", () => {
  if (lastScrollY < window.scrollY) {
      nav.style.transform = "translateY(-100px)";
      nav.style.top = "-100px";
  } else {
    nav.style.transform = "translateY(0px)";
    nav.style.top = "0px";
  }
  lastScrollY = window.scrollY;
});
//Scroll


function goBack() {
  window.history.back();
}

$("#sidebarCollapse").on("click", function () {
  // $("#sidebar").toggleClass("mactive");
  if ($("#sidebar").css("left") == "-250px") {
      $("#sidebar").css({
          left: "0px"
      });
      $(".burgur").css({
          display: "none"
      });
      $(".cross").css({
          display: "block"
      });
  } else {
      $("#sidebar").css({
          left: "-250px"
      });
  }
});
$("#cross").on("click", function () {
  // $("#sidebar").toggleClass("mactive");
  if ($("#sidebar").css("left") == "0px") {
      $("#sidebar").css({
          left: "-250px"
      });
      $(".burgur").css({
          display: "block"
      });
      $(".cross").css({
          display: "none"
      });
  } else {
      $("#sidebar").css({
          left: "-250px"
      });
  }
});

$(document).click(function (e) {
  var container = $("#sidebar");
  // If the target of the click isn't the container
  if (!$("#sidebar").is(e.target) && $("#sidebar").has(e.target).length === 0) {
      if ($("#sidebar").css("left") == "0px") {
          $("#sidebar").css({
              left: "-250px"
          });
          $(".burgur").css({
              display: "block",
              visibility: "visible",
              opacity: "1"

          });
          $(".cross").css({
              display: "none"
          });
      }
  }
});