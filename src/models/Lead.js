const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      picture: DataTypes.BLOB,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.hasMany(models.Address, { foreignKey: 'lead_id', as: 'addresses' });
    this.hasOne(models.InternetPlan, { foreignKey: 'lead_id', as: 'internet_plan' });
  }
}

module.exports = User;
