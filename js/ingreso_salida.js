$(document).ready(function  () {
  $('#pasaporte').hide();
  $('#inm').hide();
  $('#btn-pass').on('click', function  () {
    $('#pasaporte').show();
    $('#inm').hide();
    $('#inicio').hide();
    $(this).addClass('colored');
    $('#btn-inm').removeClass('colored');
  });
  $('#btn-inm').on('click', function  () {
    $('#pasaporte').hide();
    $('#inm').show();
    $('#inicio').hide();
    $(this).addClass('colored');
    $('#btn-pass').removeClass('colored');
  });
})
