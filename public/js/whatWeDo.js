$(document).ready(function () {
  var whatWeDoPlay = $('.what-we-do img');

  whatWeDoPlay.one('click', function () {
    var gif = $('<img class="hacking" src="images/hacking_in_progress.gif"/>')
    whatWeDoPlay.closest('.what-we-do').append(gif);
    whatWeDoPlay.remove();
  });

});