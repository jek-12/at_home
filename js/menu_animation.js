 $(window).scroll(function () {
        $(".disappearing_header").css("padding-top", "7px");

    });
// back to first slide change menu position
 let element_position = $('.scroll').offset().top;

 $(window).on('scroll', function() {
     let y_scroll_pos = window.pageYOffset;
     let scroll_pos_test = element_position;
     if(y_scroll_pos === scroll_pos_test) {
         $(".disappearing_header").css("padding-top", "57px");
     }
 });
 //menu disappearing
    let menu = $(".disappearing_header");
    let nav_menu_icon = $(".nav_box");

    nav_menu_icon.mouseenter(() => nav_menu_icon.css("transform", "rotate(360deg)"));
    nav_menu_icon.mouseenter(() => menu.css("width", "100%"));
    nav_menu_icon.mouseenter(() => $(".main_header").css("opacity", "1"));
    nav_menu_icon.mouseenter(() => menu.css("height", "100px"));
    nav_menu_icon.mouseenter(()=>$(".main_header").css("visibility", "visible"));
    // if(menu.mousemove(function(event){
    //     if(event.clientY >= 47) {
    //         nav_menu_icon.css("transform", "rotate(180deg)");
    //         menu.css("width", "0%");
    //         $(".main_header").css("opacity", "0");
    //     }
    //     }))



    //
    // menu.mousemove(function(event) {
    //
    //         var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
    //         console.log(clientCoords);
    //     });

///////////////
    // if ($(window).width() <= 760) {
    //     let nav_menu_icon = $(".nav_box");
    //     let nav_menu_inside = $(".nav_box span");
    //     nav_menu_icon.animate({
    //         opacity: "1",
    //         width: "15px",
    //     }, 1000);
    //
    //     nav_menu_inside.animate({
    //         opacity: "1",
    //         width: "15px",
    //     }, 1000);
    //     setTimeout(function () {
    //         nav_menu_icon.css("border-radius", "50%");
    //         nav_menu_inside.css("border-radius", "50%");
    //         nav_menu_icon.css("transform", "rotate(180deg)");
    //         nav_menu_inside.css("transform", "rotate(225deg)");
    //     }, 1000);
    //     $(nav_menu_icon).mouseenter(() => $(nav_menu_icon).css("transform", "rotate(360deg)"));
    //     $(nav_menu_icon).mouseleave(() => $(nav_menu_icon).css("transform", "rotate(180deg)"));
    //
    //
    //     let menu = $(".disappearing_header");
    //     menu.css("width", "0%");
    //     $(".main_header").css("opacity", "0")
    //     setTimeout(() => $(".main_header").css("visibility", "collapse"), 500);
    // }
///////////////////////
    //
    // $(".disappearing_header").css("padding-top", "7px");
    // let menu = $(".disappearing_header");
    // menu.css("width", "0%");
    // $(".main_header").css("opacity", "0")
    // setTimeout(() => $(".main_header").css("visibility", "collapse"), 500);
