
var appDir = angular.module('myDirectives', []);
appDir.controller('dirCtrl', function ($scope) {

    $scope.init = function () {
        
        $scope.names = [
{ name: 'Jani', country: 'Norway' },
{ name: 'Hege', country: 'Sweden' },
{ name: 'Kai', country: 'Denmark' }]
    }

    $scope.reverse = false;
    $scope.predicate = '';
    $scope.Test = "Amod";
    $scope.SortObj = SortObj;

    SortObj();
    function SortObj(ord) {
        $scope.predicate = ord;
    }
   
    $scope.init();

//    var self = this;
//    self.init = function () {
//        self.names = [
//{ name: 'Jani', country: 'Norway' },
//{ name: 'Hege', country: 'Sweden' },
//{ name: 'Kai', country: 'Denmark' }]
//    }
//    self.init();

});