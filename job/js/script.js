/**
 * Created by Ruslan on 11.09.2016.
 */
$(document).ready(function() {
    //$('#go').mouseover(
    $('#go').mouseenter(
        function(){
            $(this).addClass('animated bounce');
        }
    )

    $('#go').mouseleave(
        function(){
            // $(this).removeClass('animated');
            // $(this).removeClass('bounce');
        }
    )

    $('#go-down a, .top').mPageScroll2id({
        //offset : -100
    });
    $('#go-down a, .top').mPageScroll2id({
        //offset : -100
    });
});


