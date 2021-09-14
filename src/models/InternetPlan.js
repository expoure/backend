const internetPlan = (sequelize, DataTypes) => {
    const InternetPlan = sequelize.define('InternetPlan', {
      description: {
        type: DataTypes.STRING,
        allowNull: false
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
      tableName: 'internet_plan'
    })

    return InternetPlan
}
  
module.exports = internetPlan
