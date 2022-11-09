import express from "express";

let configViewEngine = (app) => {
    //arrow function
    app.use(express.static("./src/public")); // cho phép truy cập vào folder public ^^
    app.set("view engine", "ejs");
    app.set("views", "./src/views");
}

module.exports = configViewEngine;