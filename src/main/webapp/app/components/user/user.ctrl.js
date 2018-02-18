'use strict';

// creating Controller Function.
var userController = function ($scope, UserFactory) {
    //Mapping constats to a variable to disaply in html.
    $scope.user_no_data = htmlContentConstants.user_no_data_exist;
    $scope.$on('$routeChangeSuccess', function(){
        $scope.viewAll();
    });
    //YOUR CODE OF CONTROLLER GOES INSIDE THIS FUNCTION.
    $scope.responseObj = null;
    var resetAllVews = function () {
        $scope.responseObj = null;
        $scope.viewAllFlag = false;
        $scope.addFlag = false;
        $scope.updateFlag = false;
        $scope.deleteFlag = false;
    };
    var tempFailureResponse = {
        success: false,
        response: htmlContentConstants.task_failed_unknow
    };
    $scope.viewAll = function () {
        resetAllVews();
        $scope.viewAllFlag = true;
        UserFactory.getAllUsers().then(
            function success(response) {
                if (response.data != null) {
                    $scope.users = response.data;
                } else {
                    $scope.users = null;
                }
            },
            function failure(error) {
                console.log("UserFactory - > GetAll Service Call Failed with error: " + JSON.stringify(error));
            }
        );
    };
    $scope.sortOrder = true;
    $scope.sort = function (keyName){
        $scope.sortKey = keyName;
        $scope.sortOrder = !$scope.sortOrder;
    }

    $scope.add = function () {
        resetAllVews();
        $scope.addFlag = true;
        var addUserObj = {
            userName: "Venkat",
            password: "1234",
            accountId: "9002",
            role: "USER"
        };
        UserFactory.add(addUserObj).then(
            function success(response) {
                if (response.data != null) {
                    $scope.responseObj = response.data;
                } else {
                    $scope.responseObj = tempFailureResponse;
                }
            },
            function failure(error) {
                $scope.responseObj = tempFailureResponse;
                console.log("UserFactory - > Add Service Call Failed with error: " + JSON.stringify(error));
            }
        );
    }

    $scope.update = function () {
        resetAllVews();
        $scope.updateFlag = true;
    }

    $scope.delete = function () {
        resetAllVews();
        $scope.deleteFlag = true;
    }
};

//Dependecy Injection.
userController.$inject = ['$scope', 'UserFactory'];

//Registering Controller with the module.
angular
    .module("UserModule")
    .controller("UserController", userController);