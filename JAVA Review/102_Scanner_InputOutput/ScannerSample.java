/* Hector Liang
 * hl3169
 * This class will test the Scannner Class with a sleep test 
 * @date: <9/02/18>
 */
import java.util.Scanner;

public class ScannerSample{
     
    public static void main(String []args){
        //create a Object variable of the Scanner class
        Scanner keyboard = new Scanner(System.in);
        
        //Ask the user to input some words
        System.out.println("How many hours you sleep on weekdays?");
        String str = keyboard.nextLine(); 
        int sleepTime = Integer.parseInt(str);

        if(sleepTime > 10)
            System.out.println("Don't over sleep, do some exercise");
        else if(sleepTime >7)
            System.out.println("Keep that time! You are having a healthy time");
        else
            System.out.println("You need more sleep!");
       
    }//end main 
} //end class 