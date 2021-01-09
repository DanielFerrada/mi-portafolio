$(function() {
    $('[data-bs-toggle="tooltip"]').tooltip();

     $( "#enviarCorreo" ).on( "click", function() {
        alert("El correo fue enviado correctamente.");
      });

      $('a[href*=\\#]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top-90}, 900);
    });
    

 });
