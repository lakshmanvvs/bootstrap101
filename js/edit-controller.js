/**
 * Created by LAKI on 8/15/2015.
 */
(function(){

    angular
        .module('restroportal')
        .controller('EditCtrl', EditController);

    EditController.$inject = ['$http'];

    function EditController($http){
        var EditVm = this;
        console.log('Edit Controller');
        //CustomerVm.setPage ='/customers/reserve';
        //CustomerVm.setPage2= '/customers/edit';

        Editvm.updateEmp = function () {

            if(Editvm.confirmCode)
            {
                $http({
                    method: 'PUT',
                    url: 'api/customer/edittable/' + Editvm.confirmCode,
                    data: Editvm.editCustomer
                }).success(function(data){
                    console.log(data);
                    //Editvm.getdata = data;
                }).error(function(error){
                    console.log(error);
                });
            }
        };
    }

})();