function confirmForm(){
	
	var nrc_no1 = document.getElementById("nrc_no1").value;
    var nrc_no2 = document.getElementById("nrc_no2").value;
    var nrc_no3 = document.getElementById("nrc_no3").value;    
    var nrc_no = nrc_no1 + '/' + nrc_no2 + '/' + nrc_no3;

    var first_name = document.getElementById("first_name").value;
    var middle_name = document.getElementById("middle_name").value;
    var last_name = document.getElementById("last_name").value;
    var date_of_birth = document.getElementById("date_of_birth").value;
    var province_of_birth = $("#province_of_birth option:selected").text()
    var district_of_birth = $("#district_of_birth option:selected").text()
    var town_of_birth = $("#town_of_birth option:selected").text()
    var gender = document.getElementById("gender").value;
    var chief = $("#chief option:selected").text()
    var village_district = $("#village_district option:selected").text()
    var village = $("#village option:selected").text()
    var parent_province_of_birth = $("#parent_province_of_birth option:selected").text()
    var parent_district_of_birth = $("#parent_district_of_birth option:selected").text()
    var parent_town_of_birth = $("#parent_town_of_birth option:selected").text()
    var card_no = document.getElementById("card_no").value; 
    var date_of_issue = document.getElementById("date_of_issue").value;
    var renounce_date = document.getElementById("renounce_date").value;
    
    
    if (nrc_no == "") {alert("NRC No. must be filled out");
	    return false; }
	    
	if (first_name == "") {alert("First Name must be filled out");
	    return false; }
	    
	if (middle_name == "") {alert("Middle Name must be filled out");
	    return false; }
	    
	if (last_name == "") {alert("Last Name must be filled out");
	    return false; }
	    
	if (date_of_birth == "") {alert("Date of Birth must be filled out");
	    return false; }
	    
	if (province_of_birth == "-- select the province --") {alert("Province of Birth must be selected");
	    return false; }
	    
	if (district_of_birth == "-- select the district --") {alert("District of Birth must be selected");
	    return false; }    
	    	
	// if (town_of_birth == "-- select the town --") {alert("Town of Birth must be selected");
	//     return false; }
	    
	if (gender == "-- select a gender --") {alert("Gender must be selected");
	    return false; }
	    
	if (chief == "-- select an option --") {alert("Chief must be selected");
	    return false; }	    
	
	//if (village_province == "-- select the province --") {alert("The Village's Province must be selected");
	//    return false; }
	
	//if (village_district == "-- select the district --") {alert("The Village's District must be selected");
	//    return false; }
	    
	if (village == "-- select the village --") {alert("Village must be selected");
	    return false; }		    	        
	    
	if (parent_province_of_birth == "-- select the province --") {alert("Parent's Province of Birth must be selected");
	    return false; }
	    
	if (parent_district_of_birth == "-- select the district --") {alert("Parent's District of Birth must be selected");
	    return false; }    
	    	
	// if (parent_town_of_birth == "-- select the town --") {alert("Parent's Town of Birth must be selected");
	//     return false; }	        
	    
	if (card_no == "") {alert("Card number must be filled out");
	    return false; }	        

	if (date_of_issue == "") {alert("Date of Issue must be filled out");
	    return false; }	        
	    
    if (renounce_date == "") {alert("Renounce Date must be filled out");
	    return false; }	            
    
    var txt;
    var r = confirm("Please Double-Check the following Details: \n"
    + "\nNRC Number: " +  nrc_no
    + "\nFirst Name: " +  first_name
    + "\nMiddle Name(s): " + middle_name
    + "\nLast Name: " + last_name
    + "\nDate of Birth: " + date_of_birth
    + "\nProvince of Birth: " + province_of_birth
    + "\nDistrict of Birth: " + district_of_birth
    + "\nTown of Birth: " + town_of_birth
    + "\nGender: " + gender
    + "\nChief: " + chief
    + "\nVilage: " + village
    + "\nParent's Province of Birth: " + parent_province_of_birth
    + "\nParent's District of Birth: " + parent_district_of_birth
    + "\nParent's Town of Birth: " + parent_town_of_birth
    + "\nCard No. : " + card_no
    + "\nDate Of Issue: " + date_of_issue
    + "\nRenounce Date: " + renounce_date  
    );
	if (r == true) {
	  	txt = "You pressed OK!";
	  	document.getElementById("submitButton").style.display = "";	  
		document.getElementById("confirmButton").style.display = "none";	
	} else {
	  txt = "You pressed Cancel!";
	  
	}
    
        
}

