const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  title: String,
  body: String
});

const Workout = mongoose.model("Workout", WorkoutsSchema);

module.exports = Workout;
