function extractEachKth(inputArray, k) {

    var output = new Array();
    //k=k-1;
    
    for(var i=0;i<inputArray.length;i++)
        if(i==(k-1) || i==((k*2)-1) || i==((k*3)-1) || i==((k*4)-1) || i==((k*5)-1) )
        console.log("");
        else
            output.push(inputArray[i]);
            
     return output;
}
