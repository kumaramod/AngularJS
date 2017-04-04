angular.module('angularRouting', ['ngRoute']).
        controller('mainController', ['$scope', function ($scope) {
            $scope.welcome = "Welcome in angular Routing application";
        }]).
        controller('firstChild', ['$scope', function ($scope) {
            $scope.firstPageContent = "This is the first page Added by first Controller.";
        }])
        .controller('secondChild', ['$scope', function ($scope) {
            $scope.secondPageContent = "This is the second page Added by second Controller.";
        }])
        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider
                .when('/first', {
                    templateUrl: 'first.html'
                })
                .when('/second', {
                    templateUrl: 'second.html',
                    controller: 'secondChild'
                })
                .otherwise({
                    redirectTo: '/'
                });
        }]);