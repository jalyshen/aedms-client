angular.module('activitiApp').factory('GroupService', function ($resource) {
    var data = $resource('http://localhost:8080/aedms-wf/identity/groups/:group', {group: "@group"});
    return data;
});
