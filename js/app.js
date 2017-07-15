angular.module("register", ['ui.mask']).controller("registerCtrl", function($scope, $timeout) {
	$scope.showList = true;
	$scope.newRegister = false;
	$scope.alert = {show: false};

	$scope.registers = [
		{
			cpf: 1,
			name: "Maria Dirceu",
			birthDate: "1993-14-04",
			address: "Rua dr. odilon galotti m: 433",
			veicle: "aldi"
		},
		{
			cpf: 1,
			name: "Joana Dirceu",
			birthDate: "1993-14-04",
			address: "Rua dr. odilon galotti m: 433",
			veicle: "aldi"
		},
		{
			cpf: 1,
			name: "José Silva",
			birthDate: "1993-14-04",
			address: "Rua dr. odilon galotti m: 433",
			veicle: "aldi"
		},
		{
			cpf: 1,
			name: "Patricia Poeta",
			birthDate: "1993-14-04",
			address: "Rua dr. odilon galotti m: 433",
			veicle: "aldi"
		}
	];

	$scope.addRegister = function(register) {
		$scope.registers.push(register);
		delete $scope.register;
		$scope.registerForm.$setPristine();
		$scope.newRegister = false;
		$scope.showList = true;
		$scope.alert.message = "Novo cadastro adicionado!";
		$scope.alert.show = true; 

		$timeout(function() {
			$scope.alert.show = false;
		}, 1000);
	};

	
});