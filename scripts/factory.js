"use strict";

app.factory("flowerFactory", ($q, $http)=>{

  let getFlowers =()=>{
    return $q((resolve, reject)=>{
      $http.get("https://flower-power-angular.firebaseio.com/arrangements.json")
      .success((flowerObject)=>{
        resolve(flowerObject);
      }).error((error)=>{
        reject(error);
      });
    });
  };

  return {getFlowers}
});