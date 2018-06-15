inputArray = [5, 3, 6, 7, 9];

function avoidObstacles(inputArray) {
    
    var eachJump = new Array(); 
    var obstacle = inputArray;
    
    //sort
    obstacle.sort(function(a, b){return a-b});

    //print all the jump decision
    for(var i=2;i<obstacle[obstacle.length-1]+2;i++){
        eachJump.push(i);
    }
    
    var jumpingGuy = 0;
    var passedAllObstacle =  false;
    var jumpToAnotherNumber = true;
    var jumpToAnotherIndex = false;
    
    
    
    //jumping guy start jumping guy number
    for(var i=0;i<obstacle[obstacle.length-1] && passedAllObstacle==false;i++){
        if(i>0){
            jumpingGuy=0;
        }
        jumpingGuy=eachJump[i];
        //add jumping guy
        console.log("start: " + jumpingGuy);
        jumpToAnotherIndex=false;
        
        //keep jumping until it passed the last obtacle 
        for(var j=0;jumpingGuy<(obstacle[obstacle.length-1]+2) && jumpToAnotherIndex==false;j++){
            
            //check whether jumping could jump to this number
            for(var e=0;e<obstacle.length && jumpToAnotherIndex==false;e++){
                 console.log("obstacle: " + obstacle[e]);
                //if equal start at another index for jumping guy
                if(jumpingGuy==obstacle[e]){
                    jumpToAnotherIndex=true;
                    console.log("NOT Passed tests: and change e"+ e);
                    jumpingGuy=0;
                    e=0;    
                }
                console.log("Passed tests: "+ e);
            }//check in withing the number
 
            
            jumpingGuy+=eachJump[i];
            console.log("keep adding: " + jumpingGuy); 
            
            //found answer
            if(jumpingGuy>obstacle[obstacle.length-1]){
                console.log("found answer: " + eachJump[i]);
                return eachJump[i];
                
            }
            
        }//increase jumping in within the number
    }//start for  
}
