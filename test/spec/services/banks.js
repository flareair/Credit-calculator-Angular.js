'use strict';

describe('Service: banks', function () {

  // load the service's module
  beforeEach(module('creditCalcAngularApp'));

  // instantiate service
  var banks;
  beforeEach(inject(function (_banks_) {
    banks = _banks_;
  }));

  it('should be ok', function () {
    expect(banks.length).toBe(2);
    expect(banks[0].name).toBe('ВТБ24');
  });

});
