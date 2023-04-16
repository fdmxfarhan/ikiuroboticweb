$(document).ready(function(){
    var num = 36;
    $('#nav-link1').removeClass('active');
    $('#nav-link3').addClass('active');
    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        // alert(scroll);
        if($(window).width() > 800){
            if(scroll <= 70){
                $('.preview-content').css('position', 'fixed');
                $('.preview-content').css('top', '5vw');
            }
            else if(scroll > 70 && scroll <= 1650)
            {
                $('.preview-content').css('position', 'fixed');
                $('.preview-content').css('top', '0');
            }
            else if(scroll > 1650){
                $('.preview-content').css('position', 'absolute');
                $('.preview-content').css('top', '120vw');
            }
        }
    });
    var images = [];
    for(var i=1; i<=num; i++){
        images.push({name: $(`#img${i}`), key: i, preview: $(`#preview${i}`)})
    }
    images.forEach(image => {
        image.name.click(()=>{
            $('.images-area').css('width', '50%');
            for(var i=0; i<num; i++){
                images[i].preview.hide();
            }
            image.preview.show();
        });
    });
    $('.close').click(()=>{
        for(var i=0; i<num; i++){
            images[i].preview.hide();
        }
        $('.images-area').css('width', '100%');
    });
});