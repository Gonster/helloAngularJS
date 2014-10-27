angular
    .module('categoryBlock', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/cate', {templateUrl: './view/cate.html', controller: generateDataCtrl})
                .when('/detail', {templateUrl: './view/detail.html', controller: detailCtrl})
                .otherwise({redirectTo: '/cate'});
        }
    ]);

var generateDataCtrl = ['$scope', function($scope) {
    $scope.aList = [
        {
            'name': 'abc',
            'quntity': 'med'
        },
        {
            'name': 'bcd',
            'quntity': 'high'
        }
    ];
    $scope.orderColumn = 'quntity';
}];

var detailCtrl = ['$scope', '$http', function($scope, $http) {
    $http
        .get('./data/detail.json')
            .success(function(data){
                $scope.aList = data;    
            });
}];