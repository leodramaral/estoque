angular.module("estoqueApp").config(function ($routeProvider){
	
	$routeProvider.when("/adicionarUsuario", {
		templateUrl: "view/adicionarUsuario.html",
		controller: "usuariosCtrl"
	});

	$routeProvider.when("/adicionarFornecedor", {
		templateUrl: "view/adicionarFornecedor.html",
		controller: "fornecedoresCtrl"
	});

});