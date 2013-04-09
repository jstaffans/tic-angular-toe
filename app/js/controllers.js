'use strict';

/* Controllers */


function GameController($scope, Turn) {
    $scope.turn = Turn.get();

    $scope.putMarker = function($event, $data) {
      $event.preventDefault();
      console.log('putMarker', $data, $scope);
    };
}

GameController.$inject = ['$scope', 'Turn'];
