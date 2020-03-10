var mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/budgetfuntimes", {
  useNewUrlParser: true
});
