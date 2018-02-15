'use strict'


//Creating Controller Function.
var homeController = function ($) {
    //YOUR CODE OF CONTROLLER GOES INSIDE THIS FUNCTION.
    $.name = "This is Home Controller";
};


//Dependecy Injucting.
homeController.$inject = ['$scope'];

//Registering Controller to home Module.
angular
    .module("HomeModule")
    .controller("HomeController",homeController);