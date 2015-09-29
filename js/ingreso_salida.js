$(document).ready(function  () {
  $('#pasaporte').hide();
  $('#inm').hide();
  $('#btn-pass').on('click', function  () {
    $('#pasaporte').show();
    $('#inm').hide();
    $('#inicio').hide();
  });
  $('#btn-inm').on('click', function  () {
    $('#pasaporte').hide();
    $('#inm').show();
    $('#inicio').hide();
  });
})
