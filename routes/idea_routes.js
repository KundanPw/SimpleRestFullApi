
const ideaController = require("../controllers/idea_controller")


/**
 * Define route for the calls like
 * 
 * 
 * CET 127.0.0.1:8080/ideaApp/v1/ideas
 */

module.exports = (app) => {
    //Get call
    app.get("/ideaApp/v1/ideas", ideaController.fetchAllIdeas );


    //Post call
    app.post("/ideaApp/v1/ideas",ideaController.createIdea);


    //Put call
    app.put("/ideaApp/v1/ideas/:id", ideaController.updateIdea);

    //Delete call
    app.delete("/ideaApp/v1/ideas/:id", ideaController.deleteIdea);
}