'use strict';

angular.module('activitiApp', [ 'ngResource', 'ui.bootstrap', "ngRoute",'angularMoment', 'ngFileUpload', 'nvd3', 'angularShiro'])

    // Temporary until we have a login page: always log in with kermit:kermit
//    .config(['$httpProvider', function ($httpProvider) {
//        $httpProvider.defaults.headers.common['Authorization'] = 'Basic a2VybWl0Omtlcm1pdA==';
//    }])


.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
                // templateUrl: 'views/loginshiro.html',
                // controller: 'LoginShiroCtrl'
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            }) .when('/dashboard', {
                templateUrl: 'views/dashboard.html',
                controller: 'DashboardCtrl'
            }).when('/users', {
                templateUrl: 'views/users.html',
                controller: 'UsersCtrl'
            }).when('/groups', {
                templateUrl: 'views/groups.html',
                controller: 'GroupsCtrl'
            }).when('/tasks', {
                templateUrl: 'views/tasks.html',
                controller: 'TasksCtrl'
            }).when('/processes', {
                templateUrl: 'views/processes.html',
                controller: 'ProcessesCtrl'
            }).when('/instances', {
                templateUrl: 'views/instances.html',
                controller: 'InstancesCtrl'
            }).when('/monitor', {
               templateUrl: 'views/monitor.html',
               controller: 'MonitorCtrl'
           }).when('/coreobjects', {
               templateUrl: 'views/coreobjects.html',
               controller: 'CoreObjectsCtrl'
           }).when('/eoobjects', {
               templateUrl: 'views/eoobjects.html',
               controller: 'EOObjectsCtrl'
           }).otherwise({
                redirectTo: '/'
           });
    }]);


    // .config(['$routeProvider', 'angularShiroConfigProvider', function ($routeProvider, config) {

    //     config.setAuthenticateUrl('http://localhost:8081/aedms-core/auth' );
    //     config.setLoginPath('/');
    //     $routeProvider
    //         .when('/', {
    //             templateUrl: 'views/loginshiro.html',
    //             controller: 'LoginShiroCtrl'
    //         }) .when('/dashboard', {
    //             templateUrl: 'views/dashboard.html',
    //             controller: 'DashboardCtrl'
    //         }).when('/users', {
    //             templateUrl: 'views/users.html',
    //             controller: 'UsersCtrl'
    //         }).when('/groups', {
    //             templateUrl: 'views/groups.html',
    //             controller: 'GroupsCtrl'
    //         }).when('/tasks', {
    //             templateUrl: 'views/tasks.html',
    //             controller: 'TasksCtrl'
    //         }).when('/processes', {
    //             templateUrl: 'views/processes.html',
    //             controller: 'ProcessesCtrl'
    //         }).when('/instances', {
    //             templateUrl: 'views/instances.html',
    //             controller: 'InstancesCtrl'
    //         }).when('/monitor', {
    //            templateUrl: 'views/monitor.html',
    //            controller: 'MonitorCtrl'
    //        })
    //         .otherwise({
    //             redirectTo: '/'
    //         });
    // }]);

    


