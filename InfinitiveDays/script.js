//document.getElementById("show").innerHTML = "Test";

//start day 
var day = 0;
var time = 1000;
// Update the count down every 1 second
var x = setInterval(function() {

    // If the count down is finished, write some text 
    day+=1;
      document.getElementById("show").innerHTML = "var days = " + day + " ;";

      if(day > 100){
        document.getElementById("show").innerHTML = "var days = " + 100 + " ;";
        document.getElementById("icon").className= "fa fa-check-circle";
        document.getElementById("icon").style="font-size:48px;color:rgba(39, 233, 33, 0.897)"
      }

      if(day > 105)
      document.getElementById("newIf").innerHTML = "if (day == 100) { <br>  <br> stopPostingOnFB(); <br> <br> "  +
      "gitEveryday(); <br> }";

  }, 110);