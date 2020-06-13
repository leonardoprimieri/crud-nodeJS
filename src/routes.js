const express = require("express");
const router = express.Router();
const user = require("./controllers/user");

router.get("/", user.index);
router.get("/user/create", user.create);
router.post("/user/create", user.createAction);

router.get("/user/:_id/edit", user.edit);
router.post("/user/:_id/edit", user.editAction);

router.get("/user/:_id", user.show);

router.get("/user/:_id/delete", user.delete);

module.exports = router;
