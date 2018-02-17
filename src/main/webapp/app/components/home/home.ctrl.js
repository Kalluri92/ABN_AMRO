'use strict'


//Creating Controller Function.
var homeController = function ($rootScope, $scope, UserFactory) {
    //YOUR CODE OF CONTROLLER GOES INSIDE THIS FUNCTION.
    $scope.changePasswordFlag = false;
    $scope.passwordObj = {};
    $scope.responseObj = null;
    $scope.changePassword = function () {
        $scope.changePasswordFlag = true;
    };

    $scope.updatePassword = function () {
        $scope.responseObj = null;
        if ($scope.passwordObj.old != null && $scope.passwordObj.new != null && $scope.passwordObj.retype != null &&
            $scope.passwordObj.old.length > 0 && $scope.passwordObj.new.length > 0 && $scope.passwordObj.retype.length > 0) {
            if ($scope.passwordObj.new != $scope.passwordObj.retype) {
                $scope.responseObj = tempResponse(false, htmlContentConstants.new_retpe_not_match);
            } else {
                var passwordObj = {
                    "userName":$rootScope.currentUser.userName,
                    "oldPassword": $scope.passwordObj.old,
                    "newPassword": $scope.passwordObj.retype
                };
                UserFactory.changePassword(passwordObj).then(function success(response){
                    if(response.data != null) {
                        $scope.responseObj = response.data;
                    } else {
                        $scope.responseObj = tempFailureResponse;
                    }
                },
                function failure(error) {
                    console.log("Home, Change Password service call failed , Error:" + JSON.stringify(error));
                    $scope.response = tempFailureResponse;
                });
            }
        } else {
            $scope.responseObj = tempResponse(false, htmlContentConstants.enter_all_fields);
        }
        $scope.passwordObj = {};
    };
};


//Dependecy Injucting.
homeController.$inject = ['$rootScope', '$scope', 'UserFactory'];

//Registering Controller to home Module.
angular
    .module("HomeModule")
    .controller("HomeController", homeController);