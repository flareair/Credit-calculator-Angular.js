'use strict';

/**
 * @ngdoc service
 * @name creditCalcAngularApp.banks
 * @description
 * # banks
 * Constant in the creditCalcAngularApp.
 */
var banks = [
  {
    name: 'ВТБ24',
    creditLengths: [12, 24, 36],
    firstPays: [15, 50],
    programs: [
      [12, 15, 25],
      [24, 15, 27],
      [36, 15, 29],
      [12, 50, 23],
      [24, 50, 25],
      [36, 50, 27]
    ]
  },
  {
    name: 'Советский',
    creditLengths: [12, 24, 36],
    firstPays: [30, 70],
    programs: [
      [12, 30, 30],
      [24, 30, 30],
      [36, 30, 30],
      [12, 70, 30],
      [24, 70, 30],
      [36, 70, 30]
    ]
  }
];


angular.module('creditCalcAngularApp')
  .constant('banks', banks);

