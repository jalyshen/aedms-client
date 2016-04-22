angular.module('activitiApp').factory('TasksService', function ($resource) {
    var data = $resource('http://localhost:8080/aedms-wf/runtime/tasks/:taskId', {taskId: "@taskId"},{
        update: {method: 'PUT', params: {taskId: "@taskId"}}
    });
    return data;
});