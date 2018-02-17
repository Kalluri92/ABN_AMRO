'use strict';

//creating customer controller function.
var accountController = function ($rootScope, $scope) {
    //mapping constants for html.
    $scope.no_account_data = htmlContentConstants.account_no_data_exist;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.viewAll();
    });
    //here is the main logic of this controller.
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
        response: "Task failed with unknow error,  Please try again !"
    };
    $scope.viewAll = function () {
        resetAllVews();
        $scope.viewAllFlag = true;
    };

    $scope.add = function () {
        resetAllVews();
        $scope.addFlag = true;
    };

    $scope.update = function () {
        resetAllVews();
        $scope.updateFlag = true;
    };

    $scope.delete = function () {
        resetAllVews();
        $scope.deleteFlag = true;
    };
};

//Adding Dependency injection.
accountController.$inject = ['$rootScope', '$scope'];

//Registering the controller with the Module.
angular.module("AccountModule")
    .controller("AccountController", accountController);