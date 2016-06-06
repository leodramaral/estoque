angular.module("estoqueApp").factory("produtosAPI", function ($http){

	var _postProduto =  function(produto){
		return $http.post("api/produtos.php", produto);
	}

	var _getProdutos = function(){
		return $http.get("api/produtos.php");
	}

	var _getProdutosNoEstoque = function(){
		return $http.get("api/produtos.php?tipo=estoque");
	}

	return {
		postProduto: _postProduto,
		getProdutos: _getProdutos,
		getProdutosNoEstoque: _getProdutosNoEstoque
	}

});