const Department = require("../../models/Department")

const editDepartment = async(req,res,next)=>{
    const{code,name,budget} = req.body;
    if(!code || !name || !budget){return res.status(400).json({msg:"Missing data"})};

    try {
        if(code.toString().length > 10){return res.status(400).json({msg:"Code too long"})}
        const updateDepartment = await Department.update(
            {code,
            name,
            budget,
            }, 
            {where:{code}
        })     
        
        if(updateDepartment[0] !== 0){
            return res.status(201).json({msg:`Department --${name}-- edited`})
        }else{
            res.status(400).send("Department not found")
        }

    } catch (error) {
        next(error)
    }
}


module.exports = editDepartment;