(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

    $scope.lunchItems = "";
    $scope.message = "";
    $scope.color = "";

    $scope.checkIfTooMuch = function() {

        var numLunchItems = $scope.lunchItems
        // split the lunchItems string on the commas
        .split(',')
        // remove all strings that are empty or consisting of spaces only
        .filter(function(item) { return item.trim(); })
        // this list holds the actual total number of lunch items
        .length;

        /* print the appropriate message */

        // case 1: user didn't type anything
        if (numLunchItems == 0) {
            $scope.color = 'red';
            $scope.message = 'Please enter data first';
        // case 2: user typed something
        } else {
            $scope.color = 'green';
            if (numLunchItems <= 3) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }
        }

    };

};

})();
