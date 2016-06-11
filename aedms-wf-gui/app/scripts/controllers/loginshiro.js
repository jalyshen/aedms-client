angular.module('activitiApp').controller('LoginShiroCtrl', function ($scope, $http, ShiroUserService, Base64, $rootScope, $location, subject, usernamePasswordToken) {
    $rootScope.loggedUser = {

    };
    $scope.token={};
    $scope.token.username='abc';
    $scope.token.password='abc';
    $rootScope.loggedin = false;
    
    // $scope.login = function() {
    //     subject.login($scope.token).then(function() {
    //          $scope.errauthc = false;
    //          $location.path('/dashboard');
    //          $rootScope.loggedin = true;

    //     }, function(data) {
    //          $scope.errauthc = true;
    //        });
    // }
    $scope.login = function() {
       $http.post('http://localhost:8081/aedms-core/auth', {
                  username: $scope.token.username,
                  password: $scope.token.password,
                  rememberMe: $scope.token.rememberMe
              }).success(function (data, status, headers){
                    $location.path('/dashboard');
                    $rootScope.loggedin = true;
                    console.log('Authenticated successfully');
              }).error(function (data, status, headers) {
                  $location.path('/');
                  $rootScope.loggedin = false;
                  console.log('Authenticated failed');
              })
          }
  
});
// TODO: make use of angular-shiro later
// .config(['angularShiroConfigProvider', function (config) {
//     config.setAuthenticateUrl('http://localhost:8081/aedms-core/auth');
//      config.setLoginPath('/');
      
// }]);