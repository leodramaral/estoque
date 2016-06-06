angular.module("estoqueApp").controller("estoqueCtrl", function ($scope, estoqueAPI){

	var listarEstoque = function(){
		estoqueAPI.getEstoque()
        .success(function(data){
            $scope.estoques = data;
        })
        .error(function(data, status){
            console.log(status);
        });
	}

	listarEstoque();

});