$(window).on('load', function() {


        $(window).scroll(function () {
                $(".disappearing_header").css("padding-top", "7px");


        });

        if($(window).width() <= 760) {
            let nav_menu_icon = $(".nav_box");
            let nav_menu_inside = $(".nav_box span");
            nav_menu_icon.animate({
                opacity: "1",
                width: "15px",
            }, 1000);

            nav_menu_inside.animate({
                opacity: "1",
                width: "15px",
            }, 1000);
            setTimeout(function () {
                nav_menu_icon.css("border-radius", "50%");
                nav_menu_inside.css("border-radius", "50%");
                nav_menu_icon.css("transform", "rotate(180deg)");
                nav_menu_inside.css("transform", "rotate(225deg)");
            }, 1000);
            $(nav_menu_icon).mouseenter(() => $(nav_menu_icon).css("transform", "rotate(360deg)"));
            $(nav_menu_icon).mouseleave(() => $(nav_menu_icon).css("transform", "rotate(180deg)"));


            let menu = $(".disappearing_header");
            menu.css("width", "0%");
            $(".main_header").css("opacity", "0")
            setTimeout(() => $(".main_header").css("visibility", "collapse"), 500);
        }

        
    //
    // $(".disappearing_header").css("padding-top", "7px");
    // let menu = $(".disappearing_header");
    // menu.css("width", "0%");
    // $(".main_header").css("opacity", "0")
    // setTimeout(() => $(".main_header").css("visibility", "collapse"), 500);
});