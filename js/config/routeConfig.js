angular.module("estoqueApp").config(function ($routeProvider){

	$routeProvider.when("/listarEstoque", {
		templateUrl: "view/listarEstoque.html",
		controller: "estoqueCtrl"
	});
	
	$routeProvider.when("/listarUsuarios", {
		templateUrl: "view/listarUsuarios.html",
		controller: "usuariosCtrl"
	});

	$routeProvider.when("/cadastrarUsuario", {
		templateUrl: "view/cadastrarUsuario.html",
		controller: "usuariosCtrl"
	});

	$routeProvider.when("/listarFornecedores", {
		templateUrl: "view/listarFornecedores.html",
		controller: "fornecedoresCtrl"
	});

	$routeProvider.when("/cadastrarFornecedor", {
		templateUrl: "view/cadastrarFornecedor.html",
		controller: "fornecedoresCtrl"
	});

	$routeProvider.when("/listarProdutos", {
		templateUrl: "view/listarProdutos.html",
		controller: "produtosCtrl"
	});

	$routeProvider.when("/cadastrarProduto", {
		templateUrl: "view/cadastrarProduto.html",
		controller: "produtosCtrl"
	});

	$routeProvider.when("/listarCompras", {
		templateUrl: "view/listarCompras.html",
		controller: "comprasCtrl"
	});

	$routeProvider.when("/cadastrarCompra", {
		templateUrl: "view/cadastrarCompra.html",
		controller: "comprasCtrl"
	});

	$routeProvider.when("/listarBaixas", {
		templateUrl: "view/listarBaixas.html",
		controller: "baixasCtrl"
	});

	$routeProvider.when("/cadastrarBaixa", {
		templateUrl: "view/cadastrarBaixa.html",
		controller: "baixasCtrl"
	});

	$routeProvider.otherwise({redirectTo: "/listarEstoque"});

});