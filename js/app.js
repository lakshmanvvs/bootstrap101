/**
 * Created by LAKI on 8/15/2015.
 */
(function(){

    angular.module('restroportal',['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];
    function moduleConfig($routeProvider){
        $routeProvider
            .when('/customers',{
                templateUrl: 'customer-tmpl.html',
                controller: 'CustomerCtrl',
                controllerAs:'CustomerVm'
            })
            .when('/customers/reserve',{
                templateUrl: 'customer-reserve-tmpl.html',
                controller: 'CustomerCtrl',
                controllerAs: 'CustomerVm'
            })
            .when('/customers/edit',{
                templateUrl: 'customer-edit-tmpl.html',
                controller: 'EditCtrl',
                controllerAs: 'EditVm'
            })
            .when('/customers/edit/:code', {
                templateUrl: 'customer-edit-tmpl.html',
                controller: 'EditCtrl',
                controllerAs: 'EditVm'
            })
            .when('/owner',{
                templateUrl: 'ownersign-tmpl.html',
                controller: 'LoginCtrl',
                controllerAs: 'LoginVm'
            })
            .otherwise({
                redirectTo: '/customers'
            });
    }

})();