$(function() {

  $('#myModalTC').modal(options);
  $('#myModalHitos').modal(options);
  $('#myModalTCvideo').modal(options);
  

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

    //jquey change word
    var count = 0;
    var wordsArray = ["Creatividad", "imaginación", "Facilitación", "Usabilidad"];
    setInterval(function () {
    count++;
    $("#change-word").fadeOut(function () {
      $(this).text(wordsArray[count % wordsArray.length]).fadeIn();
    });
    }, 3000);

    
    

 });
