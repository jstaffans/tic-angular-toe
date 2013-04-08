'use strict';

/* Directives */

angular.module('myApp.directives', []).
  directive('marker', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/marker.html',
            scope: {content: 'evaluate'}
        }
    });
