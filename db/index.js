var mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/budgetfuntimes", {
  useNewUrlParser: true
});

const budgetSchema = new Schema({
  Income: Number,
  Bills: Number,
  Savings: Number
});

const budget = mongoose.model("budget", budgetSchema);

const logSchema = new Schema({
  Category: String,
  Name: String,
  Price: Number,
  Date: Date
});

const log = mongoose.model("log", logSchema);

let newLogTest = new log({
  Category: "Fun",
  Name: "1,000 beers",
  Price: 5,
  Date: Date.now()
});

newLogTest.save();
