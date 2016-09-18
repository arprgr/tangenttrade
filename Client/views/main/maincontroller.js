angular.module('tangenttradelogin', ['ngDialog','Authentication'])

.controller('registration',
        ['$scope', 'ngDialog', '$location', '$rootScope','AuthenticationService',
            function ($scope, ngDialog, $location, $rootScope, AuthenticationService) {

               $scope.clickToOpen = function () {
                
                        ngDialog.open({
                        template: 'Views/login/register.html',
                        className: 'ngdialog-theme-default',
                        scope: $scope,
                    });
                }
               
               $scope.Login = function () {
                       console.log('launching login page');
                        ngDialog.open({
                                template: 'Views/Login/signIn.html',
                                className: 'ngdialog-theme-default',
                                scope: $scope
                            });
                 
               }
               
               $scope.addUser = function () {
                
                        console.log($scope.regFormData);
                
                AuthenticationService.addUser($scope.regFormData,function(response){
                        if(response.status > 200 ){
                            
                            alert(response);

                        } else {
                            
                            alert('Registration Successfull taking you to the login page');
                            
                            AuthenticationService.SetCredentials($scope.regFormData.email);
                            ngDialog.open({
                                template: 'Views/Login/signIn.html',
                                className: 'ngdialog-theme-default',
                                scope: $scope
                            });

                        }
                    });
            
                    };
                
                 $scope.addBuyerEnq = function () {
                  
                    AuthenticationService.addBuyerEnq($scope.buyerEnqFrmdData,function(response){
                            
                            console.log('done adding buyer');
                    
                })
                
                
         
                }
                
            }]);



