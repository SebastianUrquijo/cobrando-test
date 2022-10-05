module.exports = function relations(){

    const Employee = require("./models/Employee.js");
    const Department = require("./models/Department.js");
    
    
    Department.hasMany(Employee)
    Employee.belongsTo(Department)
    }