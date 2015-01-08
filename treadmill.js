/**
 * treadmill.js
 * Copyright © 2015 Johnie Hjelm
 */

'use strict';

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
		exports.Treadmill = factory();
	} else {
    root.Treadmill = factory();
  }
}(this, function () {
  return {
  
    /**
     * Attach function to window.onscroll and run Treadmill.
     */
     
    run: function () {
      window.onscroll = function() {
        if ((window.innerHeight + window.scrollY) >= ((document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight)) {
          window.scrollTo(0, 0);
        }
      };
    }

  };
}));
