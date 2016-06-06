angular.module("estoqueApp").controller("baixasCtrl", function($scope, baixasAPI, produtosAPI, usuariosAPI){
	
	$scope.addBaixa = function(baixa){
		baixasAPI.postBaixa(baixa)
		.success(function (data){
			console.log(data);
		})
		.error(function(data, status){
            console.log(status);
        });
	}

	var carregarProdutosNoEstoque = function(){
		produtosAPI.getProdutosNoEstoque()
		.success(function (data){
			$scope.produtos = data;
		})
		.error(function(data, status){
            console.log(status);
        });
	}

	var carregarUsuarios = function(){
		usuariosAPI.getUsuarios()
		.success(function (data){
			$scope.usuarios = data;
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
	carregarProdutosNoEstoque();
	carregarUsuarios();

});