const { logger } = require("sequelize/lib/utils/logger");
const env = require("./env");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  port: env.port,
  dialect: env.dialect,
  operatorsAliases: false,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle
  }
});



const connectionDatabase = async() => {
  try{
    await sequelize.authenticate();


  }catch(error){
    console.log('Error connection database');
  }
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Customer = require("../models/Customer")(sequelize, Sequelize);
db.User = require("../models/user")(sequelize, Sequelize);
db.Employee = require("../models/Employee")(sequelize, Sequelize);


// db.sequelize.sync().then(() => {
//   console.log("Drop and re-sync db.");
// });

module.exports = db;
