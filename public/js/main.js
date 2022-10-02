"use strict";

$(document).ready(function() {

    // Init Gallery
    $("#lightgallery").lightGallery({
        'selector': 'a'
    });

    // Toggle search modal
    $(document).on('click', '#search, #search_close', function (e) {
        $("#search_modal").toggleClass('open');
        $(".search-input").focus();

        // Collapse navbar
        $('#navbar').removeClass('in');
        $('.navbar-toggle').attr('aria-expanded', false);
    });

        // Toggle search modal by press ESC
        $(document).keyup(function(e) {
            if (e.keyCode === 27)
                $("#search_modal").removeClass('open');
        });
});

// Init Google map
function myMap() {

    var iconBase = 'img/map-marker.png';

    var mapProp= {
        center:new google.maps.LatLng(51.508742,-0.120850),
        zoom:10,
        icon: iconBase
    };

    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

    var marker = new google.maps.Marker({
        position: mapProp.center,
        map: map,
        icon: iconBase
    });

}

// Init Animation on scroll
AOS.init({
    duration: 1200,
    startEvent: 'DOMContentLoaded',
    once: true,
});