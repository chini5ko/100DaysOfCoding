function arrayMaxConsecutiveSum(inputArray, k) {

    var answer = 0;
    var stopFirstLoop = false;
   
    for(var i=0;i<inputArray.length && stopFirstLoop==false;i++){
        //add numbers 
        var soFarBiggestOne = 0;
        for(var j=0;j<k;j++){
            soFarBiggestOne+= inputArray[j+i];
        }
        
        if(soFarBiggestOne>answer){
            answer= soFarBiggestOne;  
        }
        
         if(isNaN(soFarBiggestOne)!=false){
             console.log(stopFirstLoop);
             stopFirstLoop=true;
              console.log(stopFirstLoop);
         }     
    }
    
    return answer;
}
