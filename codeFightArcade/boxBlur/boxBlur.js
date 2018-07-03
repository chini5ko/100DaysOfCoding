function boxBlur(image) {
    
    var output = new Array(); 

    for(var i = 0; i<image.length -2 ;i++)
    output[i] = new Array();
 
    
    console.log(image.length);
    
    var valueOfTheMidelPixel = 0;
    
    //loop everything, but the borders 
    //i & j is 1 bc we dont have to add the first row nor the index at 0
    for(var i = 1; i<image.length -1 ;i++){//move dow one row
        for(var j = 1; j<image[i].length -1;j++){ //move to next column
           // console.log(image[i][j]); //test
            
            //the meat, calculating 
            valueOfTheMidelPixel = 0;
            valueOfTheMidelPixel += image[i-1][j-1] + image[i-1][j] + image[i-1][j+1];
            valueOfTheMidelPixel += image[i][j-1]   + image[i][j]   + image[i][j+1];
            valueOfTheMidelPixel += image[i+1][j-1] + image[i+1][j] + image[i+1][j+1];
            
          //  console.log(image[i-1][j-1]+" " + image[i-1][j] + " " + image[i-1][j+1]);
          //  console.log(image[i][j-1]+" " + image[i][j] + " " + image[i][j+1]);
          //  console.log(image[i+1][j-1]+" " + image[i+1][j] + " " + image[i+1][j+1]);
            
            valueOfTheMidelPixel  = Math.floor(valueOfTheMidelPixel / 9);
              //console.log("loop happened: "+ i +" "+ j);
            output[i-1].push(valueOfTheMidelPixel);
           
        }  
    }
    return output;
}
