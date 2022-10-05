const Department = require("../../models/Department")

const deleteDepartment = async (req,res,next) =>{
    const {code} = req.body;
    if(!code){return res.status(400).json({msg:"Missing code"})};

    try {
        await Department.destroy({
            where:{code}
        })
        res.status(200).json({msg: "Department deleted"});

    } catch (error) {
        next(error)
    }
}

module.exports = deleteDepartment;