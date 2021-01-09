$(function() {
    //jquey for tool-tip in about section
    $('[data-bs-toggle="tooltip"]').tooltip();

    //jquey for contact form menu
    $( "#enviarCorreo" ).on( "click", function() {
        alert("El correo fue enviado correctamente.");
      });
    
    //jquey for scroll function to only sections 
    $('a[href*=\\#scroll]').on('click', function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top-90}, 900);
    });
    

 });
