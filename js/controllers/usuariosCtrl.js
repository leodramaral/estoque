angular.module("estoqueApp").controller("usuariosCtrl", function($scope, usuariosAPI){

	$scope.addUsuario = function (usuario){
        
        usuario.data_criacao = new Date();

        usuariosAPI.postUsuario(usuario)
        .success(function(data){
            if (!data.success){
                $scope.message = "Usuário já cadastrado";
            } else {
                console.log(data);
                $scope.message = "Usuário cadastrado com sucesso!";
            }
            delete $scope.usuario;
            $scope.usuarioForm.$setPristine();
        })
        .error(function(data, status){
            $scope.message = "Ocorreu um erro ao conectar a base de dados.";
        });
	};

    var listarUsuarios = function(){
        usuariosAPI.getUsuarios()
        .success(function(data){
            $scope.usuarios = data;
        })
        .error(function(data, status){
            $scope.message = "Ocorreu um erro ao conectar a base de dados.";
        });
    }

    listarUsuarios();
    
});