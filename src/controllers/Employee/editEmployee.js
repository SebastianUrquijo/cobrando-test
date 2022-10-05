const Department = require("../../models/Department")
const Employee = require("../../models/Employee")


const editEmployee = async(req,res,next)=>{
    const{id,nif,name,lastname1,lastname2,code} = req.body;
    if(!id || !nif || !name || !lastname1 || !lastname2 || !code){return res.status(400).json({msg:"Missing data"})};

    try {

        const departmentCode = await Department.findByPk(code)
        const prevInfo = await Employee.findByPk(id,
            {attributes: ['departmentCode']})
        const prevDepartment = await Department.findByPk(prevInfo.departmentCode)

        if(!departmentCode){return res.status(400).json({msg:"Department not found"})};
        
        const editEmployee = await Employee.update({
            id,
            nif,
            name,
            lastname1,
            lastname2
        ,},{where:{id}}
        )
        
        if(editEmployee[0] !== 0){
        const editedData = await Employee.findByPk(id)
        await prevDepartment.removeEmployees()
        await prevDepartment.save()
        await departmentCode.addEmployee(editedData)
        return res.status(201).json({msg:`Employee --${name}-- edited`})
    }
    } catch (error) {
        next(error)
    }
}


module.exports = editEmployee;