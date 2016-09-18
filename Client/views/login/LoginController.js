angular.module('Login', ['ngDialog','Authentication'])

    .controller('LoginController',
        ['$scope', '$location', 'ngDialog', '$rootScope', 'AuthenticationService',
            function ($scope, $location, ngDialog, $rootScope, AuthenticationService) {

                $scope.Login = function(){
                    console.log('logging in');
                    $scope.dataLoading = true;

                    AuthenticationService.Login($scope.loginForm, function(response) {
                        
                        
                        console.log(response) ;
                        console.log(response.data.status) ;
                        if (response.data.name != null) {
                            
                              console.log('Logged in');
                            console.log(response.data.name);
                            
                            $rootScope.userName = response.data.name;
                            $rootScope.userEmailId = response.data.emailid;
                            
                            AuthenticationService.SetCredentials(response.data.name, response.data.emailid );
                            console.log($rootScope);
                             ngDialog.close( {
                                scope: $scope }
                            );
                        }
                        else {
                        
                            if (response.data.status == 230) {
                            
                                alert($scope.loginForm.email + ' Is currently not registered, Please sign up.');
                            }
                            
                            if (response.data.status == 500)
                                
                                alert("You have entered an invalid Password")
                        }
 
                    });
                };

                $scope.clickToForgetPassword = function(){
                    AuthenticationService.SetCredentials('dummy', 'dummy');
                    ngDialog.close();
                    $location.path('/forgetPassword');
                }
            }]);


