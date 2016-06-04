angular.module("estoqueApp").controller("fornecedoresCtrl", function($scope, fornecedoresAPI){
	
	$scope.addFornecedor = function(fornecedor){
		fornecedoresAPI.postFornecedor(fornecedor)
		.success(function (data){
			delete $scope.fornecedor;
            $scope.fornecedorForm.$setPristine();
		})
		.error(function(data, status){
            console.log(status);
        });
	}

});