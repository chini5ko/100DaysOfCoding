function firstDigit(inputString) {

    
    var foundFirstDigit = false;
    
    for(var i=0;i<inputString.length && foundFirstDigit==false;i++){
        if(isNaN(inputString.charAt(i))==true || inputString.charAt(i)==" "){
             console.log("is not a digit");            
        }
        else{
            foundFirstDigit=true;
            return inputString.charAt(i);
        }
           
    }

}
