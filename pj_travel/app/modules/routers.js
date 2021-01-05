angular.module("myApp.routers",[
  "ui.router",
  "myApp.homepage"
])
.config(["$stateProvider","$locationProvider",function($stateProvider,$locationProvider){
  $stateProvider.state("homepage",{
    url:"/",
    templateUrl:"modules/homepage/views/homepage.html",
    controller:"combo"
  });
  $stateProvider.state("detail",{
    url:"/detail.:id",
    templateUrl:"/modules/homepage/views/detail.html",
    controller:"detail"
  });
  // $locationProvider.html5Mode(true);
  // $locationProvider.hashPrefix('');
}])
