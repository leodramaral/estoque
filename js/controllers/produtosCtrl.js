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

});