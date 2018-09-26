app.controller('scrollController', ['scope', '$http', function ($scope, $http) {

    $scope.currentPage = 1;
    $scope.totalPage = 0;
    $scope.memberList = [];

    function GetMemberData(page) {
        $scope.isLoading = true;

    }

}]);