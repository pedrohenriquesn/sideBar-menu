$(document).ready(function() {

    $( document.body ).on( "click", ".box-consumo", function(){
        image = $( this ).find( '.img-opcao' )
        $(image).toggleClass('box-selected', 1000, "easeOutSine");
    });


});
