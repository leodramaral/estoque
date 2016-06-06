angular.module("estoqueApp").controller("usuariosCtrl", function($scope, usuariosAPI){

	$scope.addUsuario = function (usuario){
        
        usuario.data_criacao = new Date();

        usuariosAPI.postUsuario(usuario)
        .success(function(data){
            delete $scope.usuario;
            $scope.usuarioForm.$setPristine();
        })
        .error(function(data, status){
            console.log(status);
        });
	};

    var listarUsuarios = function(){
        usuariosAPI.getUsuarios()
        .success(function(data){
            $scope.usuarios = data;
        })
        .error(function(data, status){
            console.log(status);
        });
    }

    listarUsuarios();
    
});