/**
 * Created by LAKI on 8/15/2015.
 */
(function(){

    angular
        .module('restroportal')
        .controller('LoginCtrl', LoginController);

    function LoginController(){
        var LoginVm = this;
        console.log('Owner login Controller');
        //CustomerVm.setPage ='/customers/reserve';
        //CustomerVm.setPage2= '/customers/edit';
    }

})();