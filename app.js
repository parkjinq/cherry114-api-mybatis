require('./config/config');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const port = process.env.PORT;
const fs = require('fs');

const {conn} = require('./util/database');
const db = conn.promise();

const memberRoute = require('./routes/member');
// const communityRoute = require('./routes/community');


const app = express();

// const logDir = path.join(__dirname,'../log');
// fs.existsSync(logDir) || fs.mkdirSync(logDir);
// var logStream = rfs('cherry114-api.log', {
//     interval : '1d',
//     path : logDir
//   });

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(morgan("combined"))


app.use( async (req, res, next)=>{
    const id = 1;
    try{
        const user = await db.query(`select * from TB_CM_MEM_DT where MEM_NO = '${id}'`);
        req.user = user[0][0]
        next();
    }catch(err){
        next(err)
    }
})





app.use('/',memberRoute);

console.log(process.env.JWT_SECRET);


app.use((error, req, res, next)=>{
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = err.data;
    res.status(status).json({message: message, data: data})
})


app.listen(port,()=>{
    console.log('connected')
})

module.exports = {app};
