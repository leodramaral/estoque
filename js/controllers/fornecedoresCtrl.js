angular.module("estoqueApp").controller("fornecedoresCtrl", function($scope, fornecedoresAPI){
	
	$scope.addFornecedor = function(fornecedor){
		fornecedoresAPI.postFornecedor(fornecedor)
		.success(function (data){
			if (!data.success){
                $scope.message = "Fornecedor com o mesmo CPF já cadastrado";
            } else {
                console.log(data);
                $scope.message = "Fornecedor cadastrado com sucesso!";
            }
			delete $scope.fornecedor;
			$scope.fornecedorForm.$setPristine();
		})
		.error(function(data, status){
            $scope.message = "Ocorreu um erro ao conectar a base de dados.";
        });
	}

	var listarFornecedores = function(){
		fornecedoresAPI.getFornecedores()
        .success(function(data){
            $scope.fornecedores = data;
        })
        .error(function(data, status){
            $scope.message = "Ocorreu um erro ao conectar a base de dados.";
        });
	}

	listarFornecedores();
	
});