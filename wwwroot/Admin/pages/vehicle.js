

app.controller("VehicleController", function ($scope, $http) {

    $scope.GetVehicleList = function () {
        $http({
            method: "GET",
            headers: GetHeader(),
            url: "https://localhost:7165/api/Vehicle/GetAll"
        }).then(function (response) {
            $scope.vehicleList = response.data;
        });
    }

    $scope.GetVehicleList();

  
  

    $scope.VehicleDelete = function (id) {
        $http({
            method: "GET",
            headers: GetHeader(),
            url: "https://localhost:7165/api/Vehicle/Delete?vehicleId=" + id
        }).then(function (response) {
            alert("İlan silinmiştir.");
            $scope.GetVehicleList();
        });
    }

    $scope.VehicleActive = function (id) {
        $http({
            method: "PUT",
            headers: GetHeader(),
            url: "https://localhost:7165/api/Vehicle/SetActive?vehicleId=" + id
        }).then(function (response) {
            alert("İlan aktifleştirildi.");
            $scope.GetVehicleList();
        });
    }

});