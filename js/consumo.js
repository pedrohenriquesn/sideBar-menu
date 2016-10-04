
$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    $( document.body ).on( "click", ".box-option", function(){
        image = $(this).find('.icon-option')
        text = $(this).find('.text-option')
        $(this).toggleClass('box-selected', 300, "easeOutSine");
        $(image).toggleClass('icon-selected', 500, "easeOutSine");
        $(text).toggleClass('text-selected', 500, "easeOutSine");
    });
});
