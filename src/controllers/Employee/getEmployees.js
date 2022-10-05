const Department = require("../../models/Department")
const Employee = require("../../models/Employee")

const getEmployees = async (req, res, next) => {
    try {
        const allEmployees = await Employee.findAll(
            {include:{
                model:Department
            }
            });

        res.status(200).send(allEmployees);

    } catch (error) {
        next(error);
    }
}

module.exports = getEmployees;