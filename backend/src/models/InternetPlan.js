const { Model, DataTypes } = require('sequelize');

class InternetPlan extends Model {
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
    this.hasMany(models.Lead, { foreignKey: 'internet_plan_id', as: 'internet_plan' });
  }
}

module.exports = InternetPlan;
