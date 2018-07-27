function chessBoardCellColor(cell1, cell2) {

    //if both are even, then they are true 
    //or if both are odd, they are true
    var cell1CharValue = 0;
    var cell1NumberValue = parseInt(cell1.charAt(1));
    
    var cell2CharValue = 0;
    var cell2NumberValue = parseInt(cell2.charAt(1));
    
    //cell 1 
    if(cell1.charAt(0)=='A' ||
       cell1.charAt(0)=='C' ||
       cell1.charAt(0)=='E' ||
       cell1.charAt(0)=='G' 
      ){
       cell1CharValue = 1;
       }
    else {
       cell1CharValue = 0;
       }
    
       
      //cell 2
    if(cell2.charAt(0)=='A' ||
       cell2.charAt(0)=='C' ||
       cell2.charAt(0)=='E' ||
       cell2.charAt(0)=='G' 
      ){
       cell2CharValue = 1;
       }
    else {
        cell2CharValue = 0;
    }
    
    var areSameColors = false;
    var cell1Values = (cell1CharValue + cell1NumberValue) + 0;
    var cell2Values = (cell2CharValue + cell2NumberValue) + 0;
      
    if((cell1Values + cell2Values) % 2 == 0)
        areSameColors = true;
    else 
        areSameColors = false;

    return areSameColors;     
}
function chessBoardCellColor(cell1, cell2) {

    //if both are even, then they are true 
    //or if both are odd, they are true
    var cell1CharValue = 0;
    var cell1NumberValue = parseInt(cell1.charAt(1));
    
    var cell2CharValue = 0;
    var cell2NumberValue = parseInt(cell2.charAt(1));
    
    //cell 1 
    if(cell1.charAt(0)=='A' ||
       cell1.charAt(0)=='C' ||
       cell1.charAt(0)=='E' ||
       cell1.charAt(0)=='G' 
      ){
       cell1CharValue = 1;
       }
    else {
       cell1CharValue = 0;
       }
    
       
      //cell 2
    if(cell2.charAt(0)=='A' ||
       cell2.charAt(0)=='C' ||
       cell2.charAt(0)=='E' ||
       cell2.charAt(0)=='G' 
      ){
       cell2CharValue = 1;
       }
    else {
        cell2CharValue = 0;
    }
    
    var areSameColors = false;
    var cell1Values = (cell1CharValue + cell1NumberValue) + 0;
    var cell2Values = (cell2CharValue + cell2NumberValue) + 0;
      
    if((cell1Values + cell2Values) % 2 == 0)
        areSameColors = true;
    else 
        areSameColors = false;

    return areSameColors;     
}
