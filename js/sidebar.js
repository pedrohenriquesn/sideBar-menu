$(document).ready(function() {
    window.onload = function(){
        var data = new Date();
        diaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
        mesAno = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
        $('.dia').html(data.getDate())
        $('.mes').html(mesAno[data.getMonth()])
        $('.sem').html(diaSemana[data.getDay()])
    }

    $( document.body ).on( "click", ".hideShowBar", function(){
        hideShowBar()
    });
    function hideShowBar() {
        $('.bar-page').toggleClass('bar-page-min', 400, "easeOutSine")
        $('.body-page').toggleClass('body-page-min', 400, "easeOutSine")
        $('.line-desc').toggleClass('line-desc-min')
        $('.line-icon').toggleClass('line-icon-min')
        $('.img-logo-max').toggle(400)
        $('.img-logo-min').toggle(400)
    }


});
