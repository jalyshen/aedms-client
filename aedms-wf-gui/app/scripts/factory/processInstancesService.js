angular.module('activitiApp').factory('ProcessInstancesService', function ($resource) {
    var data = $resource('http://localhost:8080/aedms-wf/runtime/process-instances/:processInstance', {processInstance: "@processInstance"});
    return data;
});
