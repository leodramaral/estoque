angular.module("estoqueApp").directive("uiCpf", function(){
	return{
		require: "ngModel",
		link: function(scope, element, attrs, ctrl){
			
			var _formatCpf = function(cpf) {
				cpf = cpf.replace(/[^0-9]+/g, "");

				if(cpf.length > 11){
					cpf = cpf.substring(0,11);
				}

				return cpf;
			};

			element.bind("keyup", function () {
				ctrl.$setViewValue(_formatCpf(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	};
});