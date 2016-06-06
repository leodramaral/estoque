angular.module("estoqueApp").controller("produtosCtrl", function ($scope, produtosAPI, $http){

	$scope.addProduto = function (produto){
		
		var imgData = new FormData();
		imgData.append('imagem', $('#imagem').get(0).files[0]);

		$.ajax({
			type: 'POST',
			url: 'api/uploadFoto.php',
			data: imgData,
			processData: false,
			contentType: false,
			success: function(response){
				console.log(response);
			}
		});

		var nomeImagem = $('#imagem').val();
		produto.img_path = "/" + nomeImagem;

		produtosAPI.postProduto(produto)
		.success(function(data){
			if (!data.success){
                $scope.message = "Produto com o mesmo nome já cadastrado";
            } else {
                console.log(data);
                $scope.message = "Produto cadastrado com sucesso!";
            }
			delete $scope.produto;
			$scope.produtoForm.$setPristine();
		})
		.error(function(data, status){
			$scope.message = "Ocorreu um erro ao conectar a base de dados.";
		});
	};

	var listarProdutos = function(){
		produtosAPI.getProdutos()
        .success(function(data){
            $scope.produtos = data;
        })
        .error(function(data, status){
          	$scope.message = "Ocorreu um erro ao conectar a base de dados.";
        });
	}

	listarProdutos();
	

});