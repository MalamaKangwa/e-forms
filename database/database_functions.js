let dbFunc = require('../database/database_connect');
let sql = dbFunc.sql;
/*
* This module contains functions that are performed on the database, this module inports that connection object from the database_connect module. this module is the interface between other modules in the application and the database , in the sense all actions to be performed on the database are defined in this module
*
* the module will receive data from other modules and perfom the requested tasks according to the functions called
* */

module.exports.getStaticDataForUserInterface = function uidata() {
    // console.log("received")
    let data =[];
    
    return new Promise ((resolve,reject)=>{
        console.log("received")
        let request = new dbFunc.sql.Request();
        //get all provinces
        // console.log(request +"  nothing")
        request.execute('getAllProvinces', (err, result) => {
            // ... error checks
            if(err){
                // admin.pm(inLog,err);
                console.log(err);
                return reject(err);
                // return;
            }
console.log(result.recordsets);
           data.push(result.recordsets);
           //get all districts
request.execute("selectAllDistricts",function(err, result){
    if(err){
        // admin.pm(inLog,err);
        console.log(err);
        return reject(err);
        // return;
    }
console.log(result.recordsets);
   data.push(result.recordsets);
   request.execute("selectAllTowns",function(err, result){
    if(err){
        // admin.pm(inLog,err);
        console.log(err);
        return reject(err);
        // return;
    }
console.log(result.recordsets);
   data.push(result.recordsets);
   request.execute("selectAllVillages",function(err, results){
    if(err){
        // admin.pm(inLog,err);
        console.log(err);
        return reject(err);
        // return;
    }
console.log(results.recordsets);
   data.push(results.recordsets);
   request.execute("selectAllChief",function(err, results){
    if(err){
        // admin.pm(inLog,err);
        console.log(err);
        return reject(err);
        // return;
    }
console.log(results.recordsets);
   data.push(results.recordsets);
   resolve (data);
})

})

})//selectAllChief




})

    })//end promise
    })



}
/*
* this module will get data from the logic and post that data to the database
* this module will alert the calling function in logic of the process
* results either completed or not with the appropriate information
* */
module.exports.postNewData = function p(data) {
let sql = dbFunc.sql;
 let randomID = parseInt(Math.random()*100000);
    return new Promise((resolve,reject)=>{
        let request = new sql.Request();
       
    // @vid
    // @cid


        request.input("fname",data.first_name)
        request.input("lname",data.last_name)
        request.input("nrc",data.nrc_no)
        request.input("dor",data.renounce_date)
        request.input("sex",data.gender)
        request.input("mname",data.middle_name)
        request.input("vid",data.village)
        request.input("dob",data.date_of_birth)
        request.input("renun",data.renounce_date)
        request.input("aid",randomID)
        request.input("cardNo",data.card_no)//chief
        request.input("cid",data.chief)//chief
        // request.input("vid",data.gender)

        request.execute('INSERT_applicant_tb', (err, result) => {
            // ... error checks
            if(err){
                // admin.pm(inLog,err);
                return reject(err);
                // return;
            }
           
           {//begin nested
            request = new sql.Request();
            //let randomId = parseInt(Math.random()*10000000);
        // @vid
        // @cid
    
    
            request.input("aid",randomID)
            request.input("did",data.district_of_birth)
            //replicated town and district
            request.input("tid",data.district_of_birth);
            // request.input("vid",data.gender)
    
            request.execute('INSERT_pob_tb', (err, result) => {
                // ... error checks
                if(err){
                    // admin.pm(inLog,err);
                    return reject(err);
                    // return;
                }
                request = new sql.Request();
                //let randomId = parseInt(Math.random()*10000000);
            // @vid
            // @cid
        
        
                request.input("aid",randomID)
                request.input("did",data.parent_district_of_birth)
                //replicated town and district
                request.input("tid",data.parent_district_of_birth);
                // request.input("vid",data.gender)
        
                request.execute('INSERT_Parent_pob_tb', (err, result) => {
                    // ... error checks
                    if(err){
                        // admin.pm(inLog,err);
                        return reject(err);
                        // return;
                    }

                    return resolve("success")
                })
            })
           }//end nested
           
           
            // return resolve(result);
    })//end promise
})
}