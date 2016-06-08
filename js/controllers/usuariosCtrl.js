angular.module("estoqueApp").controller("usuariosCtrl", function($scope, usuariosAPI){

	$scope.addUsuario = function (usuario){
        
        usuario.data_criacao = new Date();

        usuariosAPI.postUsuario(usuario)
        .success(function(data){
            if (!data.success){
                $scope.error = true;
                $scope.success = false; 
            } else {
                $scope.success = true;
                $scope.error = false;
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