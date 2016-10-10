$(document).ready(function() {

    $(document.body).on("click", "#consumo", function(){
        $.ajax({
            url: '/pages/optionsConsumo.html',
            type: 'GET',
            success: function(res) {

                var copy = document.createElement("DIV")
                copy.innerHTML = res;
                var contentCopy = $(copy).find('#optionsConsumo')
                $("#glue-options").html(contentCopy, 1000)
            }
        });
    });


});
