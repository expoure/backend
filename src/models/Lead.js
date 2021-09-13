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
      value: {
        type: DataTypes.STRING,
        allowNull: false
      },
      download_speed: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      upload_speed: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'lead'
    })
  
    return Lead
}
  
module.exports = lead
