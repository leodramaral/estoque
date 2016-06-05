angular.module("estoqueApp").factory("produtosAPI", function ($http){

	var _postProduto =  function(produto){
		return $http.post("api/produtos.php", produto);
	}

	return {
		postProduto: _postProduto
	}

});