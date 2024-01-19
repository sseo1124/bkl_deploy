// Initialize the main sliders
var photoSwiper = new Swiper('.photo-container .swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 6000
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  }
});

var ourStorySwiper = new Swiper('.ourstory-right .swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 6000
  },
  navigation: {
    prevEl: '.swiper-prev',
    nextEl: '.swiper-next'
  }
});

// Add event listeners to next and prev buttons
document.querySelector('.swiper-next').addEventListener('click', function () {
  photoSwiper.slideNext();
  ourStorySwiper.slideNext();
  photoSwiper.autoplay.start();
  ourStorySwiper.autoplay.start();
});

document.querySelector('.swiper-prev').addEventListener('click', function () {
  photoSwiper.slidePrev();
  ourStorySwiper.slidePrev();
  photoSwiper.autoplay.start();
  ourStorySwiper.autoplay.start();
});

// // // Use Swiper's controller option to synchronize sliders
photoSwiper.controller.control = ourStorySwiper;
ourStorySwiper.controller.control = photoSwiper;

$('.card- .swiper').each(function(index) {
  t = $(this);
  t.addClass('swiepr-' + index);

  let swiper = new Swiper( t, {
    autoplay: {
      delay: 0, //add
      disableOnInteraction: false,
    },
    speed: 5000,
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 5,
  });
});
