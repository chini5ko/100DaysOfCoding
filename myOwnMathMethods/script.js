
var count = 0;
function myFunction() {
    //get line values
    var x1 = document.getElementById("x1").value;
    var y1 = document.getElementById("y1").value;
    var x2 = document.getElementById("x2").value;
    var y2 = document.getElementById("y2").value;


    var answer = getSlopeThatPassedThrough2Points(x1, y1, x2, y2);
    console.log(answer);

    document.getElementById("circleImage").id = "circleByteRotate";//rotate image

    if (x1.length == 0) {
        window.alert("Enter a digit");
    }
    else {
        document.getElementById("showResult").innerHTML = answer;
    }
}

//slope function
function getSlopeThatPassedThrough2Points(x1, y1, x2, y2) {
    var m; //m is slope 
    m = (y2 - y1) / (x2 - x1);//equation to find m 
    return m;
}




