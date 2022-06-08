const express = require("express");
const router = express.Router();

const departmentController = require("./../controllers/departmentConstroller");

router.post("/", departmentController.create);

router.get("/", departmentController.findAll)

router.get("/:id", departmentController.findById);

router.put("/:id", departmentController.updateById);

router.delete("/:id", departmentController.deleteById);

module.exports = router;