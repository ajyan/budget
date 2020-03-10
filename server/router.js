const router = require("express").Router();

router.get("/budget", controller.budget.get);

router.get("/log", controller.log.get);

router.post("/budget", controller.budget.post);

router.post("/log", controller.log.post);

module.exports = router;
