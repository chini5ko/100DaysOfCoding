function stringsRearrangement(inputArray) {
    
    //  *** generate index ***  // 
    var arrayIndexs = "";
    for (var i=0;i<inputArray.length;i++)
        arrayIndexs+=''+i;//ex: '012'. '0123'

    //  *** Permutation ***  // 
    var input = arrayIndexs.split('');//permute whatever is inside 
    var indexes = perms(input);
    for (var i = 0; i < indexes.length; i++) {
        indexes[i] = indexes[i].join('');
    }
    
    //console.log(indexes); //indexes[1] = '012'
    //console.log(indexes[0].charAt(1)); //indexes[1] = '012'
    //
    
    var differByOneChar = false;
    
    //each permutation 
    for (var i=0;i<indexes.length && differByOneChar==false;i++){
        //console.log(i);
        var allStringDifferByOneChar = 0;
        for (var e=0;e<indexes[i].length-1;e++){
            
            //console.log(inputArray[indexes[i].charAt(e)]);
            //console.log(inputArray[indexes[i].charAt(e+1)]);
            
            var str1 = inputArray[indexes[i].charAt(e)];
            var str2 = inputArray[indexes[i].charAt(e+1)];
            
            if(differByOneCharacter(str1, str2)==true)
                allStringDifferByOneChar++;
        }
        //one cycle 
        //console.log("-----");
        if(allStringDifferByOneChar==(inputArray.length-1))
        differByOneChar=true;
        
    }

    return differByOneChar;

}

   //permute
  function perms(data) {
    if (!(data instanceof Array)) {
        throw new TypeError("input data must be an Array");
    }

    data = data.slice();  // make a copy
    var permutations = [],
        stack = [];

    function doPerm() {
        if (data.length == 0) {
            permutations.push(stack.slice());
        }
        for (var i = 0; i < data.length; i++) {
            var x = data.splice(i, 1);
            stack.push(x);
            doPerm();
            stack.pop();
            data.splice(i, 0, x);
        }
    }
      
    //return an array list of all possible combination as index     
    doPerm();
    return permutations;
}

function differByOneCharacter(str1, str2){
    
    var differByOneCharacter = false;
    //str1 = "abc";
    
   // str2 = "abd";
    
    var countTrue = 0;
    
    for (var i=0;i<str1.length;i++)
        if(str1.charAt(i)==str2.charAt(i))
            countTrue++;
    
    //console.log((str1.length -1) + "they are:");
    
    return countTrue == (str1.length -1);
}



