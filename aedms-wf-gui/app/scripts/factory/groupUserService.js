angular.module('activitiApp').factory('GroupUserService', function ($resource) {
    var data = $resource('http://localhost:8080/aedms-wf/identity/groups/:group/members/:userId', {group: "@group",userId:"@userUrlId"});
    return data;
});
