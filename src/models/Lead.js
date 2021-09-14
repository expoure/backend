const address = require("./Address")
const internetPlan = require("./InternetPlan")

const lead = (sequelize, DataTypes) => {
    const Lead = sequelize.define('Lead', {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      picture: {
        type: DataTypes.BLOB("long")
      }
    }, {
      tableName: 'lead'
    })

    return Lead
}
  
module.exports = lead
