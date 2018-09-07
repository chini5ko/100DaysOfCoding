# Java 101 (compile and execute)

## Compile 
"javac"  is the command to compile a human text file to a Java bytecode (.class) file to be executed by a Java Virtual Machine

```
javac Water.java

OR

javac *.java (compile all the files in the folder by using *)

```
It should output .class files 

## Run java files
"java" command executes the Java bytecode without typing the (.java) or (.class) after the file's name. 
It actually execute the .class file. 

```
java Water

```

# Console output
```
H20

```

## Main Method
```
public class Water{
    public static void main(String[] args){
        System.out.println("H20");
    }
    
}

``` 