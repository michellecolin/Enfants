angular.module("register", ['ui.mask']).controller("registerCtrl", function($scope, $timeout, $http) {
	$scope.showList = true;
	$scope.newRegister = false;
	$scope.alert = {show: false};
	$scope.cadastro = "Novo Cadastro";
	$scope.veicles = {};
	$scope.editing = false;

	$http({
	  method: 'GET',
	  url: 'https://fipe-parallelum.rhcloud.com/api/v1/carros/marcas'
		}).then(function successCallback(response) {
			$scope.veicles.brands = response.data;
  	}, function errorCallback(response) {
  });

	function convertDateObjects(registers) {
		registers.forEach(function(register){
			register.birthDate = new Date(register.birthDate);
		});
		return registers;
  }

	$scope.registers = [];
	try{
		var registers = JSON.parse(localStorage.getItem('registers'));
		if (registers) {
			registers = convertDateObjects(registers);
			$scope.registers = registers;
		}

		console.log($scope.registers);
	} catch(err) {
		//err
	}

	$scope.addRegister = function(register) {
		if (!$scope.editing) {
			$scope.registers.push(register);
			$scope.alert.message = "Novo cadastro adicionado!";
		} else {
			$scope.editing = false;
			$scope.alert.message = "Cadastro editado!";
			$scope.cadastro = "Novo Cadastro";
		}
		
		delete $scope.register;
		$scope.registerForm.$setPristine();
		$scope.newRegister = false;
		$scope.showList = true;
		$scope.alert.show = true; 
		saveOnLocalStorage();

		$timeout(function() {
			$scope.alert.show = false;
		}, 2000);
	};

	$scope.editRegister = function(register) {
		$scope.cadastro = "Editar Cadastro";
		$scope.showList = false;
		$scope.newRegister = true;
		$scope.editing = true;
		$scope.veicles.models = [register.model];
		$scope.register = register;
		console.log(register);

	};

	$scope.removeRegister = function(index) {
		$scope.registers.splice(index, 1);
		$scope.alert.message = "Cadastro removido!";
		$scope.alert.show = true; 
		saveOnLocalStorage();

		$timeout(function() {
			$scope.alert.show = false;
		}, 2000);
	}

	$scope.removeMultipleRegisters = function (registers) {
		$scope.registers = registers.filter(function (register) {
			if (!register.selected) return register;
		});
		saveOnLocalStorage();
	};

	$scope.showModels = function(brand) {
		$http({
		  method: 'GET',
		  url: 'https://fipe-parallelum.rhcloud.com/api/v1/carros/marcas/' + brand + '/modelos'
			}).then(function successCallback(response) {
				$scope.veicles.models = response.data.modelos;
	  	}, function errorCallback(response) {
	  });
	};

	function saveOnLocalStorage() {
		localStorage.setItem('registers', JSON.stringify($scope.registers));
	}
});