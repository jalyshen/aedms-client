angular.module('activitiApp').factory('ShiroUserService', function ($resource) {
    var data = $resource('http://localhost:8081/aedms-core/auth');
    return data;
});
