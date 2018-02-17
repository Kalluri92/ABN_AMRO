'use strict';

//creating Controller Function.
var myDetailsController = function ($rootScope, $scope, UserFactory, AccountFactroy, CustomerFactory) {
    // All Controller Logic goes here.
    $scope.customerObj = null;
    $scope.$on('$routeChangeSuccess', function () {
        $scope.view();
    });
    $scope.responseObj = null;
    var resetAllVews = function () {
        $scope.customerObj = null;
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
        UserFactory.get($rootScope.currentUser.userName).then(
            function success(response) {
                if (response.data != null) {
                    AccountFactroy.get(response.data.accountId)
                        .then(function success(response) {
                            if (response.data != null) {
                                CustomerFactory.get(response.data.customerId).then(
                                    function success(response) {
                                        if(response.data != null){
                                            $scope.customerObj = response.data;
                                        } else {
                                            $scope.responseObj = tempFailureResponse;
                                            $scope.responseObj.response = htmlContentConstants.customer_info_not_found;
                                        }
                                    },
                                    function failure(error) {
                                        $scope.responseObj = tempFailureResponse;
                                        console.log("My Details => Get Customer Service Call failed , Error:" + JSON.stringify(error));
                                    }
                                );
                            } else {
                                $scope.responseObj = tempFailureResponse;
                                $scope.responseObj.response = htmlContentConstants.account_info_not_found;
                            }
                        },
                            function failure(error) {
                                $scope.responseObj = tempFailureResponse;
                                console.log("My Details => Get Account Service Call failed , Error:" + JSON.stringify(error));
                            }
                        );
                } else {
                    $scope.responseObj = tempFailureResponse;
                    $scope.responseObj.response = htmlContentConstants.account_info_not_found;
                }
            },
            function failure(error) {
                $scope.responseObj = tempFailureResponse;
                console.log("My Details => Get User Service Call failed , Error:" + JSON.stringify(error));
            }
        );
    };

    $scope.update = function () {
        resetAllVews();
        $scope.updateFlag = true;
    };

};

//dependecy injection to controller.
myDetailsController.$inject = ['$rootScope', '$scope', 'UserFactory', 'AccountFactory', 'CustomerFactory'];

// Registering controller with the Module.
angular.module("MyDetailsModule")
    .controller("MyDetailsController", myDetailsController);