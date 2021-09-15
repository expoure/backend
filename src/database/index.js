const Sequelize = require('sequelize');
const dbConfig = require('../../config/database');

const Lead = require('../models/Lead');
const Address = require('../models/Address');
const InternetPlan = require('../models/InternetPlan');
const User = require('../models/User');

const connection = new Sequelize(dbConfig);

Lead.init(connection);
Address.init(connection);
InternetPlan.init(connection);
User.init(connection);

Lead.associate(connection.models);
Address.associate(connection.models);
InternetPlan.associate(connection.models);

module.exports = connection;
