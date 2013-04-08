'use strict';

/* Controllers */


function GameController($scope, Turn) {
    $scope.turn = Turn.get();
}

GameController.$inject = ['$scope', 'Turn'];
