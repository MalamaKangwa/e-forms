/*
* This module is used to configure and connect the application to the database. this module exports a pool of connections from the database. to other files which may be used by other tools
*
* */

var sql = require("mssql");
// var admin = require("../Admin/adminFunctions")


module.exports.Connect2db = ()=>{
// config for your database

    const config = {
        user: 'myPayslipUser',
        password: '#P@55w0rd!',
        server: `szi-epayslip`,
        database: 'Nreg' ,
        pool: {
            max: 10000,
            min: 0,
            idleTimeoutMillis: 30000
        }
    }

// connect to your database
    sql.connect(config, function (err,data) {
        let inLog ={
            fn:"dbConnect",
            fun:"sql.connect"
        }
        if (err) {
            // admin.pm(inLog,err);
            pm ("there is an error")
            return;
        }
        pm(inLog,"successfully connected");
        module.exports.sql = sql;


    });
}


pm = m => console.log(m);