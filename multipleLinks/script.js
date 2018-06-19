//JS

//morning 
var sitesForMorning = new Array();
sitesForMorning.push("https://weather.com/weather/today/l/11355:4:US");
sitesForMorning.push("https://www.youtube.com/watch?v=sbbYPqgSe-M&list=RDMMsbbYPqgSe-M&index=1");
sitesForMorning.push("https://www.nytimes.com/");

//It will loop until all the sites are opened 
var index = 0;
function morningSites() {
    setInterval(function(){
        if(index<sitesForMorning.length){
            window.open(sitesForMorning[index]);
            index++;
        }

        if(index == sitesForMorning.length){
            window.location.reload();
        }


     }, 300);
}
index=0;

//finance site 
var financeSites = new Array();
financeSites.push("https://www.forbes.com/#26ae85552254");
financeSites.push("https://www.ethereum.org/");
financeSites.push("https://www.nytimes.com/topic/subject/economics");

//It will loop until all the sites are opened 
 index = 0;
function financeSitesfun() {
    setInterval(function(){
        if(index<financeSites.length){
            window.open(financeSites[index]);
            index++;
        }

        if(index == siteForCoding.length){
            window.location.reload();
        }
     }, 300);
}
index=0;

//coding site 
var siteForCoding = new Array();
siteForCoding.push("https://github.com/chini5ko/");
siteForCoding.push("https://github.com/chini5ko/100DaysOfCoding/tree/math");
siteForCoding.push("https://www.facebook.com/chinisko");
siteForCoding.push("https://www.youtube.com/watch?v=sbbYPqgSe-M&list=RDMMsbbYPqgSe-M&index=1");
siteForCoding.push("https://www.google.com/");

//It will loop until all the sites are opened 
var index = 0;
function dayOfCodingSites() {
    setInterval(function(){
        if(index<siteForCoding.length){
            window.open(siteForCoding[index]);
            index++;
        }

        if(index == siteForCoding.length){
            window.location.reload();
        }
     }, 300);
}
index=0;

//work site 
var workSites = new Array();
workSites.push("https://drive.google.com/drive");
workSites.push("https://docs.google.com/spreadsheets");

//It will loop until all the sites are opened 
function workSitesFun() {
    setInterval(function(){
        if(index<workSites.length){
            window.open(workSites[index]);
            index++;
        }

        if(index == workSites.length){
            window.location.reload();
        }
     }, 300);
}
index=0;

//work site 
var fridaySites = new Array();
fridaySites.push("https://www.mangapanda.com/one-piece");
fridaySites.push("https://www.youtube.com/watch?v=5GUPtoiFm5A");


//It will loop until all the sites are opened 
function fridaySitesFun() {
    setInterval(function(){
        if(index<fridaySites.length){
            window.open(fridaySites[index]);
            index++;
        }

        if(index == fridaySites.length){
            window.location.reload();
        }
     }, 300);
}
index=0;



