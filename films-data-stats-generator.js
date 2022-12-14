import moment from 'moment';
export class FilmsDataStatsGenerator {

    constructor(filmsApiService) {
        this.filmsApiService = filmsApiService;
    }

    /**
     * Retrieves the name of the best rated film that was directed by the director with the given name.
     * If there are no films directed the the given director, this method should return null.
     * Note there will only be one film with the best rating.
    */
    async getBestRatedFilm(directorName) {
        //TODO Implement...

        const films = await this.filmsApiService.getFilms();
        const directorFilms = films.filter(film => film.directorName === directorName);
        const bestRatedFilm = directorFilms.reduce((bestFilm, currentFilm) => {
       
            if (currentFilm.rating > bestFilm.rating) {
                return currentFilm;
            }
            return bestFilm;
        }
        , { rating: 0 });
        return bestRatedFilm.name;


    }

    /**
     * Retrieves the name of the director who has directed the most films in the CodeScreen Film service.
    */
   async getDirectorWithMostFilms() {
        //TODO Implement...
        // Retrieves the name of the director who has directed the most films in the CodeScreen Film service.
        const films = await this.filmsApiService.getFilms();
        const directors = films.map(film => film.directorName);
        const directorCounts = directors.reduce((directorCount, currentDirector) => {
            if (directorCount[currentDirector]) {
                directorCount[currentDirector]++;
            } else {
                directorCount[currentDirector] = 1;
            }
            return directorCount;
        }
        , {});
        // return directorCounts;
        // return key in directorCounts with highest value
        // return Object.values(Math.max(directorCounts));
        const max = Object.values(directorCounts).reduce((a, b) => { return Math.max(a, b) });
     
         return String(Object.keys(directorCounts).filter(key => directorCounts[key] === max));

      
    }

    /**
     * Retrieves the average rating for the films directed by the given director, rounded to 1 decimal place.
     * If there are no films directed by the given director, this method should return null.
    */
   async getAverageRating(directorName) {
        //TODO Implement...
 
        const films = await this.filmsApiService.getFilms();
        const directorFilms = films.filter(film => film.directorName === directorName);
        const averageRating = directorFilms.reduce((averageRating, currentFilm) => {
            return averageRating + currentFilm.rating;
        }
        , 0) / directorFilms.length;
        return Number(averageRating.toFixed(1));

       

    }

    /**
     * Retrieves the shortest number of days between any two film releases directed by the given director.

     * If there are no films directed the the given director, this method should return null.
     * If there is only one film directed by the given director, return 0.
     * Note that no director released more than one film on any given day.
     *
     * For example, if the service returns the following 3 films,
     *
     * {
     *    "name": "Batman Begins",
     *    "length": 140,
     *
     *    "rating": 8.2,
     *    "releaseDate": "2006-06-16",
     *    "directorName": "Christopher Nolan"
     * },
     * {
     *    "name": "Interstellar",
     *    "length": 169,
     *    "rating": 8.6,
     *    "releaseDate": "2014-11-07",
     *    "directorName": "Christopher Nolan"
     * },
     * {
     *   "name": "Prestige",
     *   "length": 130,
     *   "rating": 8.5,
     *   "releaseDate": "2006-11-10",
     *   "directorName": "Christopher Nolan"
     * }
     *
     * then this method should return 147 for Christopher Nolan, as Prestige was released 147 days after Batman Begins.
    */
   async getShortestNumberOfDaysBetweenFilmReleases(directorName) {
        //TODO Implement...

        // getShortestNumberOfDaysBetweenFilmReleases
        // Should return 29 for Ridley Scott
        // Should return 147 for Christopher Nolan

        const films = await this.filmsApiService.getFilms();
        const directorFilms = films.filter(film => film.directorName === directorName);
        const directorFilmsDates = directorFilms.map(film => moment(film.releaseDate));
        const shortestNumberOfDaysBetweenFilmReleases = directorFilmsDates.reduce((shortestNumberOfDaysBetweenFilmReleases, currentFilmDate) => {
            const shortestNumberOfDaysBetweenFilmReleasesDate = moment(shortestNumberOfDaysBetweenFilmReleases);
            const currentFilmDateDiff = moment(currentFilmDate).diff(shortestNumberOfDaysBetweenFilmReleasesDate, 'days');
            if (currentFilmDateDiff < shortestNumberOfDaysBetweenFilmReleases) {
                return currentFilmDateDiff;
            }
            return shortestNumberOfDaysBetweenFilmReleases;
        }
        , 0);
        return shortestNumberOfDaysBetweenFilmReleases;



    
    
      
    }   
    
}
