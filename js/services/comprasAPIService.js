angular.module("estoqueApp").factory("comprasAPI", function ($http){

	var _postCompras = function(compras){
		return $http.post("api/compras.php", compras);
	}

	var _getCompras = function(){
		return $http.get("api/compras.php");
	}

	return {
		postCompras: _postCompras,
		getCompras: _getCompras
	}
	
});