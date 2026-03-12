const mysql = require("mysql2");

const dbConfiguration = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "nome_del_database"
}

function onDatabaseConnection(error) {

}

const db = mysql.createConnection(dbConfiguration);
db.connect(onDatabaseConnection);

module.export = dbConnection