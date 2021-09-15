const { Model, DataTypes } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      description: DataTypes.STRING,
      value: DataTypes.STRING,
      download_speed: DataTypes.STRING,
      upload_speed: DataTypes.STRING,
    }, {
      sequelize
    })
  }

  static associate(models) {
    this.belongsToMany(models.Lead, { foreignKey: 'lead_id', as: 'internet_plan' });
  }
}

module.exports = User;
