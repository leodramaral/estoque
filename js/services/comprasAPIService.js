angular.module("estoqueApp").factory("comprasAPI", function ($http){

	var _postCompras = function(compras){
		return $http.post("api/compras.php", compras);
	}

	return {
		postCompras: _postCompras
	}
	
});