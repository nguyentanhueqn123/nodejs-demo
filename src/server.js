import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from "./route/web";
import initAPIRoutes from "./route/api";

require('dotenv').config();


let app = express();

//config app


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// setup View Engine
viewEngine(app);
// init Web Routes
initWebRoutes(app);


//init API Routes
initAPIRoutes(app);

// xử dụng để render dc code html trên web
// app.get('/', (req, res) => {
//     res.render('index.ejs')
// })


let port = process.env.PORT || 6969;
//Port === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log(`backend Nodejs is running on the port: ${port}`)
})