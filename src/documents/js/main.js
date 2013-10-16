(function ($) {

    function loadAssets() {
        $('.asset').each(function() {
            var $this = $(this),
            assetName = $this.data('asset'),
            $original = $('#assets').find('.' + assetName + ':first');

            if ($original) {
                $copy = $original.clone();
                $copy.width($this.width());
                $copy.height($this.height());
                $this.append($copy).addClass('asset-loaded');
            }
        });
    }

    function loadMap() {
        var latlng    = new google.maps.LatLng(51.44571601895113, 5.458906888961792);

        var mapStyles = [
            {
                "featureType": "landscape",
                "stylers": [
                    { "saturation": -100 }
                ]
            },{
                "featureType": "water",
                "stylers": [
                    { "gamma": 9.99 },
                    { "lightness": 100 }
                ]
            },{
                "featureType": "poi",
                "stylers": [
                    { "hue": "#ffee00" },
                    { "saturation": 50 }
                ]
            }
        ];

        var styledMap = new google.maps.StyledMapType(mapStyles,
                                                      {name: "styled_map"});

        var myOptions = {
            zoom: 15,
            center: latlng
        };

        var map       = new google.maps.Map(document.getElementById("map"),
                                            myOptions);

        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        var marker    = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Strijp-CS"
        });

        var infowindow = new google.maps.InfoWindow({
            content: $('.map-info-window-content').html()
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
        });

        infowindow.open(map, marker);
    }

    // document load
    $(function () {
        $('.gallery section > .item').shuffle();
        loadAssets();
        if($('#map').length) { loadMap(); }
    });

    // window load
    $(window).on('load', function () {
        $('body').addClass('window-loaded');

        $('.showcase section').masonry({
            itemSelector: '.item',
            columnWidth: 326,
            gutter: 0
        });

        $('.gallery section').masonry({
            itemSelector: '.item',
            columnWidth: 320,
            gutter: 10
        });
        
        $('.fancybox').fancybox();

        var $fsSlideshow = $('.fs-slideshow:first').fsSlideshow({
            shuffle: true,
            timeout: 8 * 1000
        });
    });

})(jQuery);
