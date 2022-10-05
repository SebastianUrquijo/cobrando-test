var express = require('express');
var router = express.Router();


let employeeRoute = require("./employee.js")
let departmentRoute = require("./department.js")

router.use("/employee", employeeRoute);
router.use("/department", departmentRoute);
router.get("/",(req,res)=>{
    res.status(200).send("Server Working")
  })


module.exports = router;
