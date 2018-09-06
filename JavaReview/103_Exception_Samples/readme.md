# Exception
A unwanted or unexpected event that occurs during a program.
For example: a file's name does not match with what is on the program. 

## My own review of exception

I will use the following source to summarize and review exception 
Source of tutorial and code:

- Link: https://www.geeksforgeeks.org/exceptions-in-java/
- Link: https://beginnersbook.com/2013/04/java-checked-unchecked-exceptions-with-examples/


# 2 Types of Exceptions 

* Unchecked Exception 
* Checked Exception 

## Unchecked Exception
The Programmer fault. 
Example: Runtime or Null

```
//Array of size 4. 
int[] UndergraduateSchools = new int[4];

UndergraduateSchools[1] = GS;
UndergraduateSchools[2] = CC;
UndergraduateSchools[3] = BC;
UndergraduateSchools[4] = TC; // this statement causes an exception 

//The correct answer will be replacing this line with the index "0" in the array:
//UndergraduateSchools[0] = SEAS;
  
// This statement is never executed
System.out.println("Which school do you belong to?");

```
The array index is from 0-3. 

---

## Checked Exception
* During compilation time 
* IO exception

User fault. 
Example: IO or Compile Time Exception

--- 
### Compile Time Exception

```
 public static void main(String[] args)
  {
    // imagen that we only have "textSampleFile.txt"
    File file = new File("C:\\USER\\textSample.txt"); //an exception will be thrown because there is not such a file

    //not run 
    Scanner sc = new Scanner(file);
 
    while (sc.hasNextLine())
      System.out.println(sc.nextLine());
  }

```
This won't compile because it did not catch handle the exception or throws  the exception
To solve this we could throws an exception in the main method. 

```
public static void main(String[] args) throws Exception

OR 

public static void main(String args[]) throws IOException
```

#### Output
```
Exception in thread "main" java.lang.Error: Unresolved compilation problems: 
Unhandled exception type FileNotFoundException
Unhandled exception type IOException
Unhandled exception type IOException
```
---
### IO exception

```
 public static void main(String[] args) throws Exception
  {
    // imagen that we only have "textSampleFile.txt"
    File file = new File("C:\\USER\\textSample.txt"); //an exception will be thrown because there is not such a file

    //not run 
    Scanner sc = new Scanner(file);
 
    while (sc.hasNextLine())
      System.out.println(sc.nextLine());
  }

```

Exception in thread "main" java.io.FileNotFoundException 
is thrown 

---

## 2 Methods to handle exception
- Declare the exception using throws keyword (the previous example we showed this)
- Handle the exceptions using try-catch blocks (this example is below this)

### Try-catch blocks (second method)

Notice that exception is not thrown in the main method.

```
  public static void main(String[] args) 
  {
    // pass the path to the file as a parameter
    try{
    File file =
      new File("C:\\Users\\Chinisko\\Desktop\\github\\100DaysOfCoding\\JAVA Review\\103_Exception_Samples\\secretFile.txt");
      Scanner sc = new Scanner(file);
 
      while (sc.hasNextLine())
        System.out.println(sc.nextLine());
    }
    catch(FileNotFoundException e){
      System.out.println("The specified file is not " +
			"present at the given path");
    }

   
  }
```

# Throws VS Throw Keywords
//next day 





