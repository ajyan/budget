var { db } = require('../../db');

module.exports = {
  // retrieves then entire expense log
  getExpenses: () => {
    Log.find({}).exec();
  },

  // saves an expense entry
  createExpense: record => {
    let newExpense = new Log({
      category: record.category,
      name: record.name,
      price: record.price,
      date: record.date
    });
    newExpense.save().exec();
  },

  // creates a new budget document
  createBudget: budget => {
    let newBudget = new Budget({
      income: budget.income,
      bills: budget.bills,
      savings: budget.savings
    });
  }
};
