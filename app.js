const express = require('express')
const dotenv = require('dotenv').config;
// const mydb = require('./src/config/db')
const jwt = require('jsonwebtoken');
const body_parser = require('body-parser')
const mainroute = require('./src/routes/index')
const { testDbConnection } = require('./src/config/db')
// const { Brand } = require('./src/models/index')

const app = express();
const port = process.env.PORT || 3000;

testDbConnection()






// Parse JSON-encoded bodies
app.use(body_parser.json());
app.use(express.static('./public'));

// Parse URL-encoded bodies
app.use(body_parser.urlencoded({ extended: true }));
app.use('', mainroute);
//  function getregistration(){
//     mydb.execute('select * from registration').then((result)=>{
//         console.log(result)
//     })
//  }
//getregistration()
app.get('/hello', (req, res) => {
    console.log("route hello called")
    res.send({ 'message': 'hello user i am here' })
})
app.listen(port, () => {
    console.log(`server runing on port ${port}`)
})