var studentApp = angular.module('tangenttradelogin', []); 
var Authentication = angular.module('Authentication', []); 
var buyerEnq = angular.module('buyerEnq', []); 
var Login = angular.module('Login', []);

angular.module("tangenttrademain", [
    'tangenttradelogin',
    'Authentication',
    'Login',
    'buyerEnq',
    'ngRoute',
    'ngCookies',
    'ngMessages',
    'ngPassword'
])
.config(['$routeProvider', function($routeProvider){
          $routeProvider
            .when('/', {
                controller: 'register',
                templateUrl: 'Index.html',
             })
            .otherwise({ redirectTo: '/home' });
         }]);