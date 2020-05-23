

$(function() {
    $('.pane .btn, .pane .btn2').click(function (){
        $('.pane').toggleClass('open')
        return false;
    })

    $('.pane').click(function() {
        $('.pane').removeClass('open')
    })
})
