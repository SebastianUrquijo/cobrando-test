const Department = require("../../models/Department")
const Employee = require("../../models/Employee")


const createEmployee = async(req,res,next)=>{
    const{id,nif,name,lastname1,lastname2,code} = req.body;
    if(!id || !nif || !name || !lastname1 || !lastname2 || !code){return res.status(400).json({msg:"Missing data"})};

    try {
        const existEmployee = await Employee.findByPk(id)
        if(existEmployee){return res.status(301).json({msg:"Employee already exists"})};

        const departmentCode = await Department.findByPk(code)

        if(!departmentCode){return res.status(400).json({msg:"Department not found"})};
        
        const newEmployee = await Employee.create({
            id,
            nif,
            name,
            lastname1,
            lastname2
        })

        await departmentCode.addEmployee(newEmployee)
        

        if(newEmployee){return res.status(201).json({msg:`Employee --${name}-- created`})}

    } catch (error) {
        next(error)
    }

}


module.exports = createEmployee;