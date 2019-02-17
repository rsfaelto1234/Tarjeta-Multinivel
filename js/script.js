$('.container-specifications, .container-component, .container-trailer').hide();

$('.icon-images').on('click', function(){
    
    $('.container-gallery').fadeIn();
    $('.container-specifications, .container-component, .container-trailer').fadeOut();
    
    $(this).css("color", "#EB5100");
    
    $('.icon-text-document, .icon-tools, .icon-video').css("color", "#7A7A7A");
})


$('.icon-text-document').on('click', function(){
    
    $('.container-specifications').fadeIn();
    $('.container-gallery, .container-component, .container-trailer').fadeOut();
    
    $(this).css("color", "#EB5100");
    
    $('.icon-images, .icon-tools, .icon-video').css("color", "#7A7A7A");
})


$('.icon-tools').on('click', function(){
    
    $('.container-component').fadeIn();
    $('.container-gallery, .container-specifications, .container-trailer').fadeOut();
    
    $(this).css("color", "#EB5100");
    
    $('.icon-images, .icon-text-document, .icon-video').css("color", "#7A7A7A");
})

$('.icon-video').on('click', function(){
    
    $('.container-trailer').fadeIn();
    $('.container-gallery, .container-specifications, .container-component').fadeOut();
    
    $(this).css("color", "#EB5100");
    
    $('.icon-images, .icon-text-document, .icon-tools').css("color", "#7A7A7A");
    
    $('.container-trailer video').trigger("play");
})
