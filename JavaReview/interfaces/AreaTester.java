public class AreaTester{
    public static final void main(String[] args){
        Shape[] s = new Shape[5];

        //the only method that can be invoke are the only mehtods that are specified in Shape 

        //to string return a Hash value of that object
        //String class descend from Hash ?
        //every class inherited the toString(), or we can overrride it ! 

        s[0] = new Rectangle(2,3);
       // s[1] = new Circle(2,3);

        //review polimorphism 
        System.out.println(s[0].area());
        System.out.println(s[0]);

        //error bc is not part of Object 
        // System.out.println(s[0].getLength());

        //must review Comparable ! 
            // *** return -1. 0 , 1 bc more, equal, less

    }
}