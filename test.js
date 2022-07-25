import * as film from './films-api-service.js';
import {FilmsAPIService} from './films-api-service.js';
import {FilmsDataStatsGenerator} from './films-data-stats-generator.js';

// Create a new instance of the FilmsAPIService class.
const filmsAPIService = new FilmsAPIService();

filmsAPIService.getFilms().then(films => {
    console.log(films);
}
).catch(error => {
    console.log(error);
}
);

// Create a new instance of the FilmsDataStatsGenerator class.
const filmsDataStatsGenerator = new FilmsDataStatsGenerator(new FilmsAPIService());

filmsDataStatsGenerator.getBestRatedFilm('Ridley Scott').then(bestRatedFilm => {
    console.log(`The best rated film directed by George Lucas is ${bestRatedFilm}`);
}
).catch(error => {
    console.log(error);
}
);

filmsDataStatsGenerator.getDirectorWithMostFilms().then(directorWithMostFilms => {
    console.log(`The director with the most films is ${directorWithMostFilms}`);
}
).catch(error => {
    console.log(error);
}
);

filmsDataStatsGenerator.getAverageRating('Ridley Scott').then(averageRating => {
    console.log(`The average rating for films directed by George Lucas is ${averageRating}`);
}
).catch(error => {
    console.log(error);
}
);










// film.getFilms().then(data => {
//     console.log(data);
// }
// ).catch(err => {
//     console.log(err);
// }
// );
