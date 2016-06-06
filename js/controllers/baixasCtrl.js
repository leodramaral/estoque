angular.module("estoqueApp").controller("baixasCtrl", function($scope, baixasAPI, produtosAPI, usuariosAPI){
	
	$scope.addBaixa = function(baixa){
		baixasAPI.postBaixa(baixa)
		.success(function (data){
			if (!data.success){
                $scope.message = "A quantidade selecionada está acima da quantidade em estoque";
            } else {
                console.log(data);
                $scope.message = "Baixa cadastrada com sucesso!";
            }
            delete $scope.baixa;
            $scope.baixaForm.$setPristine();
		})
		.error(function(data, status){
            $scope.message = "Ocorreu um erro ao conectar a base de dados.";
        });
	}

	var listarBaixas = function(){
		baixasAPI.getBaixas()
		.success(function(data){
			$scope.baixas = data;
		}).error(function(data, status){
			$scope.message = "Ocorreu um erro ao conectar a base de dados.";
		})
	}

	var carregarProdutosNoEstoque = function(){
		produtosAPI.getProdutosNoEstoque()
		.success(function (data){
			$scope.produtos = data;
		})
		.error(function(data, status){
            $scope.message = "Ocorreu um erro ao conectar a base de dados.";
        });
	}

	var carregarUsuarios = function(){
		usuariosAPI.getUsuarios()
		.success(function (data){
			$scope.usuarios = data;
		})
		.error(function(data, status){
            $scope.message = "Ocorreu um erro ao conectar a base de dados.";
        });
	}

	$scope.quantidade = [];

	var carregarQuantidade = function(){
		var i;
		for (i = 1; i <= 50; i++ ){
			$scope.quantidade.push(i);
		}
	}

	listarBaixas();
	carregarQuantidade();
	carregarProdutosNoEstoque();
	carregarUsuarios();

});