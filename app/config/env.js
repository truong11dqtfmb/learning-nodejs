const env = {
  database: "db-security",
  username: "truongdq",
  password: "123456",
  host: "10.1.40.172",
  port: 5436,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;
