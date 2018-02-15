'use strict';

// Creating Factory Fuction.
// var userFactory = function ($scope, $http) {
//     // getAllUsers = function () {
//     //     $http
//     //         .get("http://localhost:8080/user/getAll")
//     //         .then(
//     //             function success(response) {
//     //                 return response.data;
//     //             },
//     //             function failure(error) {
//     //                 console.log("UserFactory - > Service Call Failed with error: " + JSON.stringify(error));
//     //                 return null;
//     //             }
//     //         );
//     // }
// };

//Adding Dependecy Injuction .
// userFactory.$inject = ['$scope', '$http'];

//Registering factory to module.
angular
    .module('UserModule')
    .factory('UserFactory', function ($http) {
        return {
            getAllUsers: function () {
                return $http.get("http://localhost:8080/rest/customer/getAll");
            }
        }
    });