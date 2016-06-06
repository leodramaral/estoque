angular.module("estoqueApp").controller("comprasCtrl", function($scope, comprasAPI, fornecedoresAPI, produtosAPI){
	
	$scope.compras = [];

	$scope.addCompra = function(compra){

		compra.data_criacao = new Date();

		comprasAPI.postCompras(compra)
		.success(function (data){
			console.log(data);
		}).error(function(data, status){
            console.log(status);
        });
	}

	var listarCompras = function(){
		comprasAPI.getCompras()
		.success(function(data){
			$scope.compras = data;
		}).error(function(data, status){
			console.log(status);
		})
	}

	var carregarProdutos = function(){
		produtosAPI.getProdutos()
		.success(function (data){
			$scope.produtos = data;
		}).error(function(data, status){
            console.log(status);
        });
	}

	var carregarFornecedores = function(){
		fornecedoresAPI.getFornecedores()
		.success(function (data){
			$scope.fornecedores = data;
		}).error(function(data, status){
            console.log(status);
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