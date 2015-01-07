/**
 * treadmill.js
 * Copyright © 2015 Johnie Hjelm
 */
;(function () {
  'use strict';

  var Treadmill = Treadmill || {};

  Treadmill.run = function() {
    window.onscroll = function() {
      if ((window.innerHeight + window.scrollY) >= ((document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight)) {
        window.scrollTo(0,0);
      }
    };
  };

})();
