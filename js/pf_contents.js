$(document).ready(function () {
    var currentSlide = 0;
    var totalSlides = $('.slide').length;

    function showSlide(index) {
      if (index < 0) {
        currentSlide = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentSlide = 0;
      } else {
        currentSlide = index;
      }

      var translateValue = -currentSlide * 100 + '%';
      $('.slide-container').css('transform', 'translateX(' + translateValue + ')');
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    var autoplayInterval = setInterval(nextSlide, 3000);

    $('.slide-container').hover(
      function () {
        clearInterval(autoplayInterval);
      },
      function () {
        autoplayInterval = setInterval(nextSlide, 3000);
      }
    );
  });


$(document).ready(function () {
$(".custom-carousel .item").click(function () {
    $(".custom-carousel .item").not($(this)).removeClass("active");
    $(this).toggleClass("active");
});
});
