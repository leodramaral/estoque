angular.module("estoqueApp").factory("baixasAPI", function ($http){

	var _postBaixa = function(baixa){
		return $http.post("api/baixas.php", baixa);
	}

	return {
		postBaixa: _postBaixa
	}
	
});