'use strict';

// creating Controller Function.
var userController = function ($scope, UserFactory) {
    //YOUR CODE OF CONTROLLER GOES INSIDE THIS FUNCTION.
    $scope.resetClickFunc = function () {
        $scope.viewAllFlag = false;
        $scope.addFlag = false;
        $scope.deleteFlag = false;
        $scope.updateFlag = false;
    }

    $scope.viewAll = function () {
        $scope.viewAllFlag = true;
        UserFactory.getAllUsers().then(
            function success(response) {
                $scope.users = response.data;
            },
            function failure(error) {
                console.log("UserFactory - > Service Call Failed with error: " + JSON.stringify(error));
            }
        );
    }
};

//Dependecy Injection.
userController.$inject = ['$scope', 'UserFactory'];

//Registering Controller with the module.
angular
    .module("UserModule")
    .controller("UserController", userController);