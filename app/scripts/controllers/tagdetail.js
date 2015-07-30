'use strict';

/**
 * @ngdoc function
 * @name ideasApp.controller:TagdetailCtrl
 * @description
 * # TagdetailCtrl
 * Controller of the ideasApp
 */
angular.module('ideasApp')
  .controller('TagDetailCtrl', function ($scope, tag) {
    $scope.tag = tag.data;
  });
