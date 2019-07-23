let districts = [];
let provinces = [];
let villages = [];

let village = [
{
 vid:1,
 v_name:"Kamoni",
 c_name :"Magodi",
 did:3
},{
 vid:2,
 v_name:"mansa",
 c_name :"Chitimukulu",
 did:2
}];
let province =[{
 pid:1,
 p_name:"Eastern",
},{
 pid:2,
 p_name:"luapula"
},
    {
 pid:3,
 p_name:"Lusaka"

 }
]
let district =[{
 did:1,
 d_name:"chipata",
 pid:"1"
},{
 did:2,
 d_name:"mansa",
 pid:2
},{
 did:3,
 d_name:"lundazi",
 pid:1
},
    {
 did:4,
 d_name:"lusaka",
 pid:3
 }
 ]

let data = [];
data.push(district);
data.push(province);
data.push(village);

( function(){

///console.log($);
districts = data[0];
 provinces = data[1];
 villages = data[2];

//console.log(districts);
updateUi();
/*
 $.ajax({
 type: 'GET',
 url: 'http//192.168.4s2.134:8080/nrc',
 // data: { id: 142 },
 success: function(data) {
// grabbed some data!
//                 console.log(data);
 districts = data[0];
 provinces = data[1];
 villages = data[2];
updateUi();

           }
        });  */
}

)();

function updateUi() {
 // console.log("Hello")
let province_of_birth =document.getElementById("province_of_birth");
let parent_province_of_birth =document.getElementById("parent_province_of_birth");
let htmlString = "";
let parentHtml = "";

for(let i=0;i<provinces.length;i++){
 htmlString =htmlString+`<option value="${provinces[i].pid}">${provinces[i].p_name}</option>`
 parentHtml =parentHtml+`<option value="${provinces[i].pid}">${provinces[i].p_name}</option>`
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
 province_of_birth.innerHTML = htmlString;
 parent_province_of_birth.innerHTML = parentHtml;
}

function getPOBDistrictByProvince(du,pu){
 //get district by province
 let ss = document.getElementById(pu).value;
 

//console.log(ss)
 let districtUi =du;
 addDistrictToList(ss,districtUi)
}
function getVillageByDistrict(){

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

function displayDistricts(dis_array,id){
 console.log(dis_array)
 let htmlString = ""
for (let i=0;i<dis_array.length;i++){
 htmlString=htmlString+`<option value="${dis_array[i].did} " > ${dis_array[i].d_name} 
</option>
`
}
console.log(htmlString);

htmlString = `<select id="${id}" >
 <option> Select District</option>
 ${htmlString}
 </select> `
 document.getElementById(id).innerHTML=htmlString;
}