'use strict';

/**
 * @ngdoc function
 * @name creditCalcAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the creditCalcAngularApp
 */
angular.module('creditCalcAngularApp')
  .controller('MainCtrl', MainCtrl);


function MainCtrl($scope, banks) {
  $scope.current = {};
  $scope.banks = banks.getBanks();
  $scope.initial = $scope.banks[0];
  $scope.basePrice = 1250000;

  $scope.calculate = function() {
    console.log($scope.current.bank.name);
  };
  
}