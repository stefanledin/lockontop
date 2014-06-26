;(function (window, document, $, undefined) {

	var 
		defaults = {
			distance: 0
		};

	function lockOnTop (element, options) {
		this.options = $.extend( {}, defaults, options);

		this.el = element;
		this.$el = $(element);
		this.$document = $(document);
		this.$body = $('body');

		this.init();
	}

	lockOnTop.prototype.init = function() {
		this.scrollObserver();
	};

	lockOnTop.prototype.insertStandIn = function() {
		var height = _this.$el.height();
		if (this.options.) {};
		_this.$standIn = $('<div/>').css('height', _this.$el.height());
		_this.$standIn.insertAfter(_this.$el);
	};

	lockOnTop.prototype.removeStandIn = function() {
		_this.$standIn.remove();
	};

	lockOnTop.prototype.scrollObserver = function() {
		var
			_this = this,
			fixed = false,
			originalPosition = this.$el.offset().top,
			previousFixedValue = false;

		$(window).on('scroll', function () {
			fixed = (_this.$document.scrollTop() >= originalPosition) ? true : false;
			if (fixed !== previousFixedValue) {
				if (fixed) {
					_this.$el.css({
						'position': 'fixed',
						'top': _this.options.distance
					}).addClass('js-locked-on-top');
					_this.insertStandIn();
				} else {
					_this.$el.css('position', 'static').removeClass('js-locked-on-top');
					_this.removeStandIn();
				}
				previousFixedValue = fixed;
			}
		});
	};

	$.fn.lockOnTop = function (options) {
		return this.each(function () {
            if (!$.data(this, 'plugin_' + lockOnTop)) {
                $.data(this, 'plugin_' + lockOnTop, 
                new lockOnTop( this, options ));
            }
        });
	};

})(window, document, jQuery);