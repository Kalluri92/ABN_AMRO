'use strict';

var myApp = angular.module("MyApp", ['ngRoute', 'HomeModule', 'UserModule']);

//creating controller function.
var appController = function ($scope, $location) {
    //YOUR CODE OF CONTROLLER GOES INSIDE THIS FUNCTION.
    $scope.name = "App Controller";

};

// Dependecy Injecution.
appController.$inject = ['$scope', '$location'];
//Regristering controller function with MyAppModule.
myApp.controller("MyAppController", appController);