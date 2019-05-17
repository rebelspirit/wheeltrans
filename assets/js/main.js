jQuery(document).ready(function ($){

    // Carousel Slider
    $("#service-slides").owlCarousel({
        dotsContainer: '#service-navigation',
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        responsive : {
            // breakpoint from 0 up
            0 : {
                items: 1,
            },
            // breakpoint from 480 up
            480 : {
                items: 1,
            },
            // breakpoint from 768 up
            768 : {
                items: 1,
            },
            // breakpoint from 1000 up
            1100: {
                items: 3,
            }
        }
    });
    $("#event-slides").owlCarousel({
        dotsContainer: '#events-navigation',
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 800,
    });
    $("#staff-slider").owlCarousel({
        dotsContainer: '#staff-navigation',
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        onTranslated: function () {
            let item = $("#staff-slider").find("div.owl-item.active").find("div.item").find("div.staff-item");
            let container = $(".staff");
            let bg1 = "url(assets/images/staff1.jpg)";
            let bg2 = "url(assets/images/staff2.jpg)";
            let bg3 = "url(assets/images/staff3.jpg)";

            if(item.hasClass("steve")){
                container.css("background-image", bg1)
            }
            if(item.hasClass("anna")){
                container.css("background-image", bg2)
            }
            if(item.hasClass("jonathan")){
                container.css("background-image", bg3)
            }
        }
    });

    // Vanilla Tilt
    VanillaTilt.init(document.querySelectorAll(".slider-description"), {
        max: 15,
        speed: 1000,
        transition: true,
        reset: true,
        easing: "cubic-bezier(.03,.98,.52,.99)",
    });

    // Parallax
    $('.contact-now').parallax({imageSrc: './assets/images/parallax.jpg'});

    // Accordion
    $('.accordion').accordion({
        "transitionSpeed": 400
    });

    // Desktop Slider navigation
    $(".slider-navigation-item").click(function () {
        let index = $(".slider-navigation-item").index(this);
        let slide = $(".slider-item");
        let slideIcon = $(".slider-navigation-item .slider-navigation-image");

        slideIcon.each(function () {
            this.classList.remove("active-slide")

        });

        slide.each(function (i) {
            if (index === i) {
                //console.log(index, i, this);
                this.classList.add("slider-active");
                slideIcon[index].classList.add("active-slide");
            } else {
                this.classList.remove("slider-active");
            }
        })
    });

    // Mobile Menu Button
    $("#menu_toggle").click(function () {
        $("#menu_toggle").toggleClass("open");
        $(".mobile-menu").toggle();
    });

    // Language option
    $(".lang:eq(1)").hide();
    $(".lang:eq(2)").hide();

    $(".language").click(function () {
        $(".language").toggleClass("open");
        $(".lang:eq(1)").toggle();
        $(".lang:eq(2)").toggle();
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        const div = $(".language"); // тут указываем ID элемента
        if (!div.is(e.target && $(".language").hasClass("open")) // если клик был не по нашему блоку
            && div.has(e.target).length === 0) { // и не по его дочерним элементам
            $(".lang:eq(1)").hide();
            $(".lang:eq(2)").hide();
            $(".language").removeClass("open");// скрываем его
        }
    });

    // Smooth scroll JQuery
    $('nav a').click(function () {
        const link = this;
        $.smoothScroll({
            speed: 1500,
            scrollTarget: link.hash
        });
        return false;
    });

    $('.search-button').click(function () {
        const link = this;
        $.smoothScroll({
            speed: 1500,
            scrollTarget: link.hash
        });
        return false;
    });

    $('.scroll-up').click(function () {
        const link = this;
        $.smoothScroll({
            speed: 1500,
            scrollTarget: link.hash
        });
        return false;
    });


});