
var Ruslan = (function () {
  // handle carousel
  var handleCarousel = function () {
    var $item = $(".pv-carousel-4__carousel-inner .item");
    $item.eq(0).addClass("active");
    $item.addClass("full-screen");

    $(".carousel img").each(function () {
      var $src = $(this).attr("src");
      var $color = $(this).attr("data-color");
      $(this)
        .parent()
        .css({
          "background-image": "url(" + $src + ")",
          "background-color": $color,
          "background-blend-mode": "multiply"
        });
      $(this).remove();
    });
  };

  var progressiveLoading = function () {
    console.log("Progressive loading....");
  };

  var handleInstaCarouselSlide = function () {
    $('#insta-carousel').carousel({
      interval: false
    });
  }
  var handleNaviagation = function () {

  }

  return {
    init: function () {
      handleCarousel(); // initial setup for carousel
      progressiveLoading(); //Progressive loading for banner images
      handleInstaCarouselSlide();
      handleNaviagation();
    }
  };
})();

$(document).ready(function () {
  Ruslan.init();
});

$(window).scroll(function () {
  handleScroll();
})

function handleScroll() {
  console.log("scroll vayo hai");
}
