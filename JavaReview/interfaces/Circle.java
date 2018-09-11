public class Circle implements Shape{
    //public class Circle{ does not work because it does not implemented Area 
    private double radius;

    public Circle(double r){
        radius = r;
    }

    public double getRadius(){
        return radius;
    }

    public String toString(){
        return "Radius: " + radius;
    }

    public double area(){
        return Math.PI * radius * radius;
    }

    //Circle is not abstract and does not override abstract method threeD() in Shape

    //Fixing error
    //three Dimension

    public double threeD(){
        return 3;
    }
}

