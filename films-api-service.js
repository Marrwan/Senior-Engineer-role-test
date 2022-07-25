export class FilmsAPIService {

    static filmsEndpointUrl = "https://app.codescreen.com/api/assessments/films";

    // Your API token. Needed to successfully authenticate when calling the films endpoint. 
    // This needs to be included in the Authorization header in the request you send to the films endpoint.
    static apiToken = "8c5996d5-fb89-46c9-8821-7063cfbc18b1";

    // Retrieves the data for all films by calling the https://app.codescreen.com/api/assessments/films endpoint.
    async getFilms() {
        //TODO Implement...
    }

}
