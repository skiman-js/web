function PickerCtrl($scope) {
	$scope.todos = [];
	
  $scope.addPowerBall = function() {
    console.log("start addPowerBall");
	$scope.todos = [];
	for(var ctr=0;ctr < $scope.formTodoPB;ctr++) {
		var numbers=[0,0,0,0,0];
		var i=0;
		while(_.contains(numbers, 0) ) {
			var num=_.random(1, 59);
			if (!(_.contains(numbers, num)) ) {
			   numbers[i++]=num;
			}
		  };
		  numbers=numbers.sort(function(a,b){return a-b});
		  numbers.push("PB="+_.random(1, 35));
		  $scope.todos.push({text:numbers});
	  }
	$scope.formTodoPB='';
	console.log("end addPowerBall");
  };
  
  
  $scope.addLotto = function() {
    console.log("start addLotto");
	$scope.todos = [];
	for(var ctr=0;ctr < $scope.formTodoLotto;ctr++) {
		var numbers=[0,0,0,0,0,0];
		var i=0;
		while(_.contains(numbers, 0) ) {
			var num=_.random(1, 59);
			if (!(_.contains(numbers, num)) ) {
			   numbers[i++]=num;
			}
		  };
		$scope.todos.push({text:numbers.sort(function(a,b){return a-b})});
	};
	$scope.formTodoLotto='';
	console.log("end addLotto");
  };
  
  $scope.clearTodo = function() {
    $scope.todos = [];
  };
 
}
