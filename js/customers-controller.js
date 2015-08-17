/**
 * Created by LAKI on 8/15/2015.
 */
(function(){

    angular
        .module('restroportal')
        .controller('CustomerCtrl', CustomerController);

      function CustomerController(){
          var CustomerVm = this;
          console.log('Customers Controller');
          CustomerVm.setPage ='/customers/reserve';
          CustomerVm.setPage2= '/customers/edit';
      }

})();