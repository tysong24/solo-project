const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "app_password",
  port: 5432,
  database: "spendtracker",
});

module.exports = pool;
