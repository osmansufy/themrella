(function ($) {
    "use strict";
    jQuery(document).ready(function ($) {
        $('.all_content').masonry({

        })
        $('.content_hover').on('mouseover',

            function () {
                $('.hover_inner').addClass('animated slideInUp');


            }
        ).on('mouseout', function () {
            $('.hover_inner').removeClass('animated slideInUp');


        });
        $('.menu_trigger').on('click', function () {
            $('.offcanvas_menu').addClass('menu_active')
            $('.header_overlay').addClass('active')

        })

        $('.close_btn, .header_overlay').on('click', function () {
            $('.offcanvas_menu').removeClass('menu_active')
            $('.header_overlay').removeClass('active')

        })



    });
}(jQuery));