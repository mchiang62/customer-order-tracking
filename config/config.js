/* eslint-disable camelcase */
module.exports = {
  development: {
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      port: 3306,
      dialect: 'mysql',
  },

  production: {
      use_env_variable: 'JAWSDB_URL',
      dialect: 'mysql',
  },
};








// {
//   "development": {
//     "username": "root",
//     "password": "docker",
//     "database": "tracking",
//     "host": "127.0.0.1",
//     "port": 3306,
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql",
//     "operatorsAliases": false
//   }
// }
