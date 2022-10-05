const {DataTypes} = require('sequelize')
const sequelize = require('../db')

const Department = sequelize.define('department',{
    code:{
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey:true,
    },
    name:{
        type:DataTypes.STRING(100),
        allowNull:false,
    },
    budget:{
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
})

module.exports = Department;