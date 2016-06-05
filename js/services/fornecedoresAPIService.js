angular.module("estoqueApp").factory("fornecedoresAPI", function ($http){

	var _postFornecedor = function(fornecedor){
		return $http.post("api/fornecedores.php", fornecedor);
	}

	var _getFornecedores = function(){
		return $http.get("api/fornecedores.php");
	}

	return {
		postFornecedor: _postFornecedor,
		getFornecedores: _getFornecedores
	}
});