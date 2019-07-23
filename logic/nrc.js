let dbFunc = require("../database/database_functions")

/*
* the cleaning function, below is the function that maybe used for cleaning the data, that includes
*   checking if the all the fields in the database
*   The
*
* */
module.exports.cd = function cleaningData(data,req,res) {
    let nrc_no = data.nrc_no1+"/"+data.nrc_no2+"/"+data.nrc_no3
    data.nrc_no = nrc_no;
    let { first_name,last_name,card_no,renounce_date,date_of_birth,district_of_birth,town_of_birth,parent_town_of_birth,village,date_of_issue,gender}  = data;

    if(first_name===""||last_name===""||nrc_no===""||card_no===""||date_of_birth===""||district_of_birth===""||village===""||gender===""){
        //fields empty
        console.log("Error in fields");
    }else{
        //save to database
        submit(data,res);
    }

}

//the submit function will take in data from the api for cleaning and format the data so that the data may be sent to the database.
function submit(data,res) {
    //s
    dbFunc.postNewData(data).then((resolve=>{
res.send("Successfully added");
    }),(reject=>{
        console.log(reject);
res.send("Error : Try again" +reject)
    }))
}
//this module will get data from database and pass on to the user interface
module.exports.gdfdff=function getDataFromDatabaseForForm(res){
//get standard data from the database
// console.log("received")
dbFunc.getStaticDataForUserInterface().then((resolve=>{
res.send(resolve);
}),(reject=>{
res.send(reject)
}))
    //format and group the data

    //send the databack to ui
}

