"use strict";

app.controller("theController", function($scope, flowerFactory){

  flowerFactory.getFlowers()
  .then(function(returnedFlowerData){
    $scope.flowerData = returnedFlowerData
  });

});
