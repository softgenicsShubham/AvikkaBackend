const express = require('express')
const dotenv = require('dotenv').config;
// const mydb = require('./src/config/db')
const jwt = require('jsonwebtoken');
const body_parser = require('body-parser')

const mainroute = require('./src/routes')

const { testDbConnection } = require('./src/config/db')

// const { Brand } = require('./src/models/index')
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

testDbConnection()


app.use(cors({origin:"*",methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
credentials: true,
exposedHeaders: ['x-auth-token']}));
app.use(express.json())
// dotenv.config({path:'config.env'}
// )



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