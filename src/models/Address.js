const address = (sequelize, DataTypes) => {
    const Address = sequelize.define('Address', {
      cep: {
        type: DataTypes.STRING,
        allowNull: false
      },
      state: {
        type: DataTypes.STRING,
        allowNull: false
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false
      },
      street: {
        type: DataTypes.STRING,
        allowNull: false
      },
      number: {
        type: DataTypes.STRING,
        allowNull: false
      },
      complement: {
        type: DataTypes.STRING
      },
    }, {
      tableName: 'address'
    })

    return Address
}
  
module.exports = address
