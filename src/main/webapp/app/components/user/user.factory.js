'use strict';

// Creating Factory Fuction.
var userFactory = function ($http) {
    return {
        getAllUsers: function () {
            return $http.get(appApiConstants.user_get_all);
        }
    }
};

//Adding Dependecy Injuction .
userFactory.$inject = ['$http'];

//Registering factory to module.
angular
    .module('UserModule')
    .factory('UserFactory', userFactory);