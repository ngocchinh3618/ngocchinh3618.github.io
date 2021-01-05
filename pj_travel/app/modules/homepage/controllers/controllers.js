'use strict'

angular.module('myApp.homepage.controllers',[])
.controller("combo",["$scope","$nameFactoryTour",function($scope,$nameFactoryTour){
  $scope.combo = $nameFactoryTour.getCombo();
  $scope.tourName = $nameFactoryTour.getTourName();
  $scope.tourTravel = $nameFactoryTour.getTourTravel();
  $scope.tourTravelLength = new Array(Math.ceil($scope.tourTravel.length / 3)).fill(3);

  //----------------carousel-----------------
  var slideIndex = [1,1,1,1,1,1];
  var slideId = ["mySlides1", "mySlides2", "mySlides3", "mySlides4", "mySlides5", "mySlides6"]
  $scope.plusSlides = function(n, no){
    $scope.showSlides(slideIndex[no] += n, no);
    console.log(no);
  }
  $scope.showSlides = function(n, no){
    var i;
    var x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {slideIndex[no] = 1}    
    if (n < 1) {slideIndex[no] = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    x[slideIndex[no]-1].style.display = "block";  
  }
  //----------------end-carousel-----------------
}])
.controller("detail",["$scope","$nameFactoryTour","$stateParams",function($scope,$nameFactoryTour,$stateParams){
  $scope.tourById = $nameFactoryTour.getTourTravelDiscountById($stateParams.id)
  
}])
