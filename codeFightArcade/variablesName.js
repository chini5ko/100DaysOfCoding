function variableName(name) {

    var varName = true;
    var FirstChar = name.charAt(0);
    
    //check first letter, only alphabet 
      if( (FirstChar >= 'a' && FirstChar <= 'z') 
         || (FirstChar >= 'A' && FirstChar <= 'Z')
        || FirstChar=='_'){
          varName=true;
      console.log(FirstChar + " is an alphabet.");
      }
      else{
        varName=false;
        console.log(FirstChar + " is not an alphabet.");   
         }
           
     
   
    for(var i=1;i<name.length && varName==true ;i++){
        var checkC = name.charAt(i);
        
         if((checkC >= 'a' && checkC <= 'z') 
         || (checkC >= 'A' && checkC <= 'Z')
           ||checkC>= 0 || checkC=='_' ){
             varName=true;
             console.log(varName + " at " + checkC);
             if(checkC == " "){
                 varName=false;
             }
         }
           
            else{
                varName= false;
                console.log(varName + " at " + checkC);
            }
    }
     
    
    return varName;

}
