$(document).ready(function () {
  var menu  = $('.menu');
  var hammy = $('.hamburger');
  var links = menu.find('li a');
  var nav   = menu.find('nav');

  hammy.on('click', function () {
    toggleMenu();
  });

  links.on('click', function () {
    if (hammy.is(':visible')) {
      toggleMenu();
    }
  });

  function toggleMenu () {
    var isFull = menu.hasClass('full');

    menu.velocity({
      'height': (isFull)? '3em' : '100%'
    },{
      duration: 400,
      begin: function () {
        if (isFull) {
          menu.removeClass('full');
        }
      },
      complete: function () {
        if (!isFull) {
          menu.addClass('full');
        }
      }
    });
  }
});