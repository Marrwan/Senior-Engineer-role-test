# JavaScript-CodeScreen-Films-Test

The CodeScreen Films API is a service that contains one endpoint,<br/>
`GET https://app.codescreen.com/api/assessments/films`, which returns the details of a large number of different films.

When you send an `HTTP GET` request to the endpoint, the response will be a `200 OK`, which includes a body containing a list of film data in `JSON` format. 
<br>

For authentication, you need to send your API token in the `Authorization HTTP header` using the [Bearer authentication scheme](https://tools.ietf.org/html/draft-ietf-oauth-v2-bearer-20#section-2.1). Your API token is `8c5996d5-fb89-46c9-8821-7063cfbc18b1`.

Here is an example of how to send the request from cURL:

    curl -H "Authorization: Bearer 8c5996d5-fb89-46c9-8821-7063cfbc18b1" \
    https://app.codescreen.com/api/assessments/films
    
An example response is the following:

     [
       {
         "name": "Batman Begins",
         "length": 140,
         "rating": 8.2,
         "releaseDate": "2006-06-16",
         "directorName": "Christopher Nolan"
       },
       {
         "name": "Alien",
         "length": 117,
         "rating": 8.4,
         "releaseDate": "1979-09-06",
         "directorName": "Ridley Scott"
       }
     ]


The `name` field represents the name of the film. The `length` field represents the duration of the film in minutes. The `rating` is the <a href="https://www.imdb.com/" target="_blank">`IMDb`</a> rating for the film, out of 10.
The `releaseDate` is the date in which the film was released in the United Kingdom, and the `directorName` field is the name of the film's director.

## Your Task

You are required to implement all the methods marked with `TODO Implement` in the [FilmsAPIService](films-api-service.js) and [FilmsDataStatsGenerator](films-data-stats-generator.js) classes in such a way that
all the unit tests in the [tests/films-data-stats-generator.spec.js](tests/films-data-stats-generator.spec.js) file pass.

[FilmsAPIService](films-api-service.js) should be implemented in such a way that you only need to call out to the CodeScreen Films API
endpoint once per full run of the [tests/films-data-stats-generator.spec.js](tests/films-data-stats-generator.spec.js) test suite.

## Requirements

The [tests/films-data-stats-generator.spec.js](tests/films-data-stats-generator.spec.js) file should not be modified. If you would like to add your own unit tests, you
can add these in a separate file in the `tests` folder.

You are free to use whichever libraries you want (Node.js or third-party) when implementing your solution. </br>
Note we recommend using the <a href="https://momentjs.com/" target="_blank">`Moment.js`</a> library for working with dates, and the <a href="https://www.npmjs.com/package/axios" target="_blank">`Axios`</a> HTTP client library to interact with the CodeScreen Film API service.

The `package.json` file should only be modified in order to add any third-party dependencies required for your solution. The `jest` and `babel` versions should not be changed.

The [.github/workflows/node.js.yml](.github/workflows/node.js.yml) file should also not be modified.

Your solution must use/be compatible with `Node.js` version `15.5.1`.

## Tests
Run `npm install` to install all dependencies and then run `npm run test` to run the unit tests. These should all pass if your solution has been implemented correctly.

##

This test should take no longer than 2 hours to complete successfully.

Good luck!


## License

At CodeScreen, we strongly value the integrity and privacy of our assessments. As a result, this repository is under exclusive copyright, which means you **do not** have permission to share your solution to this test publicly (i.e., inside a public GitHub/GitLab repo, on Reddit, etc.). <br>

## Submitting your solution

Please push your changes to the `main branch` of this repository. You can push one or more commits. <br>

Once you are finished with the task, please click the `Complete task` link on <a href="https://app.codescreen.com/candidate/cc9b7e78-828e-4d4b-b90a-0655d2c65e59" target="_blank">this screen</a>.