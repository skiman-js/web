function TodoCtrl($scope) {
//  $scope.totalTodos=4;
  $scope.todos = [{text:'Learn AngularJS',done:false},
    {text:'Build an app',done:false}];
	
  $scope.getTotalTodos = function() {
    return $scope.todos.length;
  };
  
  $scope.addTodo = function() {
//   console.log("start addTodo");
    $scope.todos.push({text:$scope.formTodoText, done:false});
    $scope.formTodoText = '';
//	console.log("end addTodo");
  };
  
  $scope.clearTodo = function() {
    var oldTodos = $scope.todos;
    $scope.todos = [];
    angular.forEach(oldTodos, function(todo) {
      if (!todo.done) $scope.todos.push(todo);
    });
  };
}