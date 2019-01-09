// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var reservations = require("./reservations")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//get request for home page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

//get request to reservations
app.get("/reservations", function(req, res) {
  res.json(reservations);
});

//post request to reservations
app.post('/reservations', (req, res) => {
  // const name = req.body.name
})


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
