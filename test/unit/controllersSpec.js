'use strict';

/* jasmine specs for controllers go here */

describe('GameController', function () {

   beforeEach(module('myApp.services'));

    describe('GameController', function() {
        var scope, ctrl, $httpBackend;
        beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET(/^.*\/board$/).respond(
                {"turn":1,"board":{"id":1,"markers":["X"]}}
            )
            scope = $rootScope.$new();
            ctrl = $controller(GameController, {$scope: scope});
        }));

        it('should put turn information in scope', function () {
            $httpBackend.flush();
            expect(scope.turn.turn).toEqual(1);
            expect(scope.turn.board.markers[0]).toEqual('X');
        });

    });

});
