(function($) {
    "use strict";

    jQuery(document).ready(function($) {


        //Demo slider
        $('.demo-slider-wrapper').owlCarousel({
            loop: true,
            nav: true,
            margin: 70,
            navText: ["<i class='ion-ios-arrow-thin-left'></i>", "<i class='ion-ios-arrow-thin-right'></i>"],
            //autoplay: true,
            autoplayTimeout: 3000,
            dot: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });


        $('.demo-desc-slider').owlCarousel({
            loop: true,
            center: true,
            margin: 20,
            nav:false,        
            autoplay: true,
            autoplayTimeout: 3000,
            dot: false,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 3
                }
            }
        });






    });


    jQuery(window).load(function() {


    });


}(jQuery));