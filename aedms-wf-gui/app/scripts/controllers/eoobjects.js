angular.module('activitiApp').controller('EOObjectsCtrl', function ($scope, $rootScope, $location,EOObjectService) {
    if (typeof  $rootScope.loggedin == 'undefined' || $rootScope.loggedin == false) {
        $location.path('/login');
        return;
    }


    //TODO: enable the size parameter from server side.
    $scope.eoorders = EOObjectService.get();

});