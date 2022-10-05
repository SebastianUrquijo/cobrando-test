const Department = require("../../models/Department")
const Employee = require("../../models/Employee")

const getDepartments = async (req, res, next) => {
    try {
        const allDepartments = await Department.findAll(
            {include:[{model:Employee}]
            });

        res.status(200).send(allDepartments);

    } catch (error) {
        next(error);
    }
}

module.exports = getDepartments;