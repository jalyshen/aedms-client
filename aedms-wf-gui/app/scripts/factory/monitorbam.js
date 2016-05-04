angular.module('activitiApp').factory('MonitorBAMService', function ($resource) {
    return $resource('http://localhost:8083/aedms-monitor/engine-bam');
});
