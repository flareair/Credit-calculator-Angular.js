'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('creditCalcAngularApp'));

  var MainCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('Should get bank list from service', function () {
    expect(scope.banks.length).toBe(2);
  });
});
