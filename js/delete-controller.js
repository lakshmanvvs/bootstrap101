/**
 * Created by LAKI on 8/24/2015.
 */
(function(){

    angular
        .module('restroportal')
        .controller('DeleteCtrl', DeleteController);

    function DeleteController(){
        var Deletevm = this;
        console.log('Delete Controller');

        DeleteVm.delete = function () {

            if(DeleteVm.confirmCode)
            {
                $http({
                    method: 'DELETE',
                    url: 'api/customer/reserve/delete/' + DeleteVm.confirmCode,

                }).success(function(data){
                    console.log(data);
                    //customerVm.getdata = data;
                }).error(function(error){
                    console.log(error);
                });
            }
        };
    }

})();