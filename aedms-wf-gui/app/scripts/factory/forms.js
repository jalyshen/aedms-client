angular.module('activitiApp').factory('FormDataService', function ($resource) {
    var data = $resource('http://localhost:8080/aedms-wf/form/form-data', {}, {
        startTask: {method:'GET',  params: {processDefinitionId: "@processDefinitionId"}}
    });
    return data;
});