$(document).ready(()=>{

    const $container = $('#container_form');
    const $form = $('#formulario');
    const $cargos_menu = $('#lista_de_cargos');
    const $viwer = $('#container_visualizacao');

    $('#inputNome').keyup(function(){
        var nome = $(this).val();
        $('#nomeV').text(nome);
    });

    $('#inputEmail').keyup(function(){
        var email = $(this).val();
        $('#emailV').text(email);
    });

    $('#lista_de_cargos').change(function(){
        var cargo = $(this).val();
        $('#cargoV').text(cargo);
    });


 $viwer.hide();
 $form.on("keydown",() => {
    $viwer.fadeIn(1000)
  })


  $('#imagemInput').change(function(event){
    var arquivo = event.target.files[0];
    var leitor = new FileReader();
    leitor.onload = function(e) {
        $('#imgPerfilV').attr('src', e.target.result);
    }

    leitor.readAsDataURL(arquivo).fadeIn(1000);
   
    $(this).next('.custom-file-label').html(arquivo.name);
});

});

