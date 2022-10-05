const Department = require("../../models/Department")

const createDepartment = async(req,res,next)=>{
    const {code, name, budget} = req.body;
    if(!code || !name || !budget){return res.status(400).json({msg: "Missing Data"})}

    try {
        if( code.toString().length > 10){return res.status(400).json({msg:"Code too long"})}
        const existDepartment = await Department.findByPk(code)
        if(existDepartment){return res.status(301).json({msg:"Department already exists"})};

        const newDepartment = await Department.create({
            code,
            name,
            budget
        })
        if(newDepartment){return res.status(201).json({msg:`Department --${name}-- created`})}

    } catch (error) {
        
    }



}

module.exports = createDepartment