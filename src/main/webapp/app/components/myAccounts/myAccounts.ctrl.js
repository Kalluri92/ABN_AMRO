'use strict';

//Creating controller Function.
var myAccountsController = function ($rootScope, $scope) {
    // All Controller Logic goes here.
    $scope.name = "My Accounts."
};

//Dependecy injuction.
myAccountsController.$inject = ['$rootScope', '$scope'];

//Regsistering ControllerFunction with Module.
angular.module("MyAccountsModule")
    .controller("MyAccountsController", myAccountsController);