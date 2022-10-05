const Employee = require("../../models/Employee")

const getSingleEmployee = async (req,res,next)=>{
    const {id} = req.params
    if(!id){return res.status(400).json({msg:"Missing id"})};
    try {
        const getSingleEmployee = await Employee.findByPk(id)
        if(!getSingleEmployee){
            return res.status(400).json({msg:"Employee not found"})
        }else{
            res.status(200).send(getSingleEmployee)
        }

    } catch (error) {
        next(error)
    }
}

module.exports = getSingleEmployee;