var inputString = "172.316.254.1";

//check whether an ip Address is correct 
function isIPv4Address(inputString) {

    var dotIndex = new Array();
    var isInputAIPv4Address = true;
    
    for(var i=0;i<inputString.length;i++){
        if(inputString.charAt(i)=="."){
            dotIndex.push(i);
        }
    }
    
    var part = new Array();
    
     part.push(inputString.slice(0,dotIndex[0]));
     part.push(inputString.slice(dotIndex[0]+1,dotIndex[1]));
     part.push(inputString.slice(dotIndex[1]+1,dotIndex[2]));
     part.push(inputString.slice(dotIndex[2]+1,inputString.length));
    
    console.log(part[0].length);
    
    //more than 3 dots 
    if(dotIndex.length!=3)
        isInputAIPv4Address=false;
    
    //console.log(isInputAIPv4Address);
    
    for(var i=0;i<part.length;i++){
       // console.log(part[i]);
        //part[i]= parseInt(part[i],10);
        // console.log(part[i]);
        
        if(isNaN(part[i]) && isInputAIPv4Address==true){
            console.log( i+" index "+part[i] + " ocurred is a Nan");
            isInputAIPv4Address=false;
        }
        
        if(part[i].length==0){
            console.log( i+" index "+part[i] + " ocurred is nothing");
            isInputAIPv4Address=false;
        }
        
        if((part[i]>255 || part[i]<0) && isInputAIPv4Address==true){
            console.log( i+" index "+part[i] + "number out");
            isInputAIPv4Address=false;
        }
        
        
    }
    
    //console.log(dotIndex);
       
    return isInputAIPv4Address;
     
}
