var express = require('express');
var router = express.Router();

let getEmployees = require("../controllers/Employee/getEmployees")
let getSingleEmployee = require("../controllers/Employee/getSingleEmployee")
let createEmployee = require("../controllers/Employee/createEmployee")
let editEmployee = require("../controllers/Employee/editEmployee")
let deleteEmployee = require("../controllers/Employee/deleteEmployee")

router.get("/",getEmployees)
router.get("/:id",getSingleEmployee)
router.post("/create", createEmployee)
router.put("/edit",editEmployee)
router.delete("/delete",deleteEmployee)

module.exports = router;