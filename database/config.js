const sql = require("mssql");


// SQL Server configuration
var config = {
    "user": "sa", // Database username
    "password": "shakti@123", // Database password
    "server": "52.66.10.86", // Server IP address
    "database": "shaktiWebsite", // Database name
    "options": {
        "encrypt": false // Disable encryption
    }
}



const pool = new sql.ConnectionPool(config);


module.exports = pool