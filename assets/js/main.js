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
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 800,
        // onTranslated: function () {
        //     //let item = $("#staff-slider").find(".owl-item.active .anna");
        //     if($(".owl-item.active").find(".anna")){
        //         console.log("true")
        //     } else {
        //         console.log("false")
        //     }
        //
        // }
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

    $('.accordion').accordion({
        "transitionSpeed": 400
    });
});