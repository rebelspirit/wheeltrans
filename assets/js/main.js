jQuery(document).ready(function ($){

    // Carousel Slider
    $("#service-slides").owlCarousel({
        dotsContainer: '#service-navigation',
        items: 3,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800
    });
    $("#event-slides").owlCarousel({
        dotsContainer: '#events-navigation',
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 800
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
});