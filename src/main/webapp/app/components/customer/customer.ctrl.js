'use strict';

//creating customer controller function.
var customerController = function ($rootScope, $scope) {
    //mapping constants.
    $scope.no_customer_data = htmlContentConstants.customer_no_data_exist;
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
customerController.$inject = ['$rootScope', '$scope'];

//Registering the controller with the Module.
angular.module("CustomerModule")
    .controller("CustomerController", customerController);