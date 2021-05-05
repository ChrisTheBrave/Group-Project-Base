# Airbnb Listings in Chicago
## Description

When a member of the public wants to view data on Airbnb reservations in Chicago, they are often unable to view analyses of these data without conducting those analyses themselves. To solve this issue, we created a website that presents data and charts on past Airbnb reservations in Chicago. This website is not intended for Airbnb employees or hosts to use, as they have access to internal tools that likely exceed the capabilities of our website. By providing a public portal for these data, we hope to give residents of Chicago a clearer picture of Airbnb reservations in their city.

## Link to Website
https://group13-final-inst377sp2021.herokuapp.com

## Target Broswers
* iPhone 11
* MacBook Pro 11.3

# Links
* [Developer Manual](#developer-manual)

###  developer-manual 


##  How to install application and all dependencies
1. Clone this repository through Github Desktop or through Terminal.
2. Open repository in VSCode Terminal or Terminal application.
3. type npm install into terminal window and run.
4. The application should now be set to use.

## How to run application on a server
1. Open repository in VSCode terminal or Terminal application.
2. Run npm start. There should be no errors.
3. In a web browser, go to url: http://localhost:3000/.

## To run tests for software

The are no prewritten tests in the source repository, but you can use Cypress to run your own written tests.

1. Open two terminals and make sure you are in the main project directory
2. In the first terminal, run npm start.
3. In the second terminal run npm test.

## Server application APIs

/api - API route for Airbnb reviews and past data


* GET - Logs to console response query from URL. returns response 'Got a GET     request from /api'.

* POST - obtains AirBnb reviews from request body to fetch url. fetch data json from past listings in Chicago API and returns JSON response.
* PUT - returns response 'Got a PUT request at /api'.

/profapi - API route for AirBnb reseravation reviews data.

* GET - Logs to console response query from URL. returns response 'Got a GET request from /api'.
* POST - obtains past data from Airbnb reservation from request body to fetch url. fetch data json from Airbnb listings in Chicago reviews API and returns JSON response.
* PUT - returns response 'Got a PUT request at /api'.

## Known Bugs and Future Development

## Bugs:

* There might be null values in the AirBNB reviews data that might need to be solved.

## Future Development:
*  We need to solve null values in AirBnB reviews data.
* Adding data for more cities in America; Newyork, Los Angles etc.
* Adding more ways to filter reviews.
* Displaying average review in chicago listings made in Chicago.