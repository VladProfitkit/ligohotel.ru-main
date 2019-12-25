jQuery(document).ready(function () {

    jQuery("#tabs_content .togglecontainer:first-child").addClass("active");
    jQuery("#tabs_content .togglecontainer .toggler").removeClass("activeTitle");
    jQuery("#tabs_content .togglecontainer .toggle_wrap").removeClass("active_tc");

    jQuery("#tabs_list .avia-icon-list li").click(function () {
        var trg = jQuery(this).index();

        jQuery("#tabs_content .togglecontainer").eq(trg).fadeIn().addClass("active").siblings().fadeOut().removeClass("active");
    });

    var overlay = jQuery('#overlay'); // пoдлoжкa, дoлжнa быть oднa нa стрaнице
    var open_modal = jQuery('a[href*=#modal]'); // все ссылки, кoтoрые будут oткрывaть oкнa
    var close = jQuery('.modal_close, #overlay'); // все, чтo зaкрывaет мoдaльнoе oкнo, т.е. крестик и oверлэй-пoдлoжкa
    var modal = jQuery('.modal_div'); // все скрытые мoдaльные oкнa

    open_modal.click(function(event){ // лoвим клик пo ссылке с клaссoм open_modal
        // console.log("ghf");
        event.preventDefault(); // вырубaем стaндaртнoе пoведение
        var div = jQuery(this).attr('href'); // вoзьмем стрoку с селектoрoм у кликнутoй ссылки
        overlay.fadeIn(400, //пoкaзывaем oверлэй
            function(){ // пoсле oкoнчaния пoкaзывaния oверлэя
                jQuery(div) // берем стрoку с селектoрoм и делaем из нее jquery oбъект
                    .css('visibility', 'visible')
                    .animate({opacity: 1}, 200); // плaвнo пoкaзывaем
            });
    });

    close.click(function(){ // лoвим клик пo крестику или oверлэю
        modal // все мoдaльные oкнa
            .animate({opacity: 0}, 200, // плaвнo прячем
                function(){ // пoсле этoгo
                    jQuery(this).css('visibility', 'hidden');
                    overlay.fadeOut(400); // прячем пoдлoжку
                }
            );
    });

});

jQuery(document).ready(function(){
    var hotelProTrigger = document.getElementById('visaPassport');
    var hotelProModal = document.querySelector('.modal_hotelpro');

    if (hotelProTrigger) {
        hotelProTrigger.addEventListener('click', function (e) {
            e.preventDefault();
            hotelProModal.classList.add('modal_hotelpro_open');
            hotelProModal.addEventListener('click', function (e) {
                e.preventDefault();
                hotelProModal.classList.remove('modal_hotelpro_open');
            });
        });

        window.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' || e.key === 'Esc') {
                e.preventDefault();
                if (hotelProModal.classList.contains('modal_hotelpro_open')) {
                    hotelProModal.classList.remove('modal_hotelpro_open');
                }
            }
        });
    };
});

var mapHomepage = document.querySelector('#yaMap');
if (mapHomepage) {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('yaMap', {
            center: [59.925484, 30.358125],
            zoom: 16
        }, {
            searchControlProvider: 'yandex#search'
        }),

        myPlacemark = new ymaps.Placemark([59.925484, 30.358125], {
            hintContent: 'LigoHotel',
            balloonContent: 'Россия, Санкт-Петербург, Лиговский проспект, 48',
        }, {
            iconColor: '#0095b6'
        });

        myMap.geoObjects.add(myPlacemark);

        myMap.behaviors
            .disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom'])
        ;

        myMap.controls.remove('rulerControl');
        myMap.controls.remove('searchControl');
        myMap.controls.remove('trafficControl');
        // myMap.controls.remove('typeSelector');
        // myMap.controls.remove('zoomControl');
        // myMap.controls.remove('geolocationControl');
        // myMap.controls.remove('routeEditor');
    });
};

var mapContacts = document.querySelector('#yaMapContacts');
if (mapContacts) {
    ymaps.ready(function () {
        var myMapContacts = new ymaps.Map('yaMapContacts', {
                center: [59.925484, 30.358125],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            }),

            myPlacemark = new ymaps.Placemark([59.925484, 30.358125], {
                hintContent: 'LigoHotel',
                balloonContent: 'Россия, Санкт-Петербург, Лиговский проспект, 48',
            }, {
                iconColor: '#0095b6'
            });

        myMapContacts.geoObjects.add(myPlacemark);

        myMapContacts.behaviors
            .disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom'])
        ;

        myMapContacts.controls.remove('rulerControl');
        myMapContacts.controls.remove('searchControl');
        myMapContacts.controls.remove('trafficControl');
        // myMap.controls.remove('typeSelector');
        // myMap.controls.remove('zoomControl');
        // myMap.controls.remove('geolocationControl');
        // myMap.controls.remove('routeEditor');
    });
};
