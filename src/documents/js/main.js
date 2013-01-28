// Gallery
(function ($) {
    'use strics';

    var Gallery = function(element) {
        this.$element = $(element);
        this.initOverview();
    };
    Gallery.prototype = {
        initOverview: function() {
            this.$element.find('.gallery-overview').each(function() {
                var $this = $(this),
                $lis = $this.children('li'),
                    paddingLeft = parseInt($this.css('paddingLeft'), 10),
                    paddingRight = parseInt($this.css('paddingRight'), 10),
                    totalWidth = 0;

                $lis.each(function() {
                    totalWidth += $(this).outerWidth();
                });

                $lis.has('.entry-content').each(function() {
                    $(this).on('click', function() {
                        console.log('clickerdeclick');
                    });
                });

                $this.width(totalWidth + paddingLeft + paddingRight);
            });
        }
    };

    // document load
    $(function() {
        $('.gallery').each(function() {
            new Gallery(this);
        });
    });

})(jQuery);

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

    // document load
    $(function () {
        loadAssets();
    });

    // window load
    $(window).on('load', function () {
        $('body').addClass('window-loaded');
    });

})(jQuery);
