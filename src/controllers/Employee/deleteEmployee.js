const Employee = require("../../models/Employee")

const deleteEmployee = async (req,res,next) =>{
    const {id} = req.body;
    if(!id){return res.status(400).json({msg:"Missing id"})};

    try {
        await Employee.destroy({
            where:{id}
        })
        res.status(200).json({msg: "Employee deleted"});

    } catch (error) {
        next(error)
    }
}

module.exports = deleteEmployee;