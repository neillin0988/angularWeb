var app = angular.module('myApp', []);

app.controller('MainCtrl', function($scope) {
    $scope.title = "MainCtrl";

    $scope.method = function(text) {
        text = text || '';
        console.log(text + ': this is MainCtrl')
    }
    $scope.method('MainCtrl');
});

app.controller('SecondCtrl', function($scope) {
    $scope.title = "SecondCtrl";

    $scope.method('SecondCtrl'); // 自身沒有 method 這個屬性 會試圖往 $parent 去找
});

app.controller('ThirdCtrl', function($scope) {
    $scope.title = "ThirdCtrl";

    $scope.method('ThirdCtrl');
});

