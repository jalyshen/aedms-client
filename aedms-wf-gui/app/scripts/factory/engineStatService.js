angular.module('activitiApp').factory('EngineStatService', function ($resource) {
    var data = $resource('http://localhost:8081/aedms-core/engines/:engine/engineStatRecs/:enginestat', {engine: "@engine", enginestat: "@enginestat"});
    return data;
});
