const mysql = require('mysql');
const connection = mysql.createConnection({
    host : '43.254.30.36',
    port: 3306,
    database : 'shaktipu_hrindia',
    user : 'shaktipu_hrindia',
    password : 'hrindia'
})

connection.connect((err)=>{
    if(err){
        console.log("Some error while connecting to db :: ", err);
    }
    else{
        console.log("Successfully connected to database");
    }
})
