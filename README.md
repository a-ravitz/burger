# Eat-Da-Burger


# Technologies

Technologies Used: JavaScript, jQuery, AJAX, Node.js, Express, MySQL, Handlebars, and ORMs

The main focus of this assignment was to implament the MVC format for App development, and to build our own ORM (Object Relational Mapping).

The MVC format allows us to organize our app's files in such a way that developers can easily contribute to, edit, or reference the files.  It looks like this: 

<img width="163" alt="Screen Shot 2019-05-13 at 11 23 17 PM" src="https://user-images.githubusercontent.com/46004362/57668723-5752b500-75d6-11e9-9109-106d83c9259e.png">

We have a `config` folder which holds the `connection.js` which contains all the information for our server, and requires in the database and `ORM.js` which contains the first object in a 3 piece system used to connect with our database. Specifically the ORM contains all the SQL statements

<img width="511" alt="Screen Shot 2019-05-13 at 11 22 56 PM" src="https://user-images.githubusercontent.com/46004362/57668782-8bc67100-75d6-11e9-92e0-66de9c5d6b47.png">

The `model` is the second level in our connectivity layer cake. Here we require in the `ORM` and apply it to our `burger` object.  

<img width="430" alt="Screen Shot 2019-05-13 at 11 33 10 PM" src="https://user-images.githubusercontent.com/46004362/57669038-83bb0100-75d7-11e9-9dda-6a6fbb1d6165.png">

These are the functions that are referenced in our `controller`, which is the top tier of this system.

<img width="477" alt="Screen Shot 2019-05-13 at 11 33 17 PM" src="https://user-images.githubusercontent.com/46004362/57669057-91708680-75d7-11e9-9129-35c518f6f77f.png">

The most confusing part of this whole process for me was understanding how the callback function, labeled `CB`, works to synchronize the asynchronous events.  When the CB function is called in the `ORM` it takes the information after its been retrieved, and passes it to the `Model`, which then calles another `CB()` to finally get the information  to the `Controller`, allowing for all the information to stream in synchronously from the bottom up.

Finally there is a `public` folder and a `views` folder which store all the front end `CSS` and `JS` for all the styling and ajax calls, and the `HTML` and our `Handlebars` layout.

# Summary 
In eat-da-burger you're initially presented with the the burgers previously created and stored in the database, via a .get call, and the option to add a burger to our burger table 

<img width="435" alt="Screen Shot 2019-05-13 at 11 03 05 PM" src="https://user-images.githubusercontent.com/46004362/57667986-b7942780-75d3-11e9-9f57-a8247e5f6ded.png">


once you've created a burger using a `.post` call, the burger will then appear to the left with the option to devour it 
<img width="1300" alt="Screen Shot 2019-05-13 at 11 03 52 PM" src="https://user-images.githubusercontent.com/46004362/57668005-cf6bab80-75d3-11e9-94a7-5f613d118d1b.png">


if you click `devour`, the burger will be moved to the right side of the screen and crossed out.  This is achieved using a `.put` request to change the boolean value assosciated with devoured to true. the Handlebars `{{#if}}` `{{/if}}}` and `{{#unless}}` `{{/unless}}}` features automatically organize these for us.  

At this point you'll then be presented with two options, you can either Un-Devour the burger (changing the boolean value back to false), or delete it from the database, done using a `.delete`.
<img width="1370" alt="Screen Shot 2019-05-13 at 11 04 05 PM" src="https://user-images.githubusercontent.com/46004362/57668033-ef9b6a80-75d3-11e9-9ba2-1ac681e78129.png">

if you Un-Devour the burgers they will show up on the left side again
<img width="1317" alt="Screen Shot 2019-05-13 at 11 04 17 PM" src="https://user-images.githubusercontent.com/46004362/57668042-faee9600-75d3-11e9-9203-0ed9379e28f7.png">
