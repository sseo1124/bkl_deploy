const infoBoxItem =  $('.infoBox-item')

$(document).ready(function() {
  infoBoxItem.click(function() {
    infoBoxItem.not($(this)).removeClass('active')
    $(this).addClass('active');
  })
})