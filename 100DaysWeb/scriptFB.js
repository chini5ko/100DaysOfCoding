
//****Button********//
function getPost() {
    //rotate the image
   // rotate();

    //get line values of the lines
    var challenger = document.getElementById("option-1").value;
  

    var answer = challenger;
    console.log(answer);

    if (challenger.length == 0) {
        window.alert("Select an option");
    }
    else {
        document.getElementById("showResult").innerHTML = challenger;
    }
}


//****Website Function********//
//rotate Icon
/**
 function rotate(){
    document.getElementById("circleImage").id = "circleByteRotate";//rotate image
}
 
 */





