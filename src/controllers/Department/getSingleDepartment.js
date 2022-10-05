const Department = require("../../models/Department")

const getSingleDepartment = async (req,res,next)=>{
    const {code} = req.params
    if(!code){return res.status(400).json({msg:"Missing code"})};
    try {
        const singleDepartment = await Department.findByPk(code)
        if(!getSingleDepartment){
            return res.status(400).json({msg:"Department not found"})
        }else{
            res.status(200).send(singleDepartment)
        }

    } catch (error) {
        next(error)
    }

}

module.exports = getSingleDepartment;