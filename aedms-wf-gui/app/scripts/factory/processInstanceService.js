angular.module('activitiApp').factory('ProcessInstanceService', function ($resource) {
    var data = $resource('http://localhost:8080/aedms-wf/process-instance/:processInstance', {processInstance: "@processInstance"});
    return data;
});
