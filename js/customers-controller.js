/**
 * Created by LAKI on 8/15/2015.
 */
(function(){

    angular
        .module('restroportal')
        .controller('CustomerCtrl', CustomerController);

    CustomerController.$inject = ['$http'];

      function CustomerController($http){
          var CustomerVm = this;
          console.log('Customers Controller');
          CustomerVm.setPage ='/customers/reserve';
          CustomerVm.setPage2= '/customers/edit';

          CustomerVm.reserveUser = function() {
              $http({
                  method: 'POST',
                  url: 'api/customer/reservetable',
                  data: CustomerVm.newUser
              }).success(function(data){
                  console.log(data);
                  mctrl.newEmp = null;
              }).error(function(error){
                  console.log(error);
              });

          };

      }

})();