# Book-Search-Engine

## Description

This appliction is a Google Books API search engine, built with GraphQL API with Apollo Server.
The app was built using MERN stack with React front end, MongoDB database, and Node.js/Express.js,
GraphQL, Apollo server and API. This app allows users to login/signup and save book searches
to their database. Fully functioning starter code built with a RESTful API was given, that
allows user to save book searches to the back end.

## User Story

```md
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

## Acceptance Criteria

```md
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an
input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description,
image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and
a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author,
description, image, and a link to that book on the Google Books site and a button to save
a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title,
author, description, image, and a link to that book on the Google Books site and a button to
remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and
Login/Signup and an input field to search for books and a submit button
```

## Deployed Link

[The link for my deployed application can viewed here](https://mysearch-engine-app-c79c70af96e8.herokuapp.com/)

## ScreenShots

The following image shows the web application's appearance and functionality:

![Page without loggedin](./images/image1.png)
![Page without loggedin](./images/image2.png)
![Page without loggedin](./images/image3.png)
![Page without loggedin](./images/image4.png)

### Technologies Used

- React
- Bootstrap
- GraphQL
- Apollo Server
- MongoDB
- Mongoose
- JWT

### Resources

- Class Material
- Tutoring session
