'use strict';

/* Directives */

angular.module('myApp.directives', []);
/*
  directive('delegateClicks', function() {
    return function(scope, element, attrs) {
      var fn = attrs.delegateClicks;
      element.on('click', attrs.delegateSelector, function(e) {
        if (typeof scope[fn] == "function") {
          var i = angular.element(e.target).data('ngIndex');
          scope[fn](e, i);
        }
      });
    }
  });
*/