angular.module('activitiApp').factory('CoreObjectService', function ($resource) {
    var data = $resource('http://localhost:8081/aedms-core/engines/:engine', {engine: "@engine"});
    return data;
});
