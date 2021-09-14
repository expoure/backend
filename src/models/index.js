const sequelize = require('../../config/sequelize')
const Sequelize = require('sequelize')

const InternetPlan = require('./InternetPlan')
const User = require('./User')
const Address = require('./Address')
const Lead = require('./Lead')

const internetPlan = InternetPlan(sequelize, Sequelize.DataTypes)
const address = Address(sequelize, Sequelize.DataTypes)
const lead = Lead(sequelize, Sequelize.DataTypes)
const user = User(sequelize, Sequelize.DataTypes)

lead.hasOne(internetPlan)
internetPlan.belongsTo(lead)
lead.hasOne(address)
address.belongsTo(lead)

const db = {
  internetPlan,
  address,
  lead,
  user,
  sequelize
}

module.exports = db
