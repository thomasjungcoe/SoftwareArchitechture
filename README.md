Learning Software Architecture.

1.) All in One Place Folder Structure
(Located in AllInOnePlaceFolderStructure.js)
    * We will have a mock database of rabbits and the API will perform CRUD (Create Read Update Delete) actions on it.
    * We will build this with Node and Express


2.) Layers Folder Structure
(Located in app.js -> rabbits (routes->controller->model) -> db)
        Layers architecture is about dividing concerns and responsibilities into different folders and files, and allowing direct communication only between certain folders and files.

        The matter of how many layers should your proj have, what names should each layer have, what actions should it handle is all a matter of discussion.

        Application Layer,
        Route Layer,
        Controllers Layer,
        Model Layer,
        Persistence (DB) layer

        * The application layer will have the basic setup of our server and connection to our routes (the next layer)
        * The route layer will have the definition of all of our routes and the connection to the controllers (the next layer)
        * The controllers layer will have the actual logic we want to perform in each of our endpoints and the connection to the model layers
        * The model layer will hold the logic for interacting with our mock database
        * Finally, the persistence layer is where our database will be.

        This may sound like lots of boilerplate. But after setting it up, this architecture will allow us to clearly know where each thing is and which folders and files are responsible for each action our application executes.

        There's a defined communication flow between the layers that has to be followed for it to make sense. This means that a request first has to go through the first layer, then the second, then the third and os on. No request should skip layers bc that would mess with the logic of the archt. and the benefits of organization and modularity it gives us.

        
        There are a lot more folders and files under this archituecture. But as a consequence, our codebase is much more structured and clearly organized.
        This kind of organization greatly facilitates the adiition of new features code modifications, and bug fixing.

        It is also good idea to have a folder for each of the main entities in your application (rabbits in our case), allowing to even mroe clearly understand what each file relates to.


3.) MVC Folder Structure
    MVC is an architecture pattern that stands for Model View Controller. We could say the MVC architecture is like a simplification of the layers architecture, incorporating the front-end side (UI) of the application as well.

    Under MVC, we will only have three main layers:
    * The view layer will be responsible for rendering the UI.
    * The controllers layer will be responsible for defining routes and the logic for each of them
    * The model layer will be responsible for interacting with database.

    There are many frameworks that allow you to implement MVC architecture out of the box (like Django or Ruby on Rails for example).
        To do this with Node and Express, we will need a teamplte engine like EJS.

    tempalte engines are just a way to easily renger HTML while taking advatnage of programmagic features such as variables, loops, conditionals, and so on.
    