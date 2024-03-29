
const Sequelize = require('sequelize');
const dbConfig = require('./config/database');

const sequelize = new Sequelize('FOOD_DELIVERY_APP', dbConfig.production.username, '123456', {
    host: 'localhost',
    dialect: 'postgres' 
  });

//checking if connection is done
sequelize.authenticate().then(() => {
    console.log(`Database connected to discover`)
}).catch((err) => {
    console.log(err)
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Organization = require('./models/organizationModel')(sequelize, Sequelize);
db.Item = require('./models/item')(sequelize, Sequelize);
db.Pricing = require('./models/pricingModel')(sequelize, Sequelize);

module.exports = db;
