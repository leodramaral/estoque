angular.module("estoqueApp").factory("usuariosAPI", function ($http){
	
	var _postUsuario = function(usuario){
		return $http.post("api/usuarios.php", usuario);
	};

	var _getUsuarios = function(){
		return $http.get("api/usuarios.php");
	};

	return {
		postUsuario : _postUsuario,
		getUsuarios: _getUsuarios
	};
	
});