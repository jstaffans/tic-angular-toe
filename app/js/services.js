'use strict';

/* Services */

angular.module('myApp.services', ['ngResource']).
    factory('Turn', function($resource) {
        return $resource('http://localhost\\:8080/board')
    });
