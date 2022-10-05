const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const Employee = sequelize.define('employee',{
    id:{
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey:true,
    },
    nif:{
        type:DataTypes.STRING(9),
        allowNull:false,
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    lastname1:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    lastname2:{
        type:DataTypes.STRING(100),
        allowNull:false,
    }
})

module.exports = Employee;