
$(document).ready(function() {

    $('[data-toggle="tooltip"]').tooltip();

    $( document.body ).on( "click", ".box-option", function(){
        exibiForm = this.getAttribute('data-form')
        $('.contentbox').find('.box-selected').toggleClass('box-selected', 300, "easeOutSine")
        $(this).toggleClass('box-selected', 300, "easeOutSine");
    });
});
