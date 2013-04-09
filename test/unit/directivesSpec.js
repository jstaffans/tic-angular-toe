'use strict';

describe('delegateClicks', function() {
  var elm, scope;

  beforeEach(module('myApp.directives'));

  beforeEach(inject(function($rootScope, $compile) {
    elm = angular.element(
      '<div delegate-clicks="testFunction" delegate-selector="span">' +
        '<span data-ng-index="1"></span>'+
      '</div>'
      );


    scope = $rootScope;
    $compile(elm)(scope);
    scope.$digest();

    // the function we are calling when clicking

    scope.testFunction = function(e, i) {
      scope.clickedIndex = i;
    }

  }));

  it ('should delegate clicks with the correct data', inject(function($compile, $rootScope) {
    var span = elm.find('span').eq(0);
    var index = parseInt(span.attr('data-ng-index'));
    span.click();
    expect($rootScope.clickedIndex).toBe(index);
  }));

});

