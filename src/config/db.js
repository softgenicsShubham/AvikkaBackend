// // const { creat = require('mysql2')
// // const mydb = require('mysql2')
// const { Sequelize } = require('sequelize')
// const { Host, Database, User, Password } = process.env;


// // const poll = mydb.createPool({
// //     host:Host ,
// //     database:Database,
// //     user:User,
// //     password: Password
// // });
// // module.exports = poll.promise()

// const sequelize = new Sequelize({
    
//   });
  
//   const DbConnection = async () => {
//     try {
//       await sequelize.authenticate();
//       await sequelize.sync({ force: false, alter: false });
//       console.log('Connection has been established successfully.');
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   module.exports = { sq: sequelize, DbConnection };











require('dotenv').config()
const { Sequelize } = require('sequelize')
const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;
 

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: 'mysql',
  logging: false,
});





testDbConnection = async () => {
    console.log(DB_HOST, DB_NAME, DB_PASS)
  try {
    await sequelize.authenticate()

    sequelize.sync({ force: false, alter: false });

    console.log('Connection has been established successfully.');

    


  } catch (error) {
    console.error(error)
  }
};

module.exports = { sq: sequelize, testDbConnection };