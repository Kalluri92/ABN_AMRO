'use strict';

// creating Controller Function.
var userController = function ($scope, UserFactory) {
    //Mapping constats to a variable to disaply in html.
    $scope.user_no_data = htmlContentConstants.user_no_data_exist;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.viewAll();
    });
    //YOUR CODE OF CONTROLLER GOES INSIDE THIS FUNCTION.
    $scope.responseObj = null;
    var resetAllVews = function () {
        $scope.updateUserInput = {};
        $scope.responseObj = null;
        $scope.searchResultUser = null;
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
    $scope.sort = function (keyName) {
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
    $scope.updateUserInput = {};
    $scope.searchUser = function () {
        $scope.responseObj = null;
        UserFactory.get($scope.updateUserInput.userName).then(
            function success(response) {
                if (response.data != null && response.data != "") {
                    $scope.searchResultUser = response.data;
                    $scope.updateUserInput.role = response.data.role;
                } else {
                    $scope.searchResultUser = null;
                    $scope.responseObj = tempResponse(false, htmlContentConstants.user_not_found);
                }
            },
            function failure(error) {
                $scope.searchResultUser = null;
                $scope.responseObj = tempFailureResponse;
                console.log("User => Search User service call failed, Error:" + JSON.stringify(error));
            }
        );
    }
    $scope.updateUser = function () {
        if ($scope.updateUserInput.accountId == null || $scope.updateUserInput.accountId.toString().length < 1) {
            $scope.updateUserInput.accountId = $scope.searchResultUser.accountId;
        }
        if ($scope.updateUserInput.role == null || $scope.updateUserInput.role == "") {
            $scope.updateUserInput.role = $scope.searchResultUser.role;
        }
        if($scope.updateUserInput.password == null || $scope.updateUserInput.password == ""){
            $scope.updateUserInput.password = " ";
        }
        UserFactory.update($scope.updateUserInput).then(
            function success(response) {
                if (response.data != null) {
                    $scope.responseObj = response.data;
                    if (response.data.success) {
                        $scope.searchResultUser = response.data.optionalValue;
                    }
                } else {
                    $scope.responseObj = tempResponse(false, htmlContentConstants.user_update_failed_no_response);
                }
            },
            function failure(error) {
                console.log("User => Update User Details service call failed, Error:" + JSON.stringify(error));
                $scope.responseObj = tempFailureResponse;
            }
        );
        $scope.updateUserInput = {};
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