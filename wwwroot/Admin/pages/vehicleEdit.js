

app.controller("VehicleEditController", function ($scope, $http) {

    $scope.GetUrlParameter = function (parmeterName) {
        const url = window.location.search;
        const urlParams = new URLSearchParams(url);
        const result = urlParams.get(parmeterName);
        if (result == null) {
            return "";
        }
        else {
            return result;
        }
    };

    $http({
        method: "GET",
        headers: GetHeader(),
        url: "https://localhost:7165/api/Category/GetAllNonDeleted"
    }).then(function (response) {
        $scope.categoryList = response.data;
    })

    $http({
        method: "GET",
        headers: GetHeader(),
        url: "https://localhost:7165/api/Vehicle/GetById?id=" + $scope.GetUrlParameter("Id")
    }).then(function (response) {
        $scope.vehicle = response.data;
        $scope.vehicle.categoryId = $scope.vehicle.category.id;
    });

   

    $scope.VehicleEdit = function () {
        $http({
            method: "PUT",
            headers: GetHeader(),
            url: "https://localhost:7165/api/Vehicle/Update?vehicleId=" + $scope.GetUrlParameter("Id"),
            data: $scope.vehicle
        }).then(function (response) {
            alert("İlan başarıyla güncellenmiştir.");
        });
    }


  

});