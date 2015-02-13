'use strict';

/**
 * @ngdoc service
 * @name creditCalcAngularApp.banks
 * @description
 * # banks
 * Factory in the creditCalcAngularApp.
 */
angular.module('creditCalcAngularApp')
  .factory('banks', banks);


function banks() {

  var factory = {
    getBanks: getBanks
  };

  return factory;


  function getBanks() {
    var banks = [
      {
        id: 1,
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
        id: 2,
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

    return banks;

  }
}