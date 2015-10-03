$(document).ready(function  () {
  $('#predial').hide();
  $('#sat').hide();
  $('#btn-pass').on('click', function  () {
    $('#predial').show();
    $('#sat').hide();
    $('#inicio').hide();
    $(this).addClass('colored');
    $('#btn-inm').removeClass('colored');
  });
  $('#btn-inm').on('click', function  () {
    $('#predial').hide();
    $('#sat').show();
    $('#inicio').hide();
    $(this).addClass('colored');
    $('#btn-pass').removeClass('colored');
  });
})
