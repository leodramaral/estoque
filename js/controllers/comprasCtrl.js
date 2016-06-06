angular.module("estoqueApp").controller("comprasCtrl", function($scope, comprasAPI, fornecedoresAPI, produtosAPI){
	
	$scope.compras = [];

	$scope.addCompra = function(compra){

		compra.data_criacao = new Date();

		comprasAPI.postCompras(compra)
		.success(function (data){
			console.log(data);
			$scope.message = "Compra cadastrada com sucesso!";
			delete $scope.compra;
            $scope.compraForm.$setPristine();
		}).error(function(data, status){
            $scope.message = "Ocorreu um erro ao conectar a base de dados.";
        });
	}

	var listarCompras = function(){
		comprasAPI.getCompras()
		.success(function(data){
			$scope.compras = data;
		}).error(function(data, status){
			$scope.message = "Ocorreu um erro ao conectar a base de dados.";
		})
	}

	var carregarProdutos = function(){
		produtosAPI.getProdutos()
		.success(function (data){
			$scope.produtos = data;
		}).error(function(data, status){
			$scope.message = "Ocorreu um erro ao conectar a base de dados.";
        });
	}

	var carregarFornecedores = function(){
		fornecedoresAPI.getFornecedores()
		.success(function (data){
			$scope.fornecedores = data;
		}).error(function(data, status){
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

	carregarQuantidade();
	carregarProdutos();
	carregarFornecedores();
	listarCompras();

});