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

/api - API welcome page with no routes.

/api/calendar - API routes for data on the dates and times of Airbnb reservations.

* GET - Returns the data in the calendar table.
* POST - Creates a new record in the calendar table.
* PUT - Updates an existing record in the calendar table.
* DELETE - Deletes a record from the calendar table.

/api/hosts - API route for data on Airbnb hosts

* GET - Returns the data in the hosts table.
* POST - Creates a new record in the hosts table.
* PUT - Updates an existing record in the hosts table.
* DELETE - Deletes a record from the hosts table.

/api/listings - API route for data on Airbnb listings.

* GET - Returns the data in the listings table.
* POST - Creates a new record in the listings table.
* PUT - Updates an existing record in the listings table.
* DELETE - Deletes a record from the listings table.

/api/neighborhoods - API route for data on the neighborhoods where Airbnb properties are located.

* GET - Returns the data in the neighborhoods table.
* POST - Creates a new record in the neighborhoods table.
* PUT - Updates an existing record in the neighborhoods table.
* DELETE - Deletes a record from the neighborhoods table.

/api/properties - API route for data on Airbnb properties.

* GET - Returns the data in the properties table.
* POST - Creates a new record in the properties table.
* PUT - Updates an existing record in the properties table.
* DELETE - Deletes a record from the properties table.

/api/reviews - API route for data on reviews from Airbnb guests.

* GET - Returns the data in the reviews table.
* POST - Creates a new record in the reviews table.
* PUT - Updates an existing record in the reviews table.
* DELETE - Deletes a record from the reviews table.

/api/scores - API route for data on detailed review scores from Airbnb guests.

* GET - Returns the data in the scores table.
* POST - Creates a new record in the scores table.
* PUT - Updates an existing record in the scores table.
* DELETE - Deletes a record from the scores table.

## Known Bugs and Future Development

## Bugs:

* [insert bugs]

## Future Development:
* Add data for more cities; New York City, Los Angeles, etc.
* Add more ways to filter reviews.
* Display the average review for a range of listings as part of the search results.
* Allow users to select from a range of charts.
