let districts = [];
let provinces = [];
let village = [];
let chief = [];

( function(){

  ///console.log($);
        $.ajax({
            type: 'GET',
            url: '/nrc',
            // data: { id: 142 },
            success: function(data) {
// grabbed some data!
                console.log(data);
                districts = data[1][0];
                console.log(districts)
                provinces = data[0][0];
                village = data[3][0];
                chief = data[4][0];
updateUi();

            }
        });
}

)();

function updateUi() {
    // console.log("Hello")
let province_of_birth =document.getElementById("province_of_birth");
let parent_province_of_birth =document.getElementById("parent_province_of_birth");
//village_province
let village_province =document.getElementById("village_province");
let htmlString = "";
let parentHtml = "";
let      villageHtml='';

    for(let i=0;i<provinces.length;i++){
        htmlString =htmlString+`<option value="${provinces[i].pid}">${provinces[i].pname}</option>`
        parentHtml =parentHtml+`<option value="${provinces[i].pid}">${provinces[i].pname}</option>`
        villageHtml =villageHtml+`<option value="${provinces[i].pid}">${provinces[i].pname}</option>`
    }
    htmlString = `<select id="province_of_birth" name="province_of_birth" >
<option>Select Province</option>
${htmlString}
 </select> 
`
    parentHtml = `<select id="parent_province_of_birth" name="parent_province_of_birth" >
<option>Select Province</option>
${parentHtml}
 </select> 
`
villageHtml = `<select id="village_province" name="village_province" >
<option>Select Province</option>
${villageHtml}
 </select> 
`
    province_of_birth.innerHTML = htmlString;
    parent_province_of_birth.innerHTML = parentHtml;
    village_province.innerHTML=villageHtml;
}

function getPOBDistrictByProvince(du,pu){
    //get district by province
    let ss = document.getElementById(pu).value;
    
    //console.log(ss)
    let districtUi =du;
    addDistrictToList(ss,districtUi)
}
function getVillageByDistrict (vu,du) {
    let ss = document.getElementById(vu).value;
    
    // console.log(ss +" village ss");
    let districtUi =du;
    addVillagestoList(ss,districtUi)
}
function getChiefByVillage(vu,du){
    let ss = document.getElementById(vu).value;
    
    console.log(ss +" chiefs ss");
    let districtUi =du;
 
    addChiefstoList(ss,districtUi)
}
function addChiefstoList(did,vui){
    let d_array = []
    console.log("chiefs below")
    console.log(chief);
    console.log(did);
    for (let i=0;i<chief.length;i++){
        if(chief[i].vid==did){
            //add district to array
            d_array.push(chief[i])
        }
    }
displayChief(d_array,vui);
}
function addVillagestoList(did,vui){
    let d_array = []
    console.log("Vilages below")
    console.log(village);
    console.log(did);
    for (let i=0;i<village.length;i++){
        if(village[i].tid==did){
            //add district to array
            d_array.push(village[i])
        }
    }
displayVillage(d_array,vui);
}
function addDistrictToList(pid,dUi) {
    let d_array = []
    console.log(districts);
    console.log(pid);
    for (let i=0;i<districts.length;i++){
        if(districts[i].pid==pid){
            //add district to array
            d_array.push(districts[i])
        }
    }
displayDistricts(d_array,dUi);
}
function displayChief(dis_array,id){
    console.log(dis_array)
    let htmlString = ""
for (let i=0;i<dis_array.length;i++){
    htmlString=htmlString+`<option value="${dis_array[i].cid} " > ${dis_array[i].cname} 
</option>
`
}
console.log(htmlString);

htmlString = `<select id="${id}" >
 <option value='0'> Select Chief</option>
 ${htmlString}
 </select> `
    document.getElementById(id).innerHTML=htmlString;

    
   
}
function displayVillage(dis_array,id){
    console.log(dis_array)
    let htmlString = ""
for (let i=0;i<dis_array.length;i++){
    htmlString=htmlString+`<option value="${dis_array[i].vid} " > ${dis_array[i].vname} 
</option>
`
}
console.log(htmlString);

htmlString = `<select id="${id}" >
 <option value='0'> Select Village</option>
 ${htmlString}
 </select> `
    document.getElementById(id).innerHTML=htmlString;

    
   
}
function displayDistricts(dis_array,id){
    console.log(dis_array)
    let htmlString = ""
for (let i=0;i<dis_array.length;i++){
    htmlString=htmlString+`<option value="${dis_array[i].did} " > ${dis_array[i].dname} 
</option>
`
}
console.log(htmlString);

htmlString = `<select id="${id}" >
 <option value='0'> Select District</option>
 ${htmlString}
 </select> `
    document.getElementById(id).innerHTML=htmlString;

    
   
}

function displayTown(to_array,id){
    let htmlString = ""
    for (let i=0;i<dis_array.length;i++){
        htmlString=htmlString+`<option value="${dis_array[i].did} " > ${dis_array[i].dname} 
    </option>
    `
    }
    console.log(htmlString);
    
    htmlString = `<select id="${id}" >
     <option value='0'> Select District</option>
     ${htmlString}
     </select> `
        document.getElementById(id).innerHTML=htmlString;
}