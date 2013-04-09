'use strict';

/* Controllers */


function GameController($scope, Turn) {
    $scope.turn = Turn.get();

    $scope.putMarker = function(index) {
      console.log(index);
      var marker = ($scope.turn.turn % 2 == 0) ? 'O' : 'X';
      $scope.turn.board.markers[index] = marker;
      $scope.turn.$update();
    };
}

GameController.$inject = ['$scope', 'Turn'];
