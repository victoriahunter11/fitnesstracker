const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3030

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//testing

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tracker", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
require("./routes/api.js")(app);


app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
