function minesweeper(matrix) {
      
    //creating a 2D array 
    var mValues = new Array(); 
    var output = new Array(); 
    for(var i = 0; i<matrix.length ;i++){
        mValues[i] = new Array();
        output[i] = new Array();  
    }

    //convert true to 1 and false to 0
    for(var row = 0; row<matrix.length ;row++){//move dow one row
        for(var col = 0; col<matrix[row].length ;col++){ //move to next column
            
            if(matrix[row][col]==true)
                mValues[row].push(1);
            else
                mValues[row].push(0);  
        }
    }
    console.log(mValues);
  //  console.log(mValues[mValues.length-1][mValues[mValues.length-1].length-1]);
    
    var valueOfCell;
    for(var row = 0; row<matrix.length;row++){//move dow one row
        for(var col = 0; col<matrix[row].length ;col++){ //move to next column
         //***** Corners *****//
            if(row==0 && col==0){//left top corner
                valueOfCell = mValues[0][1] + mValues[1][0] + mValues[1][1] ;
            }
            
            else if(row==0 && col==mValues[0].length-1){//right top corner
                valueOfCell = mValues[0][mValues[0].length-2] + mValues[1][mValues[0].length-2] + mValues[1][mValues[0].length-1] ;
            }
            
            else if(row==(mValues.length-1) && col==0){//left down c
              
                valueOfCell = mValues[mValues.length-2][0] + mValues[mValues.length-2][1] + mValues[mValues.length-1][1] ;;
            }
            else if(row==(mValues.length-1) && col==(mValues[mValues.length-1].length-1)){//left down
                valueOfCell = mValues[mValues.length-1][mValues[mValues.length-1].length-2] ;//left
                valueOfCell += mValues[mValues.length-2][mValues[mValues.length-2].length-1] ;//top
                valueOfCell += mValues[mValues.length-2][mValues[mValues.length-2].length-2] ;//diagonal 
            }
              //***** side, !corners *****//
              
            else if(col==0){//left
                  valueOfCell = mValues[row-1][col] + mValues[row-1][col+1] ;
                  valueOfCell +=mValues[row][col+1];
                  valueOfCell += mValues[row+1][col] + mValues[row+1][col+1];
            }
            else if(col==mValues[mValues.length-1].length-1){//right
                  valueOfCell = mValues[row-1][col-1] + mValues[row-1][col] ;
                  valueOfCell +=mValues[row][col-1];
                  valueOfCell += mValues[row+1][col-1] + mValues[row+1][col];
            }
            else if(row==0){//top
                 valueOfCell = mValues[row][col-1] + mValues[row][col+1] ;
                 valueOfCell += mValues[row+1][col-1] + mValues[row+1][col]+ mValues[row+1][col+1];
            }
            else if(row==(mValues.length-1)){//down
                 valueOfCell = mValues[row-1][col-1] + mValues[row-1][col]+ mValues[row-1][col+1];
                 valueOfCell += mValues[row][col-1] + mValues[row][col+1] ;
                
            }
            else{//center
                   valueOfCell = mValues[row-1][col-1] + mValues[row-1][col]+ mValues[row-1][col+1];
                   valueOfCell += mValues[row][col-1] + mValues[row][col+1] ;
                   valueOfCell += mValues[row+1][col-1] + mValues[row+1][col]+ mValues[row+1][col+1];
            }
            output[row].push(valueOfCell);
            //console.log(output);
        }
    }
   return output;
}
