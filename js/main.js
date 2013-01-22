(function ($) {

    // window load
    $(window).on('load', function () {
            $('body').addClass('window-loaded');
    });

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


})(jQuery);
