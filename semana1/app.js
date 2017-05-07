// If the number of items in the textbox is less than or equal to 3
// (e.g., 1, 2, or 3), a message should show up under to the textbox
// saying "Enjoy!". If the number of items is greater than 3 (4, 5, and above),
// the message "Too much!" should show up under the textbox. (Hint: To implement
// this behavior you can utilize the split method. See documentation for that method)
//
// If the textbox is empty and the user clicks the "Check If Too Much" button,
// the message "Please enter data first" should show up. 'Empty' here means either ""
// (empty string) or a string with just spaces in it. (Hint: AngularJS ng-model already
// performs the trimming for you, so there shouldn't be anything you need to do.)
//
// Only 1 message should be shown at any given time. In other words, if you have
// both messages "Enjoy!" and "Too much!" showing up at the same time, it's an error.

(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.allDishes = "";
  $scope.message = "";
  $scope.color = "black";

  $scope.check = function () {
    // REGULAR ASSIGNMENT
    //
    // if (! $scope.allDishes) {
    //   $scope.message = "Please enter data first";
    //   $scope.color = "red";
    //   return;
    // }
    //
    // var arrayOfDishes = $scope.allDishes.split(",");
    // var numberOfDishes = arrayOfDishes.length;
    // $scope.message = numberOfDishes <= 3 ? "Enjoy!" : "Too much!";
    // $scope.color = "green";

    // BONUS (OPTIONAL AND NOT GRADED)
    var arrayOfDishes = $scope.allDishes.split(",");
    var numberOfDishes = 0;
    for (var i in arrayOfDishes) {
      if (arrayOfDishes[i]) {
        numberOfDishes++;
      }
    }
    if (numberOfDishes === 0) {
      $scope.message = "Please enter data first";
      $scope.color = "red";
    }
    else {
      $scope.message = numberOfDishes <= 3 ? "Enjoy!" : "Too much!";
      $scope.color = "green";
    }
  };
}

})();
