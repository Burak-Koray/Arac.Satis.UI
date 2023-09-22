app.controller("VehicleController", function ($scope, $http, $sce) {

    $scope.GetVehicle = function () {
        $http({
            method: "GET",
            url: "https://localhost:7165/api/Vehicle/GetById?id=" + GetUrlParameter("Id")
        }).then(function (response) {
            $scope.vehicle = response.data;
        })
    }


    $scope.GetVehicle();


    $scope.AddComment = function () {

        $scope.addComment.vehicleId = GetUrlParameter("Id");

        $http({
            method: "POST",
            url: "https://localhost:7165/api/Comment/Add",
            data: $scope.addComment
        }).then(function (response) {
            $scope.GetVehicle();
            alert("Yorum Başarıyla Eklenmiştir.");
        });
    }

    $scope.trustAsHtml = function (html) {
        return $sce.trustAsHtml(html);
    }
});