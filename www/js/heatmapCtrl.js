/**
 * Created by czarifis on 11/6/15.
 */

NUMBER_OF_PRODUCTS = 300;
NUMBER_OF_ZIP_CODES = 1000;
NUMBER_OF_DIFFS = 1;


angular.module('starter', []).controller('heatmapCtrl', function($scope) {

  $scope.matrix_with_numbers = [];

  $scope.array_with_products = [];
  for(var i = 0; i<NUMBER_OF_PRODUCTS; i++) {
    $scope.array_with_products[i] = 'product'+i;
  }



  $scope.array_with_zipcodes = [];
  for(var j = 0; j<NUMBER_OF_ZIP_CODES; j++) {
    $scope.array_with_zipcodes[j] = 90001+j;
  }

  //console.log($scope.array_with_zipcodes);

  for(i = 0; i<NUMBER_OF_PRODUCTS; i++) {
    $scope.matrix_with_numbers[i] = [];
    for (j = 0; j<NUMBER_OF_ZIP_CODES; j++) {
      var cell_number = (Math.random()*100000).toFixed(0);
      $scope.matrix_with_numbers[i][j] = cell_number;
    }
  }

  $scope.colorizeMe = function (value) {

    var red = 0;
    var green = 0;
    if (value < (50000)) {
      red = value/255;
    }
    else {
      green = value/255;
    }
    //console.log('background-color':'rgb('+red.toFixed(0)+','+green.toFixed(0)+',0)');
    return {'background-color':'rgba('+red.toFixed(0)+','+green.toFixed(0)+',0,0.5)'};
  };

  $scope.apply_diffs = function () {
    for (j = 0 ; j<NUMBER_OF_DIFFS; j++) {
      if ($scope.matrix_with_numbers[0][j] < 50000) {
        $scope.matrix_with_numbers[0][j] = Number($scope.matrix_with_numbers[0][j]) + 50000;
      }
      else {
        $scope.matrix_with_numbers[0][j] = Number($scope.matrix_with_numbers[0][j]) - 50000;
      }
    }
  };
});
