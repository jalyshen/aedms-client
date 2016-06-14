angular.module('activitiApp').factory('EngineOprService', function ($resource) {
    var data = $resource('http://localhost:8081/aedms-core/engines/:engine/engineOprRecs/:engineopr', {engine: "@engine",engineopr: "@engineopr"});
    return data;
});
