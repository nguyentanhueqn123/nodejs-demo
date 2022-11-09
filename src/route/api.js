import express from "express";
import APIController from "../controllers/APIController";


let router = express.Router();

let initAPIRoutes = (app) => {
    
    router.get('/users', APIController.getAllUsers); //methodGET
    router.post('/create-user', APIController.createNewUser); 
    router.put('/update-user', APIController.updateUser);
    router.delete('/delete-user/:id', APIController.deleteUser);


   
    return app.use("/api/v1", router);
}

module.exports = initAPIRoutes;