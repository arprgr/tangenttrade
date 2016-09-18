angular.module('buyerEnq', ['ngDialog','Authentication'])
    
    .controller('buyerEnquiryController',
        ['$scope', 'ngDialog', '$location', '$rootScope', 'AuthenticationService',
            function ($scope, ngDialog, $location, $rootScope, AuthenticationService) {

                
                $scope.addBuyerEnq = function () {
                  
                    AuthenticationService.addUser($scope.buyerEnqFrm,function(response){
                        
                            console.log('done adding buyer');
                    
                })
                
                
         
                }
            }]);

