resourceApp.controller('vendorCtrl',['$scope','$state','RAService',function($scope,$state,RAService){
	
	$scope.$on('$viewContentLoaded',function(){
		$scope.getroles();
	})
		$scope.vvv = localStorage.getItem('registrationType');
		$scope.register =  $scope.vvv.split(',');
		$scope.user1 = localStorage.getItem('user')
		console.log($scope.user1);
		console.log($scope.register);
		
		
		
		$scope.dataregister = function(){
			
			if($scope.registerData == "RA"){
				$state.go('RA.dashboard');
			}
			if($scope.registerData == "vendor"){
				$state.go('vendor.dashboard');
			}
			if($scope.registerData == "customer"){
				$state.go('customer.dashboard');
			}
		}
	
}])