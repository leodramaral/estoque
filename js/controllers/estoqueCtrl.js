angular.module("estoqueApp").controller("estoqueCtrl", function ($scope, estoqueAPI){

	var listarEstoque = function(){
		estoqueAPI.getEstoque()
        .success(function(data){
            $scope.estoques = data;
        })
        .error(function(data, status){
            $scope.message = "Ocorreu um erro ao conectar a base de dados.";
        });
	}

	listarEstoque();

});