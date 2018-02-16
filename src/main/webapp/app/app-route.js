//Creating Configuration Object.
var myConfig = function ($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'app/components/home/home.html',
            controller: 'HomeController'
        })
        .when('/users', {
            templateUrl: 'app/components/user/user.html',
            controller: 'UserController'
        })
        .when('/myAccounts', {
            templateUrl: 'app/components/myAccounts/myAccounts.html',
            controller: 'MyAccountsController'
        })
        .when('/myDetails', {
            templateUrl: 'app/components/myDetails/myDetails.html',
            controller: 'MyDetailsController'
        });
};

//registering configuration with main module.
angular
    .module('MyApp')
    .config(myConfig);