
$(window).scroll(function(){
  if(window.scrollY != 0) {
    $('nav').addClass('nav-changedStyle')
    $('.logo img').attr('src', '/img/logo/bkl_logo2.png');
  } else {
    $('nav').removeClass('nav-changedStyle')
    $('.logo img').attr('src', '/img/logo/bkl_logo_white.png');

  }
});