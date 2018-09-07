// Java read from a file 
// using Scanner Class
import java.io.*;
import java.util.Scanner;
public class CreateAFile
{
  public static void main(String[] args) throws Exception
  {

     //create output file
     PrintWriter output = new PrintWriter("newFileCreated.txt");

     output.println("Wood Block printing was used in 200 AC");

     output.close();
  }
}