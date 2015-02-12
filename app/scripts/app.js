'use strict';

/**
 * @ngdoc overview
 * @name creditCalcAngularApp
 * @description
 * # creditCalcAngularApp
 *
 * Main module of the application.
 */
angular
  .module('creditCalcAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
