var app = angular.module('myapp', [])
//.config(function (injectables) { // provider-injector
// This is an example of config block.
// You can have as many of these as you want.
// You can only inject Providers (not instances)
// into config blocks.
//$provide.value('a', 123);
//$provide.factory('a', function () { return 123; });
//$compileProvider.directive('directiveName', ...);
//$filterProvider.register('filterName', ...);

//}).
//run(function (injectables) { // instance-injector
// This is an example of a run block.
// You can have as many of these as you want.
// You can only inject instances (not Providers)
// into run blocks
//});

app.controller('ctrl', function ($scope) {

    $scope.firstName = "First Name";
    $scope.lastName = "Last Name";
    $scope.myfullname = myFullName;

    myFullName();
    function myFullName() {
        $scope.result = $scope.firstName + ' ' + $scope.lastName;
    }


    $scope.myName = function () { $scope.result = $scope.firstName + ' ' + $scope.lastName; };

});

