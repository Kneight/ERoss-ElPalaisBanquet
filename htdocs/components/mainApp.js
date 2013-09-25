var mainApp = angular.module("myApp", ["socialMedia"]);

mainApp.config(function($routeProvider){
  $routeProvider.
    when("/", {templateUrl:'home.html'}).
    when("/Programs", {templateUrl:'NEBC.html'}).
    when("/Your_Events", {templateUrl:'rental.html'}).
    when("/Gallery", {templateUrl:'gallery.html'}).
    otherwise({redirectTo:"/"});
});