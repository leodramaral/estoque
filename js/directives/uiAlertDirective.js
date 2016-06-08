angular.module("estoqueApp").directive("uiError", function(){
	return{
		templateUrl: "view/alertError.html",
		replace: true,
		restrict: 'AE',
		scope: {
			title: "@"
		},
		transclude: true
	};
});

angular.module("estoqueApp").directive("uiSuccess", function(){
	return{
		templateUrl: "view/alertSuccess.html",
		replace: true,
		restrict: 'AE',
		scope: {
			title: "@"
		},
		transclude: true
	};
});