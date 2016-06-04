angular.module("estoqueApp").factory("fornecedoresAPI", function ($http){

	var _postFornecedor = function(fornecedor){
		return $http.post("api/fornecedores.php", fornecedor);
	}

	return {
		postFornecedor: _postFornecedor
	}
});