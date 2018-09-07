public class Elements{
   
    public Elements(){
        //constructor 
    }

    public int boilPoint(String element){
        int boilingPoint = 0;

        //both works
        if(element == "H2O")
        //if(element.equals("H2O"))
        boilingPoint=100;
        else
        boilingPoint = -1;

        return boilingPoint;
    }
}