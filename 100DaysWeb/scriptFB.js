//data
var mehmetLink = "@mehmet";
//code description



//****Button********//
function getPost() {
    var code = document.getElementById("codeDescription").value;
    var why = document.getElementById("why").value;
    var language = document.getElementById("language").value;
    var githubLink = document.getElementById("githubLink").value;

    //console.log(" , " + why + code + " " + language + " " + githubLink);

    //rotate the image
   // rotate();
    //get line values of the lines
    var challengerDays;
    if(document.getElementById("option-0").checked){
        challengerDays = document.getElementById("option-0").value;
    }
    if(document.getElementById("option-1").checked){
        challengerDays = document.getElementById("option-1").value;
    }
    if(document.getElementById("option-2").checked){
        challengerDays = document.getElementById("option-2").value;
    }
    if(document.getElementById("option-3").checked){
        challengerDays = document.getElementById("option-3").value;
    }
    //facebook post for github 100 days of Code
    var facebookPost = "#100DaysOfCode Day " + days[challengerDays]; 
    facebookPost+= " with Mehmet, Momo, Eddie. <br> " ;
    facebookPost+= "Code Description: " + "<br> \n" ;
    facebookPost+= code + " <br>";
    facebookPost+= "Why : " + "<br>" ;
    facebookPost+= why + " <br>";
    facebookPost+= "Language: "  ;
    facebookPost+= language + " <br> ";
    facebookPost+= "Github Link: ";
    facebookPost+= githubLink;;
    //facebookPost+= code;
  
    console.log(facebookPost);

    if (challengerDays.length == -1) {
        window.alert("Select an option");
    }
    else {
        document.getElementById("showResult").innerHTML = facebookPost;
    }
}


//****Website Function********//
//rotate Icon
/**
 function rotate(){
    document.getElementById("circleImage").id = "circleByteRotate";//rotate image
}
 
 */





