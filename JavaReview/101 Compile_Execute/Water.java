public class Water{
    public static void main(String[] args){

        String water = "H2O";
        System.out.println(water);
        
        Elements tools = new Elements();

        System.out.println(water+ " Boil point is " + tools.boilPoint(water));
    }  
}
