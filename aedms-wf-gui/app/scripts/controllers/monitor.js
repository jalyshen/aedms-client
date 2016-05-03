angular.module('activitiApp').controller('MonitorCtrl', function ($scope, $rootScope, $location,  $modal, moment, MonitorBAMService) {
    if (typeof  $rootScope.loggedin == 'undefined' || $rootScope.loggedin == false) {
        $location.path('/login');
        return;
    }

    
     MonitorBAMService.query(function(response) {
      
         var engineFleetArray =response;

        $scope.options = {
          chart: {
           type: 'discreteBarChart',
           height: 450,
           margin : {
              top: 20,
              right: 20,
              bottom: 60,
              left: 55
           },
           x: function(d){ return d.label; },
           y: function(d){ return d.value; },
           showValues: true,
           valueFormat: function(d){
             return d3.format(',.4f')(d);
           },
           transitionDuration: 500,
           xAxis: {
              axisLabel: 'X Axis'
           },
           yAxis: {
              axisLabel: 'Y Axis',
              axisLabelDistance: 30
           }
         }
        };
         
        $scope.data = [{
          key: "Engine Fleet Realtime Monitor",
          values: engineFleetArray
        }];
         
    });

});
