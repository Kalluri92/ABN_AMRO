'use strict';

// Creating Factory Fuction.
var userFactory = function ($http) {
    return {
        getAllUsers: function () {
            return $http.get(appApiConstants.user_get_all);
        },
        get: function (userId) {
            return $http.get(appApiConstants.user_get + "/"+ userId);
        },
        add: function(obj) {
            return  $http.post(appApiConstants.user_add,obj);
        },
        update: function(obj) {
            return  $http.post(appApiConstants.user_delete,obj);
        },
        delete: function(obj) {
            return  $http.delete(appApiConstants.user_delete,obj);
        }
    }
};

//Adding Dependecy Injuction .
userFactory.$inject = ['$http'];

//Registering factory to module.
angular
    .module('MyApp')
    .factory('UserFactory', userFactory);