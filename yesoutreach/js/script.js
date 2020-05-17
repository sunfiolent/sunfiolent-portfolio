$(document).ready(function() {
    $('.section-2-block-img-1').waypoint(function() {
        $(this.element).addClass('zoomIn');
    }, {
        offset: '80%'
    });
    $('.section-2-block-img-2').waypoint(function() {
        $(this.element).addClass('zoomIn');
    }, {
        offset: '80%'
    });
    $('.section-2-block-img-3').waypoint(function() {
        $(this.element).addClass('zoomIn');
    }, {
        offset: '80%'
    });
    $('.section-2-block-img-4').waypoint(function() {
        $(this.element).addClass('zoomIn');
    }, {
        offset: '80%'
    });
    $('.section-4-md-block-animated').waypoint(function() {
        $(this.element).addClass('slideInUp');
    }, {
        offset: '70%'
    });


    $('.section-5-block-a a').on('click', function(){
        // alert('Вы нажали на элемент "foo"');
        $('.section-6').removeClass('section-6-display-none');
        $('.section-6').addClass('section-6-display-block');
    });
});


