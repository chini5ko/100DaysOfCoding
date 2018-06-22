
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

/**Main web - Index - Home */
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

    console.log("index" + answer);

    if (x1.length == 0 || y1.length == 0 || x2.length == 0 || y2.length == 0) {
        window.alert("Enter a digit");
    }
    else {
        document.getElementById("showResult").innerHTML = answer;
    }
}

/**JS Function level 1  */
//for(var i=0;i<20;i++){
    //console.log( Math.floor((Math.random() * 10) + 1))
//}
 //set values 1-10
 var x1 = Math.floor((Math.random() * 10) + 1);
 var y1 = Math.floor((Math.random() * 10) + 1);
 var x2 = Math.floor((Math.random() * 10) + 1);
 var y2 = Math.floor((Math.random() * 10) + 1);

 while(x2-x1==0){
   // x1 =1;// Math.floor((Math.random() * 10) + 1);
   //  x2 =1;// Math.floor((Math.random() * 10) + 1);
    x1 = Math.floor((Math.random() * 10) + 1);
    x2 = Math.floor((Math.random() * 10) + 1);
    console.log("they were equal");
 }
 
    var generatedEquationSlope = getSlopeThatPassedThrough2Points(x1, y1, x2, y2);
    generatedEquationSlope = Math.round(100*generatedEquationSlope)/100;// round X to hundredths round X to hundredths
    console.log("slope submit: "+generatedEquationSlope);

 document.getElementById("showPoints").innerHTML = "(" + x1 + " ," + y1 + ") , " + "(" + x2 + " ," + y2 + ")";
function submitAnswer() {
    //rotate the image
  //  rotate();
    //get line values of the lines
   // var answer = getSlopeThatPassedThrough2Points(x1, y1, x2, y2);
   
    var userAnser = document.getElementById("userAnswer").value;
    if(userAnser==generatedEquationSlope){
        console.log("correct");
        document.getElementById("answerIcon").innerHTML =" ";
        document.getElementById("answerIcon").className = "fa fa-check-circle-o";
        document.getElementById("answerIcon").style = "font-size:48px;color:green";
    }
    else{
        console.log("incorrect");
        document.getElementById("answerIcon").innerHTML =" ";
        document.getElementById("answerIcon").className = "fa fa-close";
        document.getElementById("answerIcon").style = "font-size:48px;color:red";
    }
   
 //  setRotateBack();
}

function getEquationFormula() {
    document.getElementById("answerIcon").innerHTML = "m = (y2 - y1) / (x2 - x1) ";
    document.getElementById("answerIcon").className =" ";
    document.getElementById("answerIcon").style = "font-size:48px;color:white";
}



//****Math FORMULAS********//
// get slope formula  of two points in the plane or graph
function getSlopeThatPassedThrough2Points(x1, y1, x2, y2) {
    var m; //m is slope 
    m = (y2 - y1) / (x2 - x1);//equation to find m 
    return m;
}

//return a string or the equation 

function getBFromSlopeEquation(){
    // y = mx - b 
    var b = y1;
   // var mx;
    var x =1;
    //initial equation : y-y1 = m(x-x1) 
    //1) negate x1 and y1
    x1 = -1 * x1;
    y1 = -1 * y1;
    //2)  m(x-x1) 
    mx = generatedEquationSlope * x;
    b = generatedEquationSlope * x1;
    //3) find y, by passing y to the other part of the equation 
    b = b + (-1 * y1);
    return b;
}

function getSlopeEquation(x1, y1, slope) {
    
    var equation = "";
    // y = mx - b 
    var b =1;
    var mx;
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
    console.log("id set");
}

function setRotateBack(){
    document.getElementById("circleByteRotate").id = "circleImage";
    console.log("id back");
}

console.log("draw this line:" +  "(" + x1 + " ," + y1 + ") , " + "(" + x2 + " ," + y2 + ")");
//slope, x and y


var bEquation = getBFromSlopeEquation();
console.log(getSlopeEquation(x1,y1,generatedEquationSlope));
myGraph.drawEquation(function(x) {
   // var b = getBFromSlopeEquation((x1,y1,slopeForsEQ));
    console.log(generatedEquationSlope+" " + x + " " +bEquation);
    return (generatedEquationSlope*x) + bEquation;
  }, 'aqua', 3);









