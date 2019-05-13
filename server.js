var express = require("express");
var path = require("path")
var app = express();
var exphbs = require("express-handlebars");
var port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use(express.static(path.join(__dirname, "./public")));


app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


require("./controllers/burgers_controller")(app);

app.listen(port, function() {
  console.log("App is listening on port http://localhost:"+ port);
});
