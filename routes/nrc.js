var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
// create application/json parser
var jsonParser = bodyParser.json()
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var nrc_logic = require("../logic/nrc");

//create a response format(rf)
/* the response format will contain the following fields
* status : this is a code hhtp based code
* data : this will contain database data in any is present
* reason: this will contain a message return from opereation if any*/
let rf = {
    status:"",
    data :[],
    reason:""
}

/* GET static nrc data. */
router.get('/', function(req, res, next) {

nrc_logic.gdfdff(res);

});
//this router will direct all request that come to the server using a post method and a url =/nrc/submit
router.post('/submit',urlencodedParser, function(req, res, next) {
    //get data from the ui , and save it in a module

    let data = req.body;
    // check if data is not empty
    console.log(data);
    if(data.first_name.length>0){
nrc_logic.cd(data,req,res);

    }else{
        //if empty send back a response
        rf.status =500;
        rf.data="";
        rf.reason="The form can't be empty";
        res.send(rf);

    }



});

module.exports = router;
