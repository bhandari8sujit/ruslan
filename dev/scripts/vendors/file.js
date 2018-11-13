//Check whether in viewport or not
$.fn.isOnScreen = function () {
  var win = $(window);
  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft()
  };
  viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};


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

  var handleCarouselSlide = function () {
    $('#insta-carousel').carousel({
      interval: false
    });
    $('#pv-carousel-4').carousel({
      interval: 10000
    });
  }

  return {
    init: function () {
      handleCarousel(); // initial setup for carousel      
      handleCarouselSlide();
    }
  };

})();

$(document).ready(function () {
  Ruslan.init();
  AOS.init();
});

$(window).scroll(function () {
  if ($(window).width() > 1200) {
    checkConditions();
  }
  $('.rs_navigation').css("opacity", "0");
  if ($(window).scrollTop() < 30) {
    $('.rs_navigation').css("opacity", "1");
  }
})

function isOnSecondSecondSection() {
  return $(".rs_story").isOnScreen();
}

var checkConditions = function () {
  if ($(".rs_banner").isOnScreen()) {
    handleBannerBottle();
  }
  if ($(".rs_story").isOnScreen()) {
    handleStoryBottle();
  }
  if ($(".rs_products").isOnScreen()) {
    handleProductsBottle();
  }
  if ($(".rs_parties").isOnScreen()) {
    handleUnderline();
  }
  if ($(".rs_insta").isOnScreen()) {
    handleUnderline();
  }
}

var handleBannerBottle = function () {
  $('.rs_banner-bottle1').css("right", 17 - 0.005 * window.pageYOffset + 'rem');
  $('.rs_banner-glass1').css("right", 4 - 0.005 * window.pageYOffset + 'rem');
  $('.rs_banner-glass2').css("right", 29 - 0.005 * window.pageYOffset + 'rem');
  // $('.rs_banner-logo').css("right", 8 - 0.005 * window.pageYOffset + 'rem');
}

var handleStoryBottle = function () {
  $('.rs_story-bottle1').css("right", 19 + 0.005 * window.pageYOffset + 'rem');
  $('.rs_story-bottle2').css("right", 1 + 0.005 * window.pageYOffset + 'rem');
  $('.rs_story-logo').css("top", -20 + 0.02 * window.pageYOffset + 'rem');

  // $('.rs_story .hr').css("width", 6.5 + 'rem');

}

function increaseSecondSectionTitleLine() {
  var titleWidth = $('.rs_story .content-title').width(),
    hrLineWidth = $('.rs_story .hr').width();
  if ($('.rs_story .hr').width() < titleWidth) {
    $('.rs_story .hr').css('width', $('.rs_story .hr').width() + 1.8 + 'px');
  }
}

function decreaseSecondSectionTitleLine() {
  hrLineWidth = $('.rs_story .hr').width();
  if ($('.rs_story .hr').width() > 72) {
    $('.rs_story .hr').css('width', $('.rs_story .hr').width() - 1.8 + 'px');
  }
}

var lastScrollTop = 0;
$(window).scroll(function (event) {
  var st = $(this).scrollTop();
  if (st > lastScrollTop) {
    if (isOnSecondSecondSection()) {
      increaseSecondSectionTitleLine();
    }
  } else {
    // upscroll code
    decreaseSecondSectionTitleLine();
  }
  lastScrollTop = st;
});


var handleProductsBottle = function () {
  $('.rs_products-bottle1').css("left", 18 + 0.005 * window.pageYOffset + 'rem');
  $('.rs_products-bottle2').css("left", 8 + 0.005 * window.pageYOffset + 'rem');
}

var handleUnderline = function () {

}
