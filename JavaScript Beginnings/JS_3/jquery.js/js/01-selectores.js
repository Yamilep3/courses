'use strict'

$(document).ready(function(){
   //Selector ID
   $('#rojo').css('background', 'red')
                        .css('color', 'white');

   $('#amarillo').css('background', 'yellow')
                                .css('color', 'green');
   
   $('#verde').css('background', 'green')
              .css('color', 'white');
    
   // Selectores de clases
   var mi_clase = $('.zebra');
   mi_clase.css('border', '2px dashed black');
   $('.sin_borde').click(function(){
       console.log('Se hizo click!!');
       $(this).addClass('zebra');       
   });

   // Selectores de etiqueta
   var parrafos = $('p').css('cursor', 'pointer');
   parrafos.click(function(){
       var that = $(this);

       if (!that.hasClass('grande')){   // if no
            that.addClass('grande');
       }else {
           that.removeClass('grande');
       }
   });
});