var burger = require("../models/burger")
var express = require("express");


module.exports = function(app) {

app.get("/", function(req, res) {
    burger.selectAll(function(data) {

          var burgObject = {burgers: data}
          res.render("index", burgObject);
          console.log(data)
    })
})

app.post("/api/burger", function(req, res) {
    // console.log(req.body)
    burger.insertOne(req.body.name, function(data) {
        console.log("in insertOne")
        res.json(data)
    })
})
app.put("/api/burger/:id", function(req, res) {

    burger.updateOne(req.body.devoured, req.params.id, function (data) {
        console.log("in updateOne")
        res.json(data)

            res.status(200).end();
          
    })
    
})

app.delete("/api/burger/:id", function(req, res) {
    burger.deleteOne(req.params.id, function (data) {
        res.json(data)
            console.log("in deleteOne")
            res.status(200).end();
          
    })
})


}