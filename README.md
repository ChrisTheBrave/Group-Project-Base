# Airbnb Listings in Chicago
## Description

When a member of the public wants to view data on Airbnb reservations in Chicago, they are often unable to view analyses of these data without conducting those analyses themselves. To solve this issue, we created a website that presents data and charts on past Airbnb reservations in Chicago. This website is not intended for Airbnb employees or hosts to use, as they have access to internal tools that likely exceed the capabilities of our website. By providing a public portal for these data, we hope to give residents of Chicago a clearer picture of Airbnb reservations in their city.

## Link to Website
https://group13-final-inst377sp2021.herokuapp.com

## Target Browsers
* iPhone 11
* MacBook Pro 11.3

# Links
* [Developer Manual](#Developer-Manual)

###  Developer-Manual 


##  How to install this application
1. [Clone this repository](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) through Github Desktop or through your computer's command line
2. Open the repository in your code editor of choice
3. type npm install into the command line inside the code editor and run
4. The application should be installed

## How to run this application on your local server
1. Open the application in your code editor
2. Open the command line inside the code editor
3. Run npm start. There should be no errors
4. In a web browser, navigate to http://localhost:3000/

## Running Cypress tests on this application

This application comes with no tests, but you can use Cypress to write your own tests.

1. Open the application in your code editor
2. Open two command line windows inside the code editor
3. In the first window, run npm start
4. In the second window, run npm test

## Server application APIs

/api - API welcome page with no endpoints.

/api/listings/[listing ID] - API route for data on Airbnb listings using a specific ID.

* GET - Returns the data in the listings table for the specified ID.

/api/neighborhoods - API route for data on the neighborhoods where Airbnb properties are located.

* POST - Creates a new record in the neighborhoods table.
* PUT - Updates an existing record in the neighborhoods table.
* DELETE - Deletes a record from the neighborhoods table.

/api/properties - API route for data on Airbnb properties.

* GET - Returns the data in the properties table.

/api/allrecords - API route that combines data from every table.

* GET - Returns a combination of every table in the database.

## Known Bugs and Future Development

## Bugs:

* The all records endpoint only includes records with a value in all columns of every table.

## Future Development:
* Add data for more cities; New York City, Los Angeles, etc.
* Add more ways to filter reviews.
* Display the average review for a range of listings as part of the search results.
* Allow users to select from a range of charts.
