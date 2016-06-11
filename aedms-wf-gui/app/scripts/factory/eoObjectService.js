angular.module('activitiApp').factory('EOObjectService', function ($resource) {
    var data = $resource('http://localhost:8081/aedms-core/eoorders/:eoorder', {eoorder: "@eoorder"});
    return data;
});
