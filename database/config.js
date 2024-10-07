const sql = require("mssql");


// SQL Server configuration
var config = {
    "user": "sa", // Database username
    "password": "shakti@123", // Database password
    "server": "13.202.132.54", // Server IP address
    "database": "shaktiWebsite", // Database name
    "options": {
        "encrypt": false // Disable encryption
    }
}



const pool = new sql.ConnectionPool(config);


module.exports = pool