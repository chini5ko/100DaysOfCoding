
var count=0;
function myFunction() {
   var userInput;
   var output = new Array();
   userInput= document.getElementById("myTextarea").value;
   userInput = userInput.split(" ");//turn it into an array 
   
   //add each word to the list of output
   for(var i=0;i<userInput.length;i++){
       if(userInput[i].length!=0){
           output.push("#"+userInput[i]);
       }
   }

   var screenOutput = "";
   for(var i=0;i<output.length;i++){
        screenOutput+= " " + output[i];
   }
        document.getElementById("show").innerHTML =screenOutput;
   }




