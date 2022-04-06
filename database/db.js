const mysql = require('mysql');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass:process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

connection.connect((error)=>{
        if(error){
            console.log("Error de coneccion = " + error);
            return;

        }

        console.log("Coneccion exitosa ");
});

module.exports = connection;