# Java 102 (Scanner and Files - io)

##  Librarries 
Scanner 
io
```
import java.util.Scanner;
import java.io.*;

```


## Scanning a File


```
   File file =
      new File("C:\\Users\\Chinisko\\Desktop\\github\\100DaysOfCoding\\javaVisualStudioTest\\102_Scanner_InputOutput\\textSample.txt");
    Scanner sc = new Scanner(file);
 
    while (sc.hasNextLine())
      System.out.println(sc.nextLine());

```

# Creating a txt file
```

     PrintWriter output = new PrintWriter("newFileCreated.txt");

     output.println("Wood Block printing was used in 200 AC");

     output.close();

```





