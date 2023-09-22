app.controller("CategoryController", function ($scope, $http) {


    $scope.GetVehicleList = function () {
        $http({
            method: "GET",
            url: "https://localhost:7165/api/Vehicle/GetAllByCategoryId?categoryId=" + GetUrlParameter("Id")
        }).then(function (response) {
            $scope.vehicleList = response.data;
        })
    }

    $scope.GetVehicleList();


});