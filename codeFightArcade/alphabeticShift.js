function alphabeticShift(inputString) {

    console.log('ABC'.charCodeAt(0));
     console.log(String.fromCharCode(65));
    var output = "";
    
    for(var i=0;i<inputString.length;i++){
        if(String.fromCharCode(inputString.charCodeAt(i)) == 'z')
            output+= 'a';
        else
        output+= String.fromCharCode(inputString.charCodeAt(i) + 1);
        
    }
    
    return output;
    
}
