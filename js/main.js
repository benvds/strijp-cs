(function ($) {

	function setGalleryWidths() {
		$('ul.gallery').each(function() {
			var $this = $(this),
				$lis = $this.children('li'),
				paddingLeft = parseInt($this.css('paddingLeft')),
				paddingRight = parseInt($this.css('paddingRight')),
				totalWidth = 0;

			console.log('li', $this);

			$lis.each(function() {
				totalWidth += $(this).outerWidth();
			});

			$this.width(totalWidth + paddingLeft + paddingRight);
	    });
	}

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
    	setGalleryWidths();
    	loadAssets();
    });

    // window load
    $(window).on('load', function () {
            $('body').addClass('window-loaded');
    });

})(jQuery);
