$(document).ready(function  () {
  $('#CURP').hide();
  $('#acta_nacimiento').hide();
  $('#credencial_votar').hide();
  $('#btn-act').on('click', function  () {
    $('#acta_nacimiento').show();
    $('#credencial_votar').hide();
    $('#principal').hide();
    $('#CURP').hide();
    $(this).addClass('colored');
    $('#btn-CURP').removeClass('colored');
    $('#btn-cre').removeClass('colored');
   
 
  });
  $('#btn-CURP').on('click', function  () {
     $('#acta_nacimiento').hide();
    $('#credencial_votar').hide();
    $('#principal').hide();
    $('#CURP').show();
    $(this).addClass('colored');
    $('#btn-act').removeClass('colored');
    $('#btn-cre').removeClass('colored');  });


    $('#btn-cre').on('click', function  () {
     $('#acta_nacimiento').hide();
    $('#credencial_votar').show();
    $('#principal').hide();
    $('#CURP').hide();
    $(this).addClass('colored');
    $('#btn-act').removeClass('colored');
    $('#btn-CURP').removeClass('colored');  });

    
})
