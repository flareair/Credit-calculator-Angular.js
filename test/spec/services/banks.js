'use strict';

describe('Service: banks', function () {

  // load the service's module
  beforeEach(module('creditCalcAngularApp'));

  // instantiate service
  var banks;
  beforeEach(inject(function (_banks_) {
    banks = _banks_;
  }));

  it('should return bank list with getBanks()', function () {
    expect(banks.getBanks).toBeDefined();
    expect(banks.getBanks().length).toBe(2);
  });

});
