# Node-Express-Handlebars

### Overview

* In this assignment, you'll create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Be sure to follow the MVC design pattern; use Node and MySQL to query and route data in your app, and Handlebars to generate your HTML.

## Description

* This application had to be deployed on heroku and had to use jaws, to set up the database, this was the first time I had done this and so it took a little bit longer than expected to get it working.

* In this application we use all parts of the CRUD system to be able to put together the whole application.

* We are able to Create new burgers through the input field, Read all of the exsisting burgers saved in the database, Update the burgers from one side of the page to the other representing if they have been eaten or not, and finaly we can Delete the burgers if we no longer want them in our database.

* This was a fun assignment where I had to put everything from together in order for it to work, I hope to inprove on it further by assing more css and functionality to it.

## Usage

* The user can use this application by simply going to the heroku url: https://enigmatic-lowlands-80694.herokuapp.com/ 

* Or if they go through the git hub repository, they have to install the npm packages: mysql, express, and express-handlebars

* In this application the user can only do four things:
   Order a new burger,
   Eat an exsisting burger,
   Re-order an already eaten burger,
   or Delete an exsisting burger.

* The only input the user has to do is when creating a new burger, the rest is handeled through the use of buttons.

## screenshots
![Front page of app](images/burger.png)

Before Anyone changes any of the burgers, this is how the page should look, with some burgers already eaten and some of then ready to eat, after that the user can create more burgers or move the ones from each side.

## Reocuring problems

* Since there was a lot of buttons and calls to other files, sometimes not going back and double checking the names, I would write them differently, and this would lead to the files not connecting properly.

* Not calling the right paths or mixing up the paths also lead to the functionality working backwards with the eaten burgers on the wrong side, this was fixed by adjusting the ids of where i was creating the lists for the burgers.

## Future improvements
* This application is a little simple, not much functionality, it looks a bit empty, I would like to add maybe different types of food, like if it was a food court, or add more colors to the page.

* I need to add some way to keep the users attention for more than a few minutes.

## Additional comments
* It would be a great idead to add a comment section on what users think is a good way to improve the application, and would help on getting more ideas of what to include.

* Thank you to anyone taking the time to look through my code and using my application.