# Review Java
- implements
- comparable 
- Generic classes? ArrayList
- Polymorphism 

--- 

### Class notes
- <Anytype> // what is this 
ex. public static <Anytype extends Comparable<Anytype>>

Implement comparable

# Interface 
It has the characteristic of a class. An interface class contains of methods and variables; however, the methods declared in the interface are abstract (only method signature, no body). It provide total abstraction to the class. 


```
public interface Shape{

    public double area();

}
```

# Implements 
A class that implements interface must implement all the methods in the interface. 

### Circle Class that implements the Shape interface  which has the Area method
```
public class Circle implements Shape{
    //public class Circle{ does not work because it does not implemented Shape (which has the area abstract method?) 
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

}
```

### Square Class that implements the Shape interface which has the Area method

```
public class Rectangle implements Shape{

    private double length;
    private double witdh;

    public Rectangle(double length, double width){
        //this : implicicit argument
        this.length = length;
        this.witdh = width;
    }

    public double area(){
        return length*witdh;
    }

    
    public double getLength(){
        return length;
    }

    public String toString(){
        return "L: " + length + " --- W: " + witdh;
    }

    public double getWidth(){
        return this.witdh;
    }
}
```

## Why use interface? (GeeksForGeeks)
Since java does not support multiple inheritance in case of class, but by using interface it can achieve multiple inheritance (GeeksForGeeks)

# AREA TESTER
```
public class AreaTester{
    public static final void main(String[] args){
        Shape[] s = new Shape[5];

        s[0] = new Rectangle(2,3);
        s[1] = new Circle(2);

        System.out.println(s[0].area());
        System.out.println(s[0]);
        System.out.println(s[1].area());
        System.out.println(s[1]);

    }
}
```

# Output
```
6.0
L: 2.0 --- W: 3.0
12.566370614359172
Radius: 2.0
```

## Comparable 
    return 1, 0 , -1
    has a implicit paramenter
    passing an argument of the same type. 

# Sort


# Links review and source
- https://www.tutorialspoint.com/java/java_interfaces.html
- https://www.geeksforgeeks.org/interfaces-in-java/ 
 
 # To Review
 - https://www.geeksforgeeks.org/dynamic-method-dispatch-runtime-polymorphism-java/


