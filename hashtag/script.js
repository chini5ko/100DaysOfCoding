function myFunction() {

    rotate();

    /* console.log("1 "+document.getElementById("circleByte"));//print*/
    var x = document.getElementById("digitAge").value;

    if (x.length == 0) {
        window.alert("Enter a digit");
        //w

    }
    else {
        var num = parseInt(x, 10);
        var answer = (num).toString(2);
        document.getElementById("demo").innerHTML = "your age in binary";
        document.getElementById("showBinary").innerHTML = answer;
    }
}

function myBinary() {
    rotate();

    /* console.log("1 "+document.getElementById("circleByte"));//print*/
    var x = document.getElementById("digitAge").value;

    if (x.length == 0) {
        window.alert("Enter a Binary");
        //w

    }
    else {
        var num = parseInt(x, 2);
        var answer = (num).toString(10);

        document.getElementById("demo").innerHTML = "your age in binary";
        document.getElementById("showBinary").innerHTML = answer;
    }
}

function rotate() {

    document.getElementById("circleByte").id = "circleByteRotate";//rotate

}
