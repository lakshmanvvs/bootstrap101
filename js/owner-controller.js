/**
 * Created by LAKI on 8/15/2015.
 */
(function(){

    angular
        .module('restroportal')
        .controller('LoginCtrl', LoginController);

    LoginController.$inject = ['$http'];

    function LoginController($http){
        var LoginVm = this;
        console.log('Owner login Controller');
        //CustomerVm.setPage ='/customers/reserve';
        //CustomerVm.setPage2= '/customers/

        LoginVm.login = function(){

            $http({
                method: 'POST',
                url: 'api/owner/login',
                data: LoginVm.loginOwner
            }).success(function(data){
                console.log(data);
                LoginVm.loginOwner = null;
            }).error(function(error){
                console.log(error);
            });
        };
    }

})();