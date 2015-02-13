'use strict';

describe('Filter: formatRouble', function () {

  // load the filter's module
  beforeEach(module('creditCalcAngularApp'));

  // initialize a new instance of the filter before each test
  var formatRouble;
  beforeEach(inject(function ($filter) {
    formatRouble = $filter('formatRouble');
  }));

  it('should return the formatted price', function () {
    var input = 1000000;
    expect(formatRouble(input)).toBe('1 000 000 руб');
  });

  it('should return unknown when wrond input', function () {
    var input;
    expect(formatRouble(input)).toBe('unknown');
    input = 'String bla bla';
    expect(formatRouble(input)).toBe('unknown');
    input = '123123123bkb';
    expect(formatRouble(input)).toBe('unknown');
  });  

});
