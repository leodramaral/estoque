angular.module("estoqueApp").controller("produtosCtrl", function ($scope, produtosAPI){

	$scope.addProduto = function (produto){

		produtosAPI.postProduto(produto)
		.success(function(data){
			delete $scope.produto;
			$scope.produtoForm.$setPristine();
		})
		.error(function(data, status){
			console.log(status);
		});

	};

	var listarProdutos = function(){
		produtosAPI.getProdutos()
        .success(function(data){
            $scope.produtos = data;
        })
        .error(function(data, status){
            console.log(status);
        });
	}

	listarProdutos();
	

});