angular.module("estoqueApp").factory("usuariosAPI", function ($http){
	
	var _postUsuario = function(usuario){
		return $http.post("api/usuarios.php", usuario);
	};

	return {
		postUsuario : _postUsuario
	};
	
});