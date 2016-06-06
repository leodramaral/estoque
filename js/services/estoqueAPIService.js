angular.module("estoqueApp").factory("estoqueAPI", function ($http){

	var _getEstoque = function(){
		return $http.get("api/estoque.php");
	}

	return {
		getEstoque: _getEstoque
	}
	
});