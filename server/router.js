const router = require("express").Router();

router.get("/budget/get", controller.budget.get);

router.get("/log/get", controller.log.get);

router.post("/budget/post", controller.budget.get);

router.post("/log/post", controller.log.get);

module.exports = router;
