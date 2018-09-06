// Java read from a file 
// using Scanner Class
import java.io.*;
import java.util.Scanner;

public class FileScannedTryCatch
{
  public static void main(String[] args) throws Exception
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
}

//Exception in thread "main" java.io.FileNotFoundException