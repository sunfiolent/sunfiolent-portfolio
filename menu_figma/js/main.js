$('.menu-block-bottom li').click(function(){



    $(".menu-block-bottom li").removeClass("activ");
    $(".menu-block-bottom li img").removeClass("activ-img");
    $(this).addClass("activ");
    $(this).find("img").addClass("activ-img");

});



