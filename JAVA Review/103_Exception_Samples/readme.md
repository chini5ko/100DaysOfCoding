# Exception
A unwanted or unexpected event that occurs during a program.
For example: a file's name does not match with what is on the program. 

## My own review of exeption

I will use th folliwing source to summarize and review exeption 
Source of tutorial and code:

Link: https://www.geeksforgeeks.org/exceptions-in-java/


# 2 Types of Exceptions 

* Uncheck Exception 
* Check Exception 

## Unchecked Exception
The Programmer fault. 
Example: Runtime or Null

```
//Array of size 4. 
int[] UndergraduateSchools = new int[4];

UndergraduateSchools[1] = GS;
UndergraduateSchools[2] = CC;
UndergraduateSchools[3] = BC;
UndergraduateSchools[4] = SEAS; // this statement causes an exception 

// This statement is never executed
System.out.println("Which school do you belong to?");

```
The array index is from 0-3. 

---

## Checked Exception
User fault. 
Example: IO or Compile Time Exception

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