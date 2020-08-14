

    window.silex = window.silex || {}
    window.silex.data = {"site":{"width":1278},"pages":[{"id":"page-carole-mettavant-presentation","displayName":"Carole Mettavant - presentation","link":{"linkType":"LinkTypePage","href":"#!page-carole-mettavant-presentation"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false},{"id":"page-en-savoir-plus","displayName":"en savoir plus","link":{"linkType":"LinkTypePage","href":"#!page-en-savoir-plus"},"canDelete":true,"canProperties":true,"canMove":true,"canRename":true,"opened":false}]}

$(function() {
    $('.pane .btn, .pane .btn2').click(function (){
        $('.pane').toggleClass('open')
        return false;
    })

    $('.pane').click(function() {
        $('.pane').removeClass('open')
    })
})
