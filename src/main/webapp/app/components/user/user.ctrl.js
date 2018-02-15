'use strict';

// creating Controller Function.
var userController = function ($scope, UserFactory) {
    //YOUR CODE OF CONTROLLER GOES INSIDE THIS FUNCTION.
    $scope.name = "User Controller";

    $scope.getAllUsers = function () {
        UserFactory.getAllUsers().then(
            function success(response) {
                $scope.users = response.data;
            },
            function failure(error) {
                console.log("UserFactory - > Service Call Failed with error: " + JSON.stringify(error));
            }
        );
    };
};

//Dependecy Injection.
userController.$inject = ['$scope', 'UserFactory'];

//Registering Controller with the module.
angular
    .module("UserModule")
    .controller("UserController", userController);