var mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/budgetfuntimes", {
  useNewUrlParser: true
});

const budgetSchema = new Schema({
  income: Number,
  bills: Number,
  savings: Number
});

const budget = mongoose.model("budget", budgetSchema);

const logSchema = new Schema({
  category: String,
  name: String,
  price: Number,
  date: Date
});

const log = mongoose.model("log", logSchema);
