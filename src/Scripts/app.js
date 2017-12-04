//Define modules
//Modules contain all other parts of the AngularJS. They define a scope that will hold variables for permitted controllers/services to see.
//Think of modules as packages, controllers as objects (that look and function a lot like classes), and services/factories as other classes that typically
//are called by the controllers.

var app = angular.module('testApp', ['ngRoute']);
app.config(function ($routeProvider) {
$routeProvider.when("/home", {
templateUrl: "../Views/home.html",
controller: "HomeController"
   })
.when("/platform", {
templateUrl: "../Views/platform.html",
controller: "AboutController"
       })
.otherwise({redirectTo: "/home"});
});

app.controller("HomeController", function($scope){
	$scope.title = "Home"
});
app.controller("PlatformController", function($scope){
	$scope.title = "Platform"
});