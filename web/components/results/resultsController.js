var myApp = angular.module('ingr3', ["chart.js"]);

myApp.controller("BarCtrl", function ($scope) {
  $scope.labels = ['Orange', 'Shrub', 'Carrots', 'Mint'];
  $scope.series = ['Health Value'];
  $scope.data = [
    [1, 0.3, 0.8, -0.6]
  ];
});