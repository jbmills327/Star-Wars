angular.module("myApp", [])
    .controller("MainCtrl", mainController);


mainController.$inject = ["$http"];

function mainController($http) {
    var main = this;
    main.greeting = "This is working";
    main.peopleList = [];

    main.getStarWars = function() {
        $http.get("http://swapi.co/api/people/?search=" + main.myData.name)
            .then(function(res, status) {
                    main.myData = res.data.results[0];
                    console.log("Success: ", main.myData);
                },
                function(res, status) {
                    console.log("Error: ", status);

                });

    }
}
