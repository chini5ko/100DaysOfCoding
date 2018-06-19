
//****Button********//
function findSlope() {
    //rotate the image
    rotate();

    //get line values of the lines
    var x1 = document.getElementById("x1").value;
    var y1 = document.getElementById("y1").value;
    var x2 = document.getElementById("x2").value;
    var y2 = document.getElementById("y2").value; 

    var answer = getSlopeThatPassedThrough2Points(x1, y1, x2, y2);
    console.log(answer);

    if (x1.length == 0 || y1.length == 0 || x2.length == 0 || y2.length == 0) {
        window.alert("Enter a digit");
    }
    else {
        document.getElementById("showResult").innerHTML = answer;
    }
}

function SlopeEquation() {
    //rotate the image
    rotate();

    //get line values of the lines
    var x1 = document.getElementById("x1").value;
    var y1 = document.getElementById("y1").value;
    var x2 = document.getElementById("x2").value;
    var y2 = document.getElementById("y2").value; 

    var slope = getSlopeThatPassedThrough2Points(x1, y1, x2, y2);
    var answer = getSlopeEquation(x1,y1,slope);

    console.log(answer);

    if (x1.length == 0 || y1.length == 0 || x2.length == 0 || y2.length == 0) {
        window.alert("Enter a digit");
    }
    else {
        document.getElementById("showResult").innerHTML = answer;
    }
}

//****Math FORMULAS********//
// get slope formula  of two points in the plane or graph
function getSlopeThatPassedThrough2Points(x1, y1, x2, y2) {
    var m; //m is slope 
    m = (y2 - y1) / (x2 - x1);//equation to find m 
    return m;
}

//return a string or the equation 
function getSlopeEquation(x1, y1, slope) {
    
    var equation = "";
    // y = mx - b 
    var mx;
    var b =1;
    var x =1;
    //initial equation : y-y1 = m(x-x1) 

    //1) negate x1 and y1
    x1 = -1 * x1;
    y1 = -1 * y1;
    //2)  m(x-x1) 
    mx = slope * x;
    b = slope * x1;
    //3) find y, by passing y to the other part of the equation 
    b = b + (-1 * y1);
    //end result : y = mx - b , print 
    if(b>0){
        equation="y = " + mx + "x + " + b; 
    }
    else{
        equation="y = " + mx + "x  " + b; 
    } 

    return equation;
}
//****Website Function********//
//rotate Icon
function rotate(){
    document.getElementById("circleImage").id = "circleByteRotate";//rotate image
}




