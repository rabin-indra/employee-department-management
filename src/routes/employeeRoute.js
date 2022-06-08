const express = require("express");
const router = express.Router();

const employeeController = require("./../controllers/employeeController");

router.post("/", employeeController.create);

router.get("/", employeeController.findByDep);

router.get("/salary", employeeController.findBySal);

router.get("/all", employeeController.findAll);

router.get("/:id", employeeController.findById);

router.delete("/:id", employeeController.deleteById);

router.put("/:id", employeeController.updateById)

module.exports = router;