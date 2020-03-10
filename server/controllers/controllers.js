var {
  getExpenses,
  getBudgets,
  createExpense,
  createBudget
} = require('../models/models.js');

module.exports = {
  budget: {
    get: (req, res) => {
      getBudgets()
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          res.sendStatus(500);
        });
    },
    post: (req, res) => {
      let budget = req.body.budget;
      createBudget(budget)
        .then(() => {
          res.sendStatus(201);
        })
        .catch(err => {
          res.sendStatus(500);
        });
    }
  },
  log: {
    get: (req, res) => {
      getExpenses()
        .then(result => {
          res.send(result);
        })
        .catch(err => {
          res.sendStatus(500);
        });
    },
    post: (req, res) => {
      let log = req.body.log;
      createExpense(log)
        .then(() => {
          res.sendStatus(201);
        })
        .catch(err => {
          res.sendStatus(500);
        });
    }
  }
};