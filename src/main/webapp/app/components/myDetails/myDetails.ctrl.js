'use strict';

//creating Controller Function.
var myDetailsController = function ($rootScope, $scope, UserFactory) {
    // All Controller Logic goes here.
    $scope.responseObj = null;
    var resetAllVews = function () {
        $scope.responseObj = null;
        $scope.viewFlag = false;
        $scope.updateFlag = false;
    };

    var tempFailureResponse = {
        success: false,
        response: "Task failed with unknow error,  Please try again !"
    };
    $scope.view = function () {
        resetAllVews();
        $scope.viewFlag = true;
    };

    $scope.update = function () {
        resetAllVews();
        $scope.updateFlag = true;
    };

};

//dependecy injection to controller.
myDetailsController.$inject = ['$rootScope', '$scope', 'UserFactory'];

// Registering controller with the Module.
angular.module("MyDetailsModule")
    .controller("MyDetailsController", myDetailsController);