angular.module('activitiApp').factory('ReportService', function ($resource) {
    var data = $resource('http://localhost:8085/aedms-reporting/reportgen/');
    return data;
});
