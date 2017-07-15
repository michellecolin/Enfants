angular.module("register", ['ui.mask']).controller("registerCtrl", function($scope, $timeout) {
	$scope.showList = true;
	$scope.newRegister = false;
	$scope.alert = {show: false};
	$scope.cadastro = "Novo Cadastro";

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
		}, 2000);
	};

	$scope.editRegister = function(register) {
		$scope.cadastro = "Editar Cadastro";
		$scope.showList = false;
		$scope.newRegister = true;
		$scope.register = register;
	};

	$scope.removeRegister = function(index) {
		$scope.registers.splice(index, 1);
		$scope.alert.message = "Cadastro removido!";
		$scope.alert.show = true; 

		$timeout(function() {
			$scope.alert.show = false;
		}, 2000);
	}

	$scope.removeMultipleRegisters = function (registers) {
		$scope.registers = registers.filter(function (register) {
			if (!register.selected) return register;
		});
	};

});