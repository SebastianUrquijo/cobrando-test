var express = require('express');
var router = express.Router();

let getDepartments = require("../controllers/Department/getDepartments")
let getSingleDepartment = require("../controllers/Department/getSingleDepartment")
let createDepartment = require("../controllers/Department/createDepartment")
let editDepartment = require("../controllers/Department/editDepartment")
let deleteDepartment = require("../controllers/Department/deleteDepartment")

router.get("/",getDepartments)
router.get("/:code",getSingleDepartment)
router.post("/create", createDepartment)
router.put("/edit",editDepartment)
router.delete("/delete",deleteDepartment)



module.exports = router;