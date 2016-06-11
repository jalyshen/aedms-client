angular.module('activitiApp').controller('CoreObjectsCtrl', function ($scope, $rootScope, $location,CoreObjectService) {
    if (typeof  $rootScope.loggedin == 'undefined' || $rootScope.loggedin == false) {
        $location.path('/login');
        return;
    }


    //TODO: enable the size parameter from server side.
    $scope.engines = CoreObjectService.get();

});