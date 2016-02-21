$(document).ready(function () {
   playtheme();

function playtheme () {
  $('#playtheme')[0].volume = 0.9;
  $('#playtheme')[0].load();
  $('#playtheme')[0].play();
  }
});

