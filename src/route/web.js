import express from "express";
import catController from "../controllers/catController"
import dogController from "../controllers/dogController"
import homeController from "../controllers/homeController"
let router = express.Router();

let initWebRoutes = (app) => {
    // router.get('/', (req, res) => {
    //     return res.send('Hello Huenguyen')
    // })


    // xử dụng để render dc code html trên web
    // router.get('/', (req, res) => {
    //     res.render('index.ejs')
    // })
    router.get('/', homeController.getHomepage);
    router.get('/detail/user/:userId', homeController.getDetailPage);
    router.post('/create-new-user', homeController.createNewUser);
    router.post('/delete-user', homeController.deleteUser);
    router.get('/edit-user/:id', homeController.getEditPage);
    router.post('/update-user', homeController.postUpdateUser);




    router.post('/api/animals/cat', catController.handleCat)
    router.post('/api/animals/dog', dogController.handleDog)

    return app.use("/", router);
}

module.exports = initWebRoutes;