
var file;
var fileName;

app.controller("VehicleAddController", function ($scope, $http) {

    $("#flpUpload").change(function () {

        const fileReader = new FileReader();

        fileReader.onload = (event) => {
            file = new Uint8Array(event.target.result).toString();
        }
        fileReader.readAsArrayBuffer(event.target.files[0]);

        fileName = event.target.files[0].name;

        $("#vehicleFilePreview").attr("src", URL.createObjectURL(event.target.files[0]));

    });



    $scope.GetCategoryList = function () {
        $http({
            method: "GET",
            headers: GetHeader(),
            url: "https://localhost:7165/api/Category/GetAllNonDeleted"
        }).then(function (response) {
            $scope.categoryList = response.data;
        })
    }

    $scope.GetCategoryList();

    $scope.VehicleAdd = function () {

        $scope.vehicle.file = file;
        $scope.vehicle.fileName = fileName;
        $scope.vehicle.content = CKEDITOR.instances['editor'].getData();

        $http({
            method: "POST",
            headers: GetHeader(),
            url: "https://localhost:7165/api/Vehicle/Add",
            data: $scope.vehicle
        }).then(function (response) {
            alert("İlan başarıyla eklenmiştir.");
        })
    }

   

});