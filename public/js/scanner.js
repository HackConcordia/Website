$(document).ready(function () {
  var scanner = $('.scanner');

  scan();

  function scan () {
    scanner.velocity({
      left: '100%'
    }, {
      easing: 'linear',
      duration: 15000,
      complete: function () {
        scanner.css('left', -scanner.outerWidth());
        scan();
      }
    });
  }
});