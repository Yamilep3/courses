$(document).ready(function(){
    $('#mostrar').hide();

  /*  $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        $('#caja').show('fast');  // show: función para mostrar, fast: propiedad de velocidad y efecto de recogimineto u ocultamiento
    });
    
    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        $("#caja").hide('fast');  // hide: función para ocultar, fast: propiedad de velocidad y efecto de recogimineto u ocultamiento
        
    });
 */

    // ********* efecto fadeIn, fadeOut  **********
  /*  $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        $('#caja').fadeIn('slow');  // slow: Velocidad para el efecto fadeIn, fadeIn: Efecto de fundido al ocultar o mostrar objeto
    });

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        $("#caja").fadeOut('slow');  // slow: velocidad para el efecto fadeOut, fadeOut:  Efecto de fundido al ocultar o mostrar objeto
        
    });
  */

    // *********** efecto opacidad ************
   /* $('#mostrar').click(function(){
        $(this).hide();
        $('#ocultar').show();
        $('#caja').fadeTo('slow', 0.8);  // slow: Velocidad para el efecto fadeTo rango 0 a 1, fadeIn: Efecto de fundido al ocultar o mostrar objeto
    });

    $('#ocultar').click(function(){
        $(this).hide();
        $('#mostrar').show();
        $("#caja").fadeTo('slow', 0.2);  // slow: velocidad para el efecto fadeTo rango 0 a 1, fadeOut:  Efecto de fundido al ocultar o mostrar objeto   
    });
  */

    // efecto con un solo botón
    $('#todoenuno').click(function(){
        $('#caja').toggle('fast'); // toggle: efecto de preisonar una vez y oculta presiona nuevamnete y muestra
    });

});