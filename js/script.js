$(".gnb li" ).hover(
    function(){
        $(this).find(".sub").stop().slideDown();
    },
    function(){
        $(this).find(".sub").stop().slideUp();

    }

);



$(".tab1").click(
    function(){
        $(".notice").show();
        $(".gallery").hide();
    }
);
$(".tab2").click(
    function(){
        $(".gallery").show();
        $(".notice").hide();
    }
);



$(".open").click(
    function(){
        $("#popup").show();
    }
);
$(".close").click(
    function(){
        $("#popup").hide();
    }
);