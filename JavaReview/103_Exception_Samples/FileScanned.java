// Java read from a file 
// using Scanner Class
import java.io.File;
import java.util.Scanner;
public class FileScanned
{
  public static void main(String[] args) throws Exception
  {
    // pass the path to the file as a parameter
    File file =
      new File("C:\\Users\\Chinisko\\Desktop\\github\\100DaysOfCoding\\javaVisualStudioTest\\102_Scanner_InputOutput\\textSample.txt");
    Scanner sc = new Scanner(file);
 
    while (sc.hasNextLine())
      System.out.println(sc.nextLine());
  }
}

//Exception in thread "main" java.io.FileNotFoundException