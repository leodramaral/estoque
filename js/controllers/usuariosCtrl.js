angular.module("estoqueApp").controller("usuariosCtrl", function($scope, usuariosAPI){

	$scope.addUsuario = function (usuario){
        
        usuario.data_criacao = new Date();

        usuariosAPI.postUsuario(usuario)
        .success(function(data){
            console.log(data);
        })
        .error(function(data, status){
            console.log(status);
        });
	};
    
});