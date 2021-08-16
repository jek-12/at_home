let swap = 0;
$.scrollify({
    section : "section",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars: false,
    standardScrollElements: "",
    setHeights: false,
    overflowScroll: true,
    updateHash: true,//
    touchScroll:true,
    before:function(i,panels) {
        var ref = panels[i].attr("data-section-name");

        $(".pagination .active").removeClass("active");

        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");

    },
    after:function() {
    if(swap === 0) {
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
        swap++;
    }


    },
    afterResize:function() {},
    afterRender:function() {
        var pagination = "<ul class=\"pagination\">";
        var activeClass = "";
        $(".panel").each(function (i) {
            activeClass = "";
            if (i === $.scrollify.currentIndex()) {
                activeClass = "active";
            }
            pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(this).attr("data-section-name") + "\"><span class=\"hover-text\">" + $(this).attr("data-section-name").charAt(0).toUpperCase() + $(this).attr("data-section-name").slice(1) + "</span></a></li>";
        });

        pagination += "</ul>";

        $(".home").append(pagination);
        $(".pagination a").on("click", $.scrollify.move);
        //
    }
});


//почитай за скрол перекидує до наступної секції і плавно вилізає панель після наступного скролу ховається і знову вилізає коллбек на скролл
    // $('header').on('scroll', function() {
    //     console.log($(this)[0].scrollHeight);
    //     if ($(this).scrollTop() +
    //         $(this).innerHeight() >=
    //         $(this)[0].scrollHeight) {
    //
    //         alert('End of DIV is reached!');
    //     }
    // });
