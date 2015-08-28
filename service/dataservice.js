/**
 * Created by LAKI on 8/20/2015.
 */
(function(){

    angular.module('restroportal')
        .service('dataService', dataServiceFn);

    dataServiceFn.$inject = ['$q', '$http'];

    function dataServiceFn($q, $http) {
        var self = this;

        self.getUsers = function(){

        }

    }

})();