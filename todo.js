angular.module('app', []).controller(
  'ToDoController',
  [
    '$scope',
    function ($scope) {
      $scope.addTodo = function () {
        var todo = {"title": $scope.inputTitle};

        $scope.todos.push(todo);
        $scope.inputTitle = '';
      };

      $scope.todos = [];
    }
  ]
);