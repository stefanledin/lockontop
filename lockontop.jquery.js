;(function (window, document, $, undefined) {
	$.fn.lockOnTop = function () {
		return this.each(function () {

			var $el = $(this),
				originalPosition = $(this).offset().top,
				$document = $(document),
				fixed = false,
				cachedFixedValue;

			$(window).on('scroll', function () {
				cachedFixedValue = fixed;
				fixed = ($document.scrollTop() >= originalPosition) ? true : false;
				if (cachedFixedValue !== fixed) {
					$el.toggleClass('fixed');
				}
			});
			
		});
	};
})(window, document, jQuery);