var { Log, Budget } = require('../../db');

module.exports = {
  // retrieves expense documents
  getExpenses: () => {
    return Log.find({});
  },

  // retrieves the budget documents
  getBudgets: () => {
    return Budget.find({});
  },

  // creates an expense document
  createExpense: expense => {
    let newExpense = new Log(expense);
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
