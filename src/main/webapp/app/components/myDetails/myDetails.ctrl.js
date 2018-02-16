'use strict';

//creating Controller Function.
var myDetailsController = function ($rootScope, $scope) {
    // All Controller Logic goes here.
    $scope.name = " My Details"
};

//dependecy injection to controller.
myDetailsController.$inject = ['$rootScope', '$scope'];

// Registering controller with the Module.
angular.module("MyDetailsModule")
    .controller("MyDetailsController", myDetailsController);