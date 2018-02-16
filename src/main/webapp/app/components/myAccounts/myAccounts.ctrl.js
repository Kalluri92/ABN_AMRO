'use strict';

//Creating controller Function.
var myAccountsController = function ($rootScope, $scope) {
    // All Controller Logic goes here.
    $scope.responseObj = null;
    var resetAllVews = function () {
        $scope.responseObj = null;
        $scope.viewFlag = false;
        $scope.updateFlag = false;
    };

    var tempFailureResponse = {
        success: false,
        response: htmlContentConstants.task_failed_unknow
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

//Dependecy injuction.
myAccountsController.$inject = ['$rootScope', '$scope'];

//Regsistering ControllerFunction with Module.
angular.module("MyAccountsModule")
    .controller("MyAccountsController", myAccountsController);