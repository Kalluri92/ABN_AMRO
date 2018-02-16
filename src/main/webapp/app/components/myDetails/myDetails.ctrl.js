'use strict';

//creating Controller Function.
var myDetailsController = function ($rootScope, $scope, UserFactory) {
    // All Controller Logic goes here.
    $scope.name = " My Details"
    UserFactory.get($rootScope.currentUser.userName).then(
        function success(response) {
           $scope.myUserDetails = resopnse.data;
        },
        function failure(error) {
            alert(JSON.stringify(error));
        }
    );
};

//dependecy injection to controller.
myDetailsController.$inject = ['$rootScope', '$scope', 'UserFactory'];

// Registering controller with the Module.
angular.module("MyDetailsModule")
    .controller("MyDetailsController", myDetailsController);