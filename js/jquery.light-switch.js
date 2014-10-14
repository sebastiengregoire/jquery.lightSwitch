(function($) {
	'use strict';

    $.lightSwitch = function(element, options) {

        var defaults = {
        	on_callback: undefined,
    		off_callback: undefined	
        };

        var LS = this;
        LS.options = {};
        var $e = $(element);
        var e = element;

        LS.init = function() {
            LS.options = $.extend({}, defaults, options);
           	LS.setWrap();
           	LS.initEvents();
        };

        LS.setWrap = function() {
        	this.wrapZone = $('<div class="light-switch"></div>');
        	this.wrapZone.append('<div class="switch"><div class="switcher"></div></div><div class="light"><i class="front fa fa-moon-o"></i><i class="back fa fa-sun-o"></i></div>')
        	$e.after(this.wrapZone);
        	$e.hide();
        };

        LS.initEvents = function() {
        	this.wrapZone.click(function() {
        		if ($e.is(':checked')) {;
        			$e.prop('checked', false);
        			$(this).removeClass('on');
        			if(typeof LS.options.off_callback === 'function') LS.options.off_callback.call(this);
        		} else {
        			$e.prop('checked', true);
        			$(this).addClass('on');
					if(typeof LS.options.on_callback === 'function') LS.options.on_callback.call(this);
        		}
        	});
        };

        LS.init();
    };

    $.fn.lightSwitch = function(options) {
        return this.each(function() {
            $.lightSwitch(this, options);
        });
    };

})(jQuery);
