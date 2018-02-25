(function () {
    var app = angular.module('app', []);
    var tittleController = function ($scope) {
        $scope.message = "Capstone Project.";
    };
    app.controller("tittleController", tittleController);
})();
