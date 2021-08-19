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
        let ref = panels[i].attr("data-section-name");

        $(".pagination .active").removeClass("active");

        $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");

    },
    after: function() {
    if(swap === 0) {
        let nav_menu_icon = $(".nav_box");
        let nav_menu_inside = $(".nav_box span");
        anim(nav_menu_icon);
        anim(nav_menu_inside);
        anim_border(nav_menu_icon, nav_menu_inside);

        let menu = $(".disappearing_header");
        menu.css("width", "0%");
        $(".main_header").css("opacity", "0")

        menu.mouseleave(function () {
            nav_menu_icon.css("transform", "rotate(180deg)");
            menu.css("width", "0%");
            $(".main_header").css("opacity", "0");
            });
        swap++;
    }
    },
    afterResize:function() {},
    afterRender:function() {
        let pagination = "<ul class=\"pagination\">";
        let activeClass = "";
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
function anim(for_what) {
    for_what.animate({
        opacity: "1",
        width: "15px",
    }, 500);
}
function anim_border (box, span) {
    setTimeout(function () {
        box.css("border-radius", "50%");
        box.css("transform", "rotate(180deg)");
        span.css("border-radius", "50%");
        span.css("transform", "rotate(225deg)");
    }, 500);
}

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
