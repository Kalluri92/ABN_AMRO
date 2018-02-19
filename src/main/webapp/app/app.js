'use strict';

var myApp = angular.module("MyApp", [
    'ngRoute', // Angular Related Imports.
    'HomeModule', 'UserModule', // Application Related Modules.
    'MyAccountsModule', 'MyDetailsModule',
    'AccountModule', 'CustomerModule'
]);

//Creating run fucntion for Main module.
var runMethod = function ($rootScope, SessionFactory) {
    SessionFactory.getCurrentUser()
        .then(function success(response) {
            $rootScope.currentUser = response.data;
            $rootScope.$broadcast("userSessionSet");
        },
            function failure(error) {
                console.log("Getting Current User Data Failed ,error:" + JSON.stringify(error));
            }
        );
}
//Injucting Dependecy to runMethod.
runMethod.$inject = ['$rootScope', 'SessionFactory'];

//registering run Method with Module myApp.
myApp.run(runMethod);

//creating controller function.
var appController = function ($rootScope, $scope, $location) {
    //YOUR CODE OF CONTROLLER GOES INSIDE THIS FUNCTION.
    $scope.admin = false;
    $rootScope.$on("userSessionSet", function () {
        // alert(JSON.stringify($rootScope.currentUser));
        if ($rootScope.currentUser.authorities[0] === 'ADMIN') {
            $scope.admin = true;
        } else {
            $scope.admin = false;
        }
        $scope.userName = $rootScope.currentUser.userName;
        $location.path("/home");
    });
};

// Dependecy Injecution.
appController.$inject = ['$rootScope', '$scope', '$location'];
//Regristering controller function with MyAppModule.
myApp.controller("MyAppController", appController);

myApp.directive('loading', function () {
    return {
        restrict: 'E',
        replace:true,
        template: '<div style=""><img src="asserts/images/loading1.gif"/></div>', // Define a template where the image will be initially loaded while waiting for the ajax request to complete
        link: function (scope, element, attr) {
            scope.$watch('loading', function (val) {
                val = val ? $(element).show() : $(element).hide();  // Show or Hide the loading image   
            }); 
        }
    }
});