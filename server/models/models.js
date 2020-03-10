var { db } = require('../../db');

module.exports = {
  // retrieves expense documents
  getExpenses: () => {
    return Log.find({}).exec();
  },

  // retrieves the
  getBudgets: () => {
    return Budget.find({}).exec();
  },
  // creates an expense document
  createExpense: record => {
    let newExpense = new Log({
      category: record.category,
      name: record.name,
      price: record.price,
      date: record.date
    });
    return newExpense.save().exec();
  },

  // creates a new budget document
  createBudget: budget => {
    let newBudget = new Budget({
      income: budget.income,
      bills: budget.bills,
      savings: budget.savings
    });
    return newBudget.save().exec();
  },

  // return expense logs by category
  getExpensesByCategory: category => {
    return Log.find({ category: category }).exec;
  }
};
