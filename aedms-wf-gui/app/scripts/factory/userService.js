angular.module('activitiApp').factory('UserService', function ($resource) {
    var data = $resource('http://localhost:8080/aedms-wf/identity/users/:user', {user: "@user", size: 100});
    return data;
});
