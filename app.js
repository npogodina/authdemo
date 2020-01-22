const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb:/localhost:27017/auth_demo_app");

const app = express();
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("home");
});

app.get("/secret", function(req, res){
    res.render("secret");
})

app.listen(3000, function(){
    console.log("Server started");
});