var mainApp = angular.module("myApp", ["socialMedia"]);

mainApp.config(function($routeProvider){
  $routeProvider.
    when("/", {templateUrl:'home.html'}).
    when("/Programs", {templateUrl:'NEBC.html'}).
    when("/Your_Events", {templateUrl:'Rental.html'}).
    when("/Gallery", {templateUrl:'Gallery.html'}).
    otherwise({redirectTo:"/"});
});