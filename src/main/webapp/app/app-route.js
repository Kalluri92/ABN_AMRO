//Creating Configuration Object.
var myConfig = function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'app/components/home/home.html',
            controller: 'HomeController'
        })
        .when('/user', {
            templateUrl: 'app/components/user/user.html',
            controller: 'UserController'
        });
};

//registering configuration with main module.
angular
    .module('MyApp')
    .config(myConfig);