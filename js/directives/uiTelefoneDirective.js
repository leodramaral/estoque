angular.module("estoqueApp").directive("uiTelefone", function(){
	return{
		require: "ngModel",
		link: function(scope, element, attrs, ctrl){
			
			var _formatTelefone = function(fone) {
				fone = fone.replace(/[^0-9]+/g, "");

				if(fone.length > 0){
					fone = "(" + fone.substring(0);
				}

				if(fone.length > 3){
					fone = fone.substring(0,3) + ")" + fone.substring(3);
				}
				if(fone.length > 9){
					fone = fone.substring(0,9) + "-" + fone.substring(9,13);
				}

				return fone;
			};

			element.bind("keyup", function () {
				ctrl.$setViewValue(_formatTelefone(ctrl.$viewValue));
				ctrl.$render();
			});
		}
	};
});