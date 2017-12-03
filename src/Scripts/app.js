//Define modules
//Modules contain all other parts of the AngularJS. They define a scope that will hold variables for permitted controllers/services to see.
//Think of modules as packages, controllers as objects (that look and function a lot like classes), and services/factories as other classes that typically
//are called by the controllers.

var app = angular.module('testApp', ['ngRoute']);