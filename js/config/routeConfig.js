angular.module("estoqueApp").config(function ($routeProvider){
	
	$routeProvider.when("/cadastrarUsuario", {
		templateUrl: "view/cadastrarUsuario.html",
		controller: "usuariosCtrl"
	});

	$routeProvider.when("/cadastrarFornecedor", {
		templateUrl: "view/cadastrarFornecedor.html",
		controller: "fornecedoresCtrl"
	});

	$routeProvider.when("/cadastrarProduto", {
		templateUrl: "view/cadastrarProduto.html",
		controller: "produtosCtrl"
	});

});