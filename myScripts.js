angular.module("myApp", [])
    .controller("MainCtrl", mainController);


mainController.$inject = ["$http"];

function mainController($http) {
    var main = this;
    main.greeting = "This is working";
    main.myStarWarsPeople = [];
    main.myStarWarsStarships = [];
    main.myStarWarsFilms = [];

    main.getStarWarsStuff = function() {
        $http.get("http://swapi.co/api/" + main.type.toLowerCase() + "/?search=" + main.name)
            .then(function(res, status) {
                // main.myData = res.data.results[0];
                main.myStarWarsPeople = [];
                main.myStarWarsStarships = [];
                main.myStarWarsFilms = [];
                if (main.type.toLowerCase() === "people") {
                    // main.myStarWars.push(main.myData);
                    main.person = {
                        name: res.data.results[0].name,
                        weight: res.data.results[0].mass,
                        eyes: res.data.results[0].eye_color,
                        hair: res.data.results[0].hair_color,
                        dob: res.data.results[0].birth_year,
                        gender: res.data.results[0].gender
                    }
                    main.myStarWarsPeople.push(main.person);
                    console.log("Success: ", main.myStarWarsPeople);
                } else if (main.type.toLowerCase() === "starships") {
                    main.starship = {
                        name: res.data.results[0].name,
                        model: res.data.results[0].model,
                        manufacturer: res.data.results[0].manufacturer,
                        cost: res.data.results[0].cost_in_credits,
                        length: res.data.results[0].length,
                        speed: res.data.results[0].max_atmosphering_speed,
                        crew: res.data.results[0].crew,
                        passengers: res.data.results[0].passengers,
                        cargoCapacity: res.data.results[0].cargo_capacity,
                        consumables: res.data.results[0].consumables,
                        hyperdriveRating: res.data.results[0].hyperdrive_rating,
                        mglt: res.data.results[0].MGLT,
                        starshipClass: res.data.results[0].starship_class
                    }
                    main.myStarWarsStarships.push(main.starship);
                    console.log(main.myStarWarsStarships);

                } else if (main.type.toLowerCase() === "films") {
                    main.films = {
                        title: res.data.results[0].title,
                        episode: res.data.results[0].episode_id,
                        director: res.data.results[0].director,
                        producer: res.data.results[0].producer,
                        releaseDate: res.data.results[0].release_date,
                        crawl: res.data.results[0].opening_crawl
                    }
                    main.myStarWarsFilms.push(main.films);
                    console.log(main.myStarWarsFilms);
                }
            });

    }

    // function(res, status) {
    //     console.log("Error: ", status);
    //
    // });

}
// main.getStarWarsFilms = function() {
//     $http.get("http://swapi.co/api/films/?search=" + main.myDataFilms.title)
//         .then(function(res, status) {
//                 main.myDataFilms = res.data.results[0];
//                 console.log("Success: ", main.myDataFilms);
//             },
//             function(res, status) {
//                 console.log("Error: ", status);
//
//             });
//
// }
// main.
