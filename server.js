const  express = require('express');


const app = express();

app.use(express.json());

app.use(myMiddleWare);

function myMiddleWare (req, res, next) {
    console.log("Inside the middleware: created");
    next(); //it will pass on the contral to the next step
}

/**
 * Stich the routes to the server
 */

require("./routes/idea_routes")(app);

/**
 * Starting a server
 */

app.listen(8080, ()=> {
    console.log("Server starting");
});