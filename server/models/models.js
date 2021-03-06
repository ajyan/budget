var { Log, Budget } = require("../../db");

module.exports = {
  // retrieves expense documents
  getExpenses: () => {
    return Log.find({});
  },

  getTotalExpenses: () => {
    return Log.aggregate([
      { $group: { _id: null, amount: { $sum: "$price" } } }
    ]);
  },

  // retrieves the budget documents
  getBudgets: () => {
    return Budget.find({});
  },

  // creates an expense document
  createExpense: expense => {
    let newExpense = new Log(expense);
    console.log(newExpense);
    return newExpense.save();
  },

  // creates a new budget document
  createBudget: budget => {
    let newBudget = new Budget(budget);
    return newBudget.save();
  },

  // return expense logs by category
  getExpensesByCategory: category => {
    return Log.find({ category: category }).exec();
  }
};
