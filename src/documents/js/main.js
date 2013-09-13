// Gallery
// (function ($) {
//     'use strict';

//     var Gallery = function(element) {
//         this.$element = $(element);
//         this.$galleryDetails = $('.gallery-details:first');
//         this.init();
//     };
//     Gallery.prototype = {
//         init: function() {
//             var that = this,
//                 $lis = that.$element.find('.gallery-group > li'),
//                 content;

//             $lis.on('click', function() {
//                 content = $(this).find('.entry-content');

//                 if (content.length) {
//                     that.$galleryDetails.empty().append(content.html());
//                     that.$galleryDetails.addClass('active');
//                 } else {
//                     that.$galleryDetails.removeClass('active');
//                 }
//             });

//             $lis.has('.entry-content').addClass('clickable');
//         }
//     };

//     // document load
//     $(function() {
//         $('.gallery').each(function() {
//             new Gallery(this);
//         });
//     });

// })(jQuery);

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

    function playSlideshow() {
        var $slideshow = $('.fs-slideshow:first'),
            slideshowInterval = 10 * 1000;

        if (!$slideshow.length) { return false; }

        window.setTimeout(function() {
            window.setInterval(function() {
                $slideshow.data('fsSlideshow').showNext();
            }, slideshowInterval);
        }, slideshowInterval);
    }

    // document load
    $(function () {
        loadAssets();
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

        playSlideshow();
    });

})(jQuery);
