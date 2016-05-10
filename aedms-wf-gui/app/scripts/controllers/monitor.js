angular.module('activitiApp').controller('MonitorCtrl', function ($scope, $interval, $rootScope, $location,  $modal, moment, MonitorBAMService) {
    if (typeof  $rootScope.loggedin == 'undefined' || $rootScope.loggedin == false) {
        $location.path('/login');
        return;
    }

    var socket = {
        client: null,
        stomp: null
    };
    
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
                      values: [{"label":"HP", "value": 1}]
                 }];

    
    initSockets = function() {
        socket.client = new SockJS('http://localhost:8083/aedms-monitor/engine-bam-ed');
        socket.stomp = Stomp.over(socket.client);
        socket.stomp.connect({}, function() {
        socket.stomp.subscribe("/topic/engine-bam-ws", 
            function(message){

                     console.log(JSON.parse(message.body));

                     var engineFleetArray = JSON.parse(message.body);

                     function update() {
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
                    }

                    $interval(update, 1000);
                

             });
        });

    };
    
    initSockets();
    
    // Comment out following Restful way.
    // MonitorBAMService.query(function(response) {
      
    //      var engineFleetArray =response;

    //     $scope.options = {
    //       chart: {
    //        type: 'discreteBarChart',
    //        height: 450,
    //        margin : {
    //           top: 20,
    //           right: 20,
    //           bottom: 60,
    //           left: 55
    //        },
    //        x: function(d){ return d.label; },
    //        y: function(d){ return d.value; },
    //        showValues: true,
    //        valueFormat: function(d){
    //          return d3.format(',.4f')(d);
    //        },
    //        transitionDuration: 500,
    //        xAxis: {
    //           axisLabel: 'X Axis'
    //        },
    //        yAxis: {
    //           axisLabel: 'Y Axis',
    //           axisLabelDistance: 30
    //        }
    //      }
    //     };
         
    //     $scope.data = [{
    //       key: "Engine Fleet Realtime Monitor",
    //       values: engineFleetArray
    //     }];
         
    // });

});
