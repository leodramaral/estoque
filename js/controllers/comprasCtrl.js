angular.module("estoqueApp").controller("comprasCtrl", function($scope, comprasAPI, fornecedoresAPI, produtosAPI){
	
	$scope.addCompra = function(compra){
		comprasAPI.postCompras(compra)
		.success(function (data){
			console.log(data);
		})
		.error(function(data, status){
            console.log(status);
        });
	}

	var carregarProdutos = function(){
		produtosAPI.getProdutos()
		.success(function (data){
			$scope.produtos = data;
		})
		.error(function(data, status){
            console.log(status);
        });
	}

	var carregarFornecedores = function(){
		fornecedoresAPI.getFornecedores()
		.success(function (data){
			$scope.fornecedores = data;
		})
		.error(function(data, status){
            console.log(status);
        });
	}

	$scope.quantidade = [];

	var carregarQuantidade = function(){
		var i;
		for (i = 0; i <= 50; i++ ){
			$scope.quantidade.push(i);
		}
	}

	carregarQuantidade();
	carregarProdutos();
	carregarFornecedores();

});