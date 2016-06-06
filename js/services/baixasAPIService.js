angular.module("estoqueApp").factory("baixasAPI", function ($http){

	var _postBaixa = function(baixa){
		return $http.post("api/baixas.php", baixa);
	}

	var _getBaixas = function(){
		return $http.get("api/baixas.php");
	}

	return {
		postBaixa: _postBaixa,
		getBaixas: _getBaixas
	}
	
});