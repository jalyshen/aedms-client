angular.module('activitiApp').controller('LoginShiroCtrl', function ($scope, $http, ShiroUserService, Base64, $rootScope, $location,subject,
                                usernamePasswordToken) {
    $rootScope.loggedUser = {

    };


    $scope.token = usernamePasswordToken;
    $scope.token.username='abc'
    $scope.token.password='abc'
    $rootScope.loggedin = false;
    
    $scope.login = function() {
        subject.login($scope.token).then(function() {
             $scope.errauthc = false;
             $location.path('/dashboard');
             $rootScope.loggedin = true;

        }, function(data) {
             $scope.errauthc = true;
           });
    }
  
});
