app.controller("HomeController", function ($scope, $http, $sce) {

    $scope.GetVehicleList = function () {
        $http({
            method: "GET",
            url:"https://localhost:7165/api/Vehicle/GetAllNonDeleted"
        }).then(function (response) {
            $scope.vehicleList = response.data;
        })
    }

    $scope.GetVehicleList();

    $scope.trustAsHtml = function (html) {
        return $sce.trustAsHtml(html);
    }
})