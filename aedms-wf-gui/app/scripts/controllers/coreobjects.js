angular.module('activitiApp').controller('CoreObjectsCtrl', function ($scope, $rootScope, $location,CoreObjectService, ReportService, $modal, $http) {
    if (typeof  $rootScope.loggedin == 'undefined' || $rootScope.loggedin == false) {
        $location.path('/login');
        return;
    }


    //TODO: enable the size parameter from server side.
    $scope.engines = CoreObjectService.get();

    //Only allow Read
    var ModalEngineOprStatInstanceCtrl = function ($scope, $modalInstance, engine, EngineOprService, EngineStatService) {
        $scope.engine = engine;
        $scope.ok = function () {
            $modalInstance.close(engine);
        };
        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

        function reloadEngineOprRecs() {
             $scope.engineOpsRecs = EngineOprService.get({"engine": engine._links.self.href.split('/').pop()});
        };

        function reloadEngineStatRecs() {
             $scope.engineStatRecs = EngineStatService.get({"engine": engine._links.self.href.split('/').pop()});
        };
        reloadEngineOprRecs();
        reloadEngineStatRecs();

       
        function clearSelection() {
            $scope.selected = undefined;
        }
        clearSelection();

    }

    $scope.showEngineOprStat = function (engine) {
        var uibModalInstance = $modal.open({
            templateUrl: 'views/modals/engineOpr_stat.html',
            controller: ModalEngineOprStatInstanceCtrl,
            resolve: {
                engine: function () {
                    return engine;
                }
            }
        });
        uibModalInstance.result.then(function (newEngine) {}, function () {});
    };

    //To generate ad-hoc report for the engine.
    //TODO: Pass in the engine ID as param.
    //TODO: change to resource
    $scope.genReport = function(engine){
    	   $http({
                 url: 'http://localhost:8085/aedms-reporting/reportgen/',
                 method: "POST",
                 data: { 
                 	     'reportName' : 'report.samples.customer.design',
                         'reportParm1':'name'
                       }
           })
          .then(function(response) {
          	   //TODO: display this nicely
          	   var file = new Blob([response], {type: 'application/pdf'});
               var fileURL = URL.createObjectURL(file);
               window.open(fileURL);
           }, 
           function(response) { // optional
            // failed
           });
    };
  

});